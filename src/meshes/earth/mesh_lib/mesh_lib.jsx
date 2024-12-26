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

                vertex.fromArray(positions, a * 3);
                center.copy(vertex);
                vertex.fromArray(positions, b * 3);
                center.add(vertex);
                vertex.fromArray(positions, c * 3);
                center.add(vertex);
                center.divideScalar(3);

                // Normalize the center coordinates based on the radius
                const normalizedX = (center.x / radius + 1) / 2;
                const normalizedY = (center.y / radius + 1) / 2;

                const scaledX = normalizedX * n;
                const scaledY = normalizedY * n;

                const segmentX = Math.floor(scaledX);
                const segmentY = Math.floor(scaledY);
                const segmentIndex = segmentY * n + segmentX;

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

export { splitMeshGroups };
