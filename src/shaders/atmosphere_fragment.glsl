varying vec2 vertexUv;
varying vec3 vertexNormal;
varying vec3 vertexPosition;

void main(){
    vec3 viewDirection = normalize(cameraPosition - vertexPosition);
    float intensity = 1.0 - dot(vertexNormal, viewDirection);
    vec3 atmosphere = vec3(0.0,0.0,1.0);
    csm_DiffuseColor = vec4(atmosphere,pow(intensity,8.0));

}