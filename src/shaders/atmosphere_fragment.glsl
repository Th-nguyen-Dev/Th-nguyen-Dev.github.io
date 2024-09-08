varying vec2 vertexUv;
varying vec3 vertexNormal;
varying vec3 vertexPosition;

void main(){
    vec3 viewDirection = normalize(cameraPosition - vertexPosition);
    float visible =  dot(vertexNormal, viewDirection);
    float intensity = abs(pow(visible,3.0)*7.0);
    vec3 atmosphere = vec3(0,0.2,1.0);
    csm_DiffuseColor = vec4(atmosphere,intensity);

}