varying vec2 vertexUv;
varying vec3 vertexNormal;
varying vec3 vertexPosition;
void main(){
    vec3 viewDirection = normalize(cameraPosition - vertexPosition);
    float intensity = 1.0 - dot(vertexNormal, viewDirection);
    vec3 atmosphere = vec3(0.3,0.6,1.0);

    gl_FragColor = vec4(atmosphere,pow(intensity,1.99));

}