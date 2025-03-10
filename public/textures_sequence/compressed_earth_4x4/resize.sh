#!/bin/bash

# Directory containing the jpg files
directory="$(pwd)"

# Check if there are any jpg files in the directory
shopt -s nullglob
jpg_files=("$directory"/*.jpg)
shopt -u nullglob

# Loop through each jpg file in the directory
for file in "${jpg_files[@]}"; do
    # Resize the image to 4096x2048 using ImageMagick
    magick convert "$file" -resize 4096x2048 "$file"
done