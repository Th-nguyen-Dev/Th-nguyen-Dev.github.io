varying vec2 vertexUv;
varying vec3 vertexNormal;
varying vec3 vertexPosition;

void main(){
    vec3 viewDirection = normalize(cameraPosition - vertexPosition);
    float intensity = clamp(1.0 - dot(vertexNormal, viewDirection), 0.0, 1.0);
    vec3 atmosphere = mix(vec3(0.0, 0.2, 1.0), vec3(0.8, 0.8, 1.0), pow(intensity, 5.0));
    csm_DiffuseColor = vec4(atmosphere, pow(intensity,1.3));

}