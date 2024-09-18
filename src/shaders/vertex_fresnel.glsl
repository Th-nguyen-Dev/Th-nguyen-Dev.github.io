varying vec2 vertexUV;
varying vec3 vertexNormal;
varying vec3 vertexPosition;
void main()
{
    vertexPosition = position;
    vertexNormal = normal;
    vertexUV = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
