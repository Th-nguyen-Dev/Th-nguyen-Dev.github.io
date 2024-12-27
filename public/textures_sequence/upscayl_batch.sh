#!/bin/bash

# Define the base input and output directories
base_input_dir="./split_images_4x4"
base_output_dir="./split_images_4x4_upscale"
model_path="/opt/Upscayl/resources/models/"
model_name="upscayl-lite-4x"
format="jpg"
scale=2
tile_size=512

# Loop through each folder in the base input directory
for folder in "$base_input_dir"/*/; do
  # Get the base name of the folder
  folder_name=$(basename "$folder")
  
  # Define the output directory for the current folder
  output_dir="$base_output_dir/$folder_name"
  
  # Create the output directory if it doesn't exist
  mkdir -p "$output_dir"
  
  # Run the Upscayl command for the current folder
  upscayl -i "$folder" -o "$output_dir" -m "$model_path" -n "$model_name" -f "$format" -s "$scale" -t "$tile_size"
done
