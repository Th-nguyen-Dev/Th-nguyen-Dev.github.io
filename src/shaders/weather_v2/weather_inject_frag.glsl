float currentMonth = floor(utime);
float blend = fract(utime);

vec4 firstMonthDC = texture2D(mapCurrent, vMapUv);
vec4 secondMonthDC = texture2D(mapNext, vMapUv);

vec4 mixSampledDC = mix( firstMonthDC, secondMonthDC, blend);

diffuseColor *= mixSampledDC;