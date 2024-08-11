float luminanceCal(vec3 fragColor){
    return clamp(fragColor.r * 0.21 +  fragColor.g * 0.72 + fragColor.b * 0.07,0.0,1.0);
}