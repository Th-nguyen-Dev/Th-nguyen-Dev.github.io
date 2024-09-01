uniform mat3 mapTransform;
varying vec2 vMapUv;

void main()
{
    vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
}
