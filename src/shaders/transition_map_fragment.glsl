float blend = fract(utime);
// vec4 sampledDiffuseColor = mix(texture2D(map1,vMapUv), texture2D(map2,vMapUv), blend);
// vec4 sampledDiffuseColor = mix(texture2D(map, vMapUv),texture2D(map1, vMapUv), blend);
vec4 sampledDiffuseColor = texture2D(map1, vMapUv);
// vec4 sampledDiffuseColor = vec4(1.0, 1.0, 1.0, 1.0);
// vec4 sampledDiffuseColor = vec4(blend, 1.0, 1.0, 1.0);
diffuseColor = sampledDiffuseColor;
