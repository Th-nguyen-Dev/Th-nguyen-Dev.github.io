import * as THREE from 'three';

async function splitMeshGroups(mesh, n, radius) {
    const geometry = mesh.geometry.clone();

    const indices = geometry.index.array;
    const positions = geometry.attributes.position.array;

    const segments = Array.from({ length: n * n }, () => []);
    const vertex = new THREE.Vector3();
    const center = new THREE.Vector3();

    const numThreads = navigator.hardwareConcurrency || 4; // Use the number of logical processors or default to 4
    const chunkSize = Math.ceil(indices.length / (3 * numThreads));
    const promises = [];

    for (let t = 0; t < numThreads; t++) {
        const start = t * chunkSize * 3;
        const end = Math.min(start + chunkSize * 3, indices.length);

        promises.push(new Promise((resolve) => {
            const workerSegments = Array.from({ length: n * n }, () => []);
            for (let i = start; i < end; i += 3) {
                const a = indices[i];
                const b = indices[i + 1];
                const c = indices[i + 2];

                // Get positions
                vertex.fromArray(positions, a * 3);
                center.copy(vertex);
                vertex.fromArray(positions, b * 3);
                center.add(vertex);
                vertex.fromArray(positions, c * 3);
                center.add(vertex);

                // Compute center of triangle
                center.divideScalar(3);

                // Convert center to spherical coordinates:
                // radius r, polar angle φ (latitude), azimuth angle θ (longitude)
                const r = center.length();
                const phi = Math.acos(center.z / r);           // range: 0..π
                const theta = Math.atan2(center.y, center.x);  // range: -π..π

                // Normalize φ, θ to 0..1
                const normalizedLat = phi / Math.PI;                    // 0..1
                const normalizedLon = (theta + Math.PI) / (2 * Math.PI); // 0..1

                // Scale to partitions
                const latIndex = Math.floor(normalizedLat * n);
                const lonIndex = Math.floor(normalizedLon * n);

                // 2D-to-1D segment index
                const segmentIndex = latIndex * n + lonIndex;

                workerSegments[segmentIndex].push(a, b, c);
            }
            resolve(workerSegments);
        }));
    }

    const workerResults = await Promise.all(promises);
    
    workerResults.forEach(workerSegments => {
        workerSegments.forEach((segment, index) => {
            segments[index].push(...segment);
        });
    });


    const combinedIndices = segments.flat();
    const indexBufferAttribute = new THREE.BufferAttribute(new Uint16Array(combinedIndices), 1);
    geometry.setIndex(indexBufferAttribute);

    let offset = 0;
    segments.forEach((indices, i) => {
        const count = indices.length;
        geometry.addGroup(offset, count, i);
        offset += count;
    });

    return new THREE.Mesh(geometry, mesh.material);
}


async function splitGeometryByUV(geometry, n = 4, normalizeUV = false) {
    const indices = geometry.index.array;
    const uvAttr = geometry.attributes.uv.array; // 2 floats per vertex: (u, v)

    // Prepare n*n segment arrays
    const segments = Array.from({ length: n * n }, () => []);

    // For each triangle, determine its UV center, find which sub-tile it belongs to
    for (let i = 0; i < indices.length; i += 3) {
        const a = indices[i];
        const b = indices[i + 1];
        const c = indices[i + 2];

        // Get UVs
        const aU = uvAttr[a * 2], aV = uvAttr[a * 2 + 1];
        const bU = uvAttr[b * 2], bV = uvAttr[b * 2 + 1];
        const cU = uvAttr[c * 2], cV = uvAttr[c * 2 + 1];

        // Average UV (center of the triangle in UV space)
        const centerU = (aU + bU + cU) / 3;
        const centerV = 1 - (aV + bV + cV) / 3;

        // Determine sub-tile index
        const xIndex = Math.floor(centerU * n);
        const yIndex = Math.floor(centerV * n);
        const segmentIndex = yIndex * n + xIndex;

        segments[segmentIndex].push(a, b, c);
    }

    if (normalizeUV) {
        // const uvCount = uvAttr.length / 2;
        // for (let i = 0; i < uvCount; i++) {
        //     let u = uvAttr[i * 2];
        //     let v = uvAttr[i * 2 + 1];

        //     // Calculate the tile indices
        //     const tileU = Math.floor(Math.fround(u * n));
        //     const tileV = Math.floor(Math.fround(v * n));

        //     // Normalize UVs within their respective tile with higher precision
        //     uvAttr[i * 2] = Math.fround((u * n - tileU) % 1);
        //     uvAttr[i * 2 + 1] = Math.fround((v * n - tileV) % 1);
        // }
        // geometry.attributes.uv.needsUpdate = true;
    }

    // Rebuild index buffer & groups
    geometry.clearGroups();
    const combinedIndices = segments.flat();
    geometry.setIndex(new THREE.BufferAttribute(new Uint32Array(combinedIndices), 1));

    let offset = 0;
    segments.forEach((seg, segIndex) => {
        geometry.addGroup(offset, seg.length, segIndex);
        offset += seg.length;
    });

    return geometry;
}

export { splitMeshGroups, splitGeometryByUV };