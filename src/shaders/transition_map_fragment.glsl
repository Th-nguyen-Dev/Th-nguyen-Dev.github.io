float blend = utime - prevMonth;
// vec4 sampledDiffuseColor = mix(texture2D(map1,vMapUv), texture2D(map2,vMapUv), blend);
// vec4 sampledDiffuseColor = mix(texture2D(map, vMapUv),texture2D(map1, vMapUv), blend);
vec4 firstMonthDC = texture2D(map, firstMonthUv);
vec4 secondMonthDC = texture2D(map, secondMonthUv);
vec4 sampledDiffuseColor = mix(firstMonthDC,secondMonthDC, blend);
// vec4 sampledDiffuseColor = firstMonthDC;
// vec4 sampledDiffuseColor = texture2D(map, vMapUv);
// vec4 sampledDiffuseColor = vec4(1.0, 1.0, 1.0, 1.0);
// vec4 sampledDiffuseColor = vec4(blend, 1.0, 1.0, 1.0);
diffuseColor = sampledDiffuseColor;