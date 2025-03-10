#!/bin/bash

# Loop through all folders in the current directory
for dir in */; do
    # Enter the directory
    cd "$dir" || continue

    # Loop through all ktx2 files in the directory
    for file in earth_surface_??_*.ktx2; do
        # Extract the number from the filename
        num=$(echo "$file" | grep -oP '(?<=earth_surface_)\d{2}(?=_)')

        # Calculate the new number (subtract 1 to convert to 0-based index)
        new_num=$(printf "%02d" $((10#$num - 1)))

        # Construct the new filename
        new_file=$(echo "$file" | sed "s/earth_surface_$num/earth_surface_$new_num/")

        # Rename the file
        mv "$file" "$new_file"
    done

    # Go back to the parent directory
    cd ..
done