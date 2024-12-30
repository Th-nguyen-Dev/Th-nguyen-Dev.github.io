#!/bin/bash

# Check if ktx command is available
if ! command -v ktx &> /dev/null
then
    echo "ktx command could not be found. Please install KTX Software CLI."
    exit 1
fi

# Directory to search for images (directory where the script is located)
SEARCH_DIR="$(dirname "$(realpath "$0")")"

mkdir -p split_images_4x4_compressed

# Function to convert images to KTX2
convert_to_ktx2() {
    local input_file="$1"
    local output_file="${input_file%.*}.ktx2"
    echo "Converting $input_file to $output_file"
    toktx --t2 --bcmp --clevel 5 --qlevel 255 --genmipmap --lower_left_maps_to_s0t0 "$output_file" "$input_file"
}

export -f convert_to_ktx2

# Find and convert all JPEG and PNG images
find "$SEARCH_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -print0 | xargs -0 -I {} bash -c 'convert_to_ktx2 "$@"' _ {}

echo "Conversion complete."
