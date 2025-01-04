#!/bin/bash

# Input image
input_image="earth_bump_xl.jpg"

# Crop the image into a 4x4 grid
convert "$input_image" -crop 4x4@ +repage earth_bump_xl_%d.jpg

# Add padding and expand edges for each cropped image
for i in earth_bump_xl_*.jpg; do
        convert "$i" -flip "$i"
done

echo "Tis done master"
