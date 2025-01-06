#!/bin/bash

# Input image
input_image="earth_roughness.png"

# Crop the image into a 4x4 grid
magick "$input_image" -crop 4x4@ +repage earth_roughness_%d.jpg

# Add padding and expand edges for each cropped image
for i in earth_roughness_*.jpg; do
        magick "$i" -flip "$i"
        magick "$i" -resize 8192x4096 "$i"
        # magick "$i" -negate "$i"
done

echo "Tis done master"
