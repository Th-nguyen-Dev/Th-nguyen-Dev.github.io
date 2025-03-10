#!/bin/bash

# Directory containing the images
DIR="$(pwd)"

# Loop through each image in the directory
for img in "$DIR"/*; do
    # Check if the file is an image
    if [[ $img == *.jpg || $img == *.png || $img == *.jpeg ]]; then
        # Flip the image horizontally and save it with the same name
        magick "$img" -flip "$img"
    fi
done

echo "All images have been flipped vertically."