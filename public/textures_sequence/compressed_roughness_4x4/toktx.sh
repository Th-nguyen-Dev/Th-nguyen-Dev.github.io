#!/bin/bash

# Check if toktx command is available
if ! command -v toktx &> /dev/null
then
    echo "toktx command could not be found. Please install KTX Software CLI."
    exit 1
fi

# Directory to search for images (directory where the script is located)
SEARCH_DIR="$(dirname "$(realpath "$0")")"

# Function to convert images to KTX2
convert_to_ktx2() {
    local input_file="$1"
    local output_file="./$(basename "${input_file%.*}.ktx2")"
    echo "Converting $input_file to $output_file"
    ktx create --format R8G8B8A8_SRGB --encode basis-lz --clevel 5 --qlevel 255 --generate-mipmap --mipmap-wrap clamp --mipmap-filter kaiser --threads 4 "$input_file" "$output_file"
}

export -f convert_to_ktx2

# Find and convert all JPEG and PNG images
find "$SEARCH_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -print0 | while IFS= read -r -d '' file; do
    convert_to_ktx2 "$file"
done

echo "Conversion complete."