#!/bin/bash

# Input image
input_image="earth_surface_01.jpg"
input_image_base=$(basename "$input_image" .jpg)

# Crop the image into a 4x4 grid
magick "$input_image" -crop 4x4@ +repage "${input_image_base}_%d.jpg"

# Add padding and expand edges for each cropped image
for i in "${input_image_base}_"*.jpg; do
        magick "$i" -flip "$i"
        magick "$i" -resize 4096x2048 "$i"
        # magick "$i" -negate "$i"
done

echo "Tis done master"
