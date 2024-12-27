#!/bin/bash

# Loop through all images
for file in earth_surface_??_*.jpg; do
  # Extract the split index from the filename
  split_index=$(echo $file | cut -d'_' -f4 | cut -d'.' -f1)
  
  # Create a directory for the split index if it doesn't exist
  mkdir -p $split_index
  
  # Move the file into the corresponding directory
  mv $file $split_index/
done
