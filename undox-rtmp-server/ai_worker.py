import cv2
import subprocess

# Input RTMP stream (from SRS ingest)
input_url = "rtmp://localhost/live/test"

# Output RTMP stream (to SRS egress)
output_url = "rtmp://localhost/live/blurred"

# FFmpeg command to pipe frames into OpenCV
ffmpeg_command = [
    "ffmpeg",
    "-i", input_url,
    "-f", "rawvideo",
    "-pix_fmt", "bgr24",
    "-vf", "scale=640:360",  # resize for faster CV (optional)
    "-"
]

# Start FFmpeg subprocess (read frames)
process = subprocess.Popen(ffmpeg_command, stdout=subprocess.PIPE)

while True:
    # Read raw frame from ffmpeg (width*height*3 bytes)
    frame_size = 640 * 360 * 3
    raw_frame = process.stdout.read(frame_size)

    if len(raw_frame) != frame_size:
        break

    frame = np.frombuffer(raw_frame, np.uint8).reshape((360, 640, 3))

    # ---- AI Blur Logic Here ----
    # Example: blur the entire frame (replace with OCR/object detection)
    blurred = cv2.GaussianBlur(frame, (21, 21), 30)

    # TODO: send this processed frame back out via FFmpeg
