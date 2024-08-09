varying vec2 vertexUv;
varying vec3 vertexNormal;
varying vec3 vertexPosition;

void main(){
    vec3 viewDirection = normalize(cameraPosition - vertexPosition);
    float visible =  dot(vertexNormal, viewDirection);
    float intensity = pow(visible,2.0);
    float opacity = 0.4;
    vec3 atmosphere = vec3(0.0,0.12,1.0);
    gl_FragColor = vec4(atmosphere,opacity) * intensity;

}