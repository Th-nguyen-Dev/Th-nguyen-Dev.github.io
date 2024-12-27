#!/bin/bash

for i in {01..12}; do
  convert earth_surface_$i.jpg -crop 4x4@ +repage earth_surface_${i}_%d.jpg
done
