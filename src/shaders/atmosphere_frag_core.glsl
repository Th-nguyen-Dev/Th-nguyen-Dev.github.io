#include <color_fragment>
vec3 viewDirection = normalize(cameraPosition - vertexPosition);
float visible =  dot(vertexNormal, viewDirection);
float intensity = abs(pow(visible,3.0));
vec3 colour = mix(vec3(0.0, 0.2, 1.0),vec3(1.0, 1.0, 1.0),intensity*3.0);
diffuseColor = vec4(colour,intensity);