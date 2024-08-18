uniform sampler2D month[12];
uniform float utime;
uniform int monthIndex;
varying vec2 vMapUv;

void main()
{
    vec4 colors[12];
    colors[0] = vec4(1.0, 0.0, 0.0, 1.0); // Red
    colors[1] = vec4(0.0, 1.0, 0.0, 1.0); // Green
    colors[2] = vec4(0.0, 0.0, 1.0, 1.0); // Blue
    colors[3] = vec4(1.0, 1.0, 0.0, 1.0); // Yellow
    colors[4] = vec4(1.0, 0.0, 1.0, 1.0); // Magenta
    colors[5] = vec4(0.0, 1.0, 1.0, 1.0); // Cyan
    colors[6] = vec4(0.5, 0.5, 0.5, 1.0); // Gray
    colors[7] = vec4(1.0, 0.5, 0.0, 1.0); // Orange
    colors[8] = vec4(0.5, 0.0, 0.5, 1.0); // Purple
    colors[9] = vec4(0.5, 0.5, 0.0, 1.0); // Olive
    colors[10] = vec4(0.0, 0.5, 0.5, 1.0); // Teal
    colors[11] = vec4(0.0, 0.0, 0.0, 1.0); // Black

    gl_FragColor = colors[monthIndex];
}