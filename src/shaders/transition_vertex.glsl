varying vec2 firstMonthUv;
varying vec2 secondMonthUv;
uniform mat3 map1Transform;
uniform mat3 map2Transform; 
void main(){
    firstMonthUv = ( map1Transform * vec3( MAP_UV, 1 ) ).xy;
    secondMonthUv = ( map2Transform * vec3( MAP_UV, 1 ) ).xy;
}