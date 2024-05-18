#!/bin/bash

# Check if npm is installed
if ! command -v npm &> /dev/null; then
  echo "npm is not installed. Please install it before running this script."
  exit 1
fi

# Update npm itself
npm install -g npm@latest

# Check if package.json exists
if [ ! -f "package.json" ]; then
  echo "package.json not found in the current directory. Please make sure you are in the right directory."
  exit 1
fi

# Update package.json with the latest versions
npm install -g npm-check-updates
ncu -u

# Install the updated packages
npm install
