uniform sampler2D month[12];
uniform float utime;
uniform int monthIndex;
varying vec2 vMapUv;

void main()
{
    vMapUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
