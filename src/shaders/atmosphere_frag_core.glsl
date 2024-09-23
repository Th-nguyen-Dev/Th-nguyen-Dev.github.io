#include <color_fragment>
vec3 viewDirection = normalize(cameraPosition - vertexPosition);
float visible =  dot(vertexNormal, viewDirection);
float intensity = clamp(abs(pow(visible,2.0))*5.0,0.0,1.0);
vec3 colour = mix(vec3(0.0, 0.2, 1.0),vec3(0.8, 1.0, 1.0), abs(pow(visible,3.0))*10.0);
diffuseColor = vec4(colour,intensity);