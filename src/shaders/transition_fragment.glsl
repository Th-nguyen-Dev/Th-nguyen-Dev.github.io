uniform sampler2D month[12];
uniform float utime;
uniform int monthIndex;
uniform int nextMonthIndex;
varying vec2 vMapUv;

void main()
{
    vec4 colorMonthFirst;
    vec4 colorMonthSecond;

    switch (monthIndex) {
        case 0:
            colorMonthFirst = texture2D(month[0], vMapUv);
            break;
        case 1:
            colorMonthFirst = texture2D(month[1], vMapUv);
            break;
        // Add cases for the remaining months
        case 2:
            colorMonthFirst = texture2D(month[2], vMapUv);
            break;
        case 3:
            colorMonthFirst = texture2D(month[3], vMapUv);
            break;
        case 4:
            colorMonthFirst = texture2D(month[4], vMapUv);
            break;
        case 5:
            colorMonthFirst = texture2D(month[5], vMapUv);
            break;
        case 6:
            colorMonthFirst = texture2D(month[6], vMapUv);
            break;
        case 7:
            colorMonthFirst = texture2D(month[7], vMapUv);
            break;
        case 8:
            colorMonthFirst = texture2D(month[8], vMapUv);
            break;
        case 9:
            colorMonthFirst = texture2D(month[9], vMapUv);
            break;
        case 10:
            colorMonthFirst = texture2D(month[10], vMapUv);
            break;
        case 11:
            colorMonthFirst = texture2D(month[11], vMapUv);
            break;

        default:
            colorMonthFirst = vec4(0.0);
            break;
    }

    switch (nextMonthIndex) {
        case 0:
            colorMonthSecond = texture2D(month[0], vMapUv);
            break;
        case 1:
            colorMonthSecond = texture2D(month[1], vMapUv);
            break;
        // Add cases for the remaining months
        case 2:
            colorMonthSecond = texture2D(month[2], vMapUv);
            break;
        case 3:
            colorMonthSecond = texture2D(month[3], vMapUv);
            break;
        case 4:
            colorMonthSecond = texture2D(month[4], vMapUv);
            break;
        case 5:
            colorMonthSecond = texture2D(month[5], vMapUv);
            break;
        case 6:
            colorMonthSecond = texture2D(month[6], vMapUv);
            break;
        case 7:
            colorMonthSecond = texture2D(month[7], vMapUv);
            break;
        case 8:
            colorMonthSecond = texture2D(month[8], vMapUv);
            break;
        case 9:
            colorMonthSecond = texture2D(month[9], vMapUv);
            break;
        case 10:
            colorMonthSecond = texture2D(month[10], vMapUv);
            break;
        case 11:
            colorMonthSecond = texture2D(month[11], vMapUv);
            break;

        default:
            colorMonthSecond = vec4(0.0);
            break;
    }
    float blend = fract(utime);
    gl_FragColor = mix(colorMonthFirst, colorMonthSecond, blend);
}