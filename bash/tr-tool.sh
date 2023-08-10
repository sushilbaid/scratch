#! /bin/bash -x 
# examples for tr tool
echo "how are you"  | tr '[:lower:]' '[:upper:]'
set -x 
echo "howz are xyou"  | tr -d [xz]
echo "howw are yyyyou"  | tr -s [wy]
