varying vec2 vertexUv;
varying vec3 vertexNormal;
varying vec3 vertexPosition;

void main(){
    vec3 viewDirection = normalize(cameraPosition - vertexPosition);
    float intensity = clamp(1.1- dot(vertexNormal, viewDirection),0.0,1.0);
    vec3 atmosphere = vec3(0.0,0.2,1.0);
    csm_DiffuseColor = vec4(atmosphere,pow(intensity,3.0));

}