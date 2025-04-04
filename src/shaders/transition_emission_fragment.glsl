#ifdef USE_EMISSIVEMAP

    // Calculate luminance from the current lighting
    vec3 outLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
    float luminance = clamp(outLight.r * 0.21 + outLight.g * 0.72 + outLight.b * 0.07, 0.0, 1.0);
    
    // Invert luminance to make emission stronger in dark areas
    float darkFactor = 1.0 - luminance;
    
    vec4 emissiveColor = texture2D(emissiveMap, vEmissiveMapUv);
    // Multiply emission by the dark factor (stronger in shadows)
    totalEmissiveRadiance *= emissiveColor.rgb * darkFactor;

#endif