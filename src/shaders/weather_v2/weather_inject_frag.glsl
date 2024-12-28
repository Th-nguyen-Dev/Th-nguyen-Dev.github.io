float currentMonth = floor(utime)
float blend = utime - currentMonth;

vec4 firstMonthDC = texture2D(mapCurrent, vMapUv);
vec4 secondMonthDC = texture2D(mapNext, vMapUv);

vec4 sampledDiffuseColor = mix(firstMonthDC,secondMonthDC, blend);

diffuseColor *= sampledDiffuseColor;
csm_DiffuseColor *= sampledDiffuseColor;