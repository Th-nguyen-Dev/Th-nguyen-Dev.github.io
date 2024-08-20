vec4 colorMonthFirst;
vec4 colorMonthSecond;

switch (monthIndex) {
    case 0:
        colorMonthFirst = texture2D(month[0], vMapUv);
        colorMonthSecond = texture2D(month[1], vMapUv);
        break;
    case 1:
        colorMonthFirst = texture2D(month[1], vMapUv);
        colorMonthSecond = texture2D(month[2], vMapUv);
        break;
    case 2:
        colorMonthFirst = texture2D(month[2], vMapUv);
        colorMonthSecond = texture2D(month[3], vMapUv);
        break;
    case 3:
        colorMonthFirst = texture2D(month[3], vMapUv);
        colorMonthSecond = texture2D(month[4], vMapUv);
        break;
    case 4:
        colorMonthFirst = texture2D(month[4], vMapUv);
        colorMonthSecond = texture2D(month[5], vMapUv);
        break;
    case 5:
        colorMonthFirst = texture2D(month[5], vMapUv);
        colorMonthSecond = texture2D(month[6], vMapUv);
        break;
    case 6:
        colorMonthFirst = texture2D(month[6], vMapUv);
        colorMonthSecond = texture2D(month[7], vMapUv);
        break;
    case 7:
        colorMonthFirst = texture2D(month[7], vMapUv);
        colorMonthSecond = texture2D(month[8], vMapUv);
        break;
    case 8:
        colorMonthFirst = texture2D(month[8], vMapUv);
        colorMonthSecond = texture2D(month[9], vMapUv);
        break;
    case 9:
        colorMonthFirst = texture2D(month[9], vMapUv);
        colorMonthSecond = texture2D(month[10], vMapUv);
        break;
    case 10:
        colorMonthFirst = texture2D(month[10], vMapUv);
        colorMonthSecond = texture2D(month[11], vMapUv);
        break;
    case 11:
        colorMonthFirst = texture2D(month[11], vMapUv);
        colorMonthSecond = texture2D(month[0], vMapUv);
        break;
    default:
        colorMonthFirst = vec4(0.0);
        break;
}

float blend = fract(utime);
vec4 sampledDiffuseColor = mix(colorMonthFirst, colorMonthSecond,  smoothstep(0.0,1.0,blend) );
diffuseColor = vec4(diffuse, opacity) * sampledDiffuseColor;