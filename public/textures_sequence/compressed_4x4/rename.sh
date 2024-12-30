#!/bin/bash

# Loop through all directories
for dir in ./*/; do
  # Remove the trailing slash
  dir=${dir%/}
  
  # Extract the number from the directory name
  number=$(echo $dir | grep -o '[0-9]\+')
  
  # Pad the number with a leading zero if it's a single digit
  if [[ $number -lt 10 ]]; then
    new_number=$(printf "%02d" $number)
    
    # Rename the directory
    mv "$dir" "${dir/$number/$new_number}"
  fi
done
