#!/bin/bash

# Number of requests
num_requests=1000

# Total time for the test in seconds (1 minute = 60 seconds)
test_duration=60

# Calculate delay between requests (in seconds)
delay=$(( test_duration / num_requests ))

# URL of your API endpoint
api_url="http://localhost:3000/convert"

# MP4 file path (in the same directory)
mp4_file="./example.mp4"

# Check if the file exists
if [ ! -f "$mp4_file" ]; then
  echo "Error: example.mp4 not found in the current directory."
  exit 1
fi


# Reset the SECONDS variable to start timing
SECONDS=0

# Loop for sending requests
for i in $(seq 1 $num_requests); do
  curl -X POST \
    -H "Content-Type: multipart/form-data" \
    -F "video=@${mp4_file}" \
    "${api_url}" \
    --progress-bar > /dev/null 2>&1 &  # Send request in background
  
  # Sleep for the calculated delay between each request
  sleep $delay
done

# Calculate elapsed time
#elapsed_time=$SECONDS

# Wait for all background processes to finish
wait

# Calculate elapsed time
elapsed_time=$SECONDS

echo "Load test completed. Sent $num_requests requests in $elapsed_time seconds."
