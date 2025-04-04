float blend = utime - prevMonth;
// vec4 sampledDiffuseColor = mix(texture2D(map1,vMapUv), texture2D(map2,vMapUv), blend);
// vec4 sampledDiffuseColor = mix(texture2D(map, vMapUv),texture2D(map1, vMapUv), blend);
vec4 firstMonthDC = texture2D(map, firstMonthUv);
vec4 secondMonthDC = texture2D(map, secondMonthUv);

vec4 cloud = texture2D(cloudTexture, vMapUv + vec2(fract(utimeCloud), 0.0));
vec4 finalColor = mix(firstMonthDC,secondMonthDC, blend);
finalColor = mix(cloud, finalColor, 1.0 - cloud.g);

diffuseColor = finalColor;
