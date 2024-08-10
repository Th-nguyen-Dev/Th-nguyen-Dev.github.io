varying vec2 vertexUv;
varying vec3 vertexNormal;
varying vec3 vertexPosition;

void main(){
    vec3 viewDirection = normalize(cameraPosition - vertexPosition);
    float visible =  abs(dot(vertexNormal, viewDirection));
    float intensity = pow(visible,2.0)*5.0;
    float opacity = 1.0;
    vec3 atmosphere = vec3(0.0,0.15,1.0);
    csm_DiffuseColor = vec4(atmosphere,intensity);

}