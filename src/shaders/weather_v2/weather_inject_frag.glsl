vec4 startMonthDC = vec4(0.0, 0.0, 0.0, 0.0);
vec4 endMonthDC = vec4(0.0, 0.0, 0.0, 0.0);

if (currentBuffer == 1 ){
    startMonthDC = texture2D(mapCurrent_1, vMapUv);
    endMonthDC = texture2D(mapNext_1, vMapUv);
} else {
    startMonthDC = texture2D(mapCurrent_2, vMapUv);
    endMonthDC = texture2D(mapNext_2, vMapUv);
}

vec4 sampleDiffuseColor = mix(startMonthDC, endMonthDC, blend);
diffuseColor *= sampleDiffuseColor;