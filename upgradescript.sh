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

# Install the latest versions of dependencies
npm upgrade
