#!/bin/bash

# Define the source and destination directories dynamically
SOURCE_DIR="$(dirname "$(realpath "$0")")"
DEST_DIR="$SOURCE_DIR/jpg_files"

# Create the destination directory if it doesn't exist
mkdir -p "$DEST_DIR"

# Find all .jpg files and move them to the destination directory, preserving the directory structure
find "$SOURCE_DIR" -type f \( -name "*.jpg" -o -name "*.png" \) | while IFS= read -r FILE; do
    # Get the directory structure of the file
    RELATIVE_DIR=$(dirname "${FILE#$SOURCE_DIR/}")
    # Create the directory structure in the destination directory
    mkdir -p "$DEST_DIR/$RELATIVE_DIR"
    # Move the .jpg or .png file to the destination directory
    mv "$FILE" "$DEST_DIR/$RELATIVE_DIR/"
done
