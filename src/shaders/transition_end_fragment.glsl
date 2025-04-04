vec3 vNormalMine = normalize(vNormal);
vec3 vViewPositionMine = normalize(vViewPosition);
float NdotV =max(dot(vNormalMine, vViewPositionMine), 0.0001);

float fresnelMine = pow(1.0 - NdotV, 3.0);
vec3 atmosphereMine = mix(vec3(0.0, 0.2, 1.0), vec3(0.8, 0.8, 1.0), pow(NdotV, 20.0));

gl_FragColor += vec4(atmosphereMine, 1.0) * fresnelMine;
