#!/bin/bash

# Change to the project directory
cd /Users/isaaclien/projects/sacred-hunting

# Create a log file to track downloads
LOG_FILE="download_log.txt"
echo "Download started at $(date)" > $LOG_FILE

# Counter for downloaded images
DOWNLOADED=0
FAILED=0

# Read the download list and download each image
while IFS=' ' read -r filepath url; do
    # Skip comments and empty lines
    if [[ $filepath =~ ^#.*$ ]] || [[ -z "$filepath" ]]; then
        continue
    fi
    
    echo "Downloading: $filepath from $url"
    echo "Downloading: $filepath from $url" >> $LOG_FILE
    
    # Create directory if it doesn't exist
    mkdir -p "public/images/$(dirname "$filepath")"
    
    # Download the image with curl -L to follow redirects
    if curl -L -s -o "public/images/$filepath" "$url"; then
        echo "✓ Successfully downloaded: $filepath"
        echo "✓ Successfully downloaded: $filepath" >> $LOG_FILE
        ((DOWNLOADED++))
    else
        echo "✗ Failed to download: $filepath"
        echo "✗ Failed to download: $filepath" >> $LOG_FILE
        ((FAILED++))
    fi
    
    # Small delay to be respectful to the server
    sleep 0.2
    
done < download_list.txt

echo ""
echo "Download completed at $(date)"
echo "Successfully downloaded: $DOWNLOADED images"
echo "Failed downloads: $FAILED images"

echo "" >> $LOG_FILE
echo "Download completed at $(date)" >> $LOG_FILE
echo "Successfully downloaded: $DOWNLOADED images" >> $LOG_FILE
echo "Failed downloads: $FAILED images" >> $LOG_FILE