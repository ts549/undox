import subprocess
import numpy as np

class RTMPIngest:
    def __init__(self, input_url, scaled_width, scaled_height):
        self.input_url = input_url
        self.width = scaled_width
        self.height = scaled_height
        self.channels = 3
        self.frame_size = self.width * self.height * self.channels

    def start(self):
        """Start FFmpeg process to pull frames from RTMP stream"""
        ffmpeg_cmd = [
            "ffmpeg",
            "-i", self.input_url,
            "-f", "rawvideo",
            "-pix_fmt", "bgr24",
            "-vf", f"scale={self.width}:{self.height}",
            "-"
        ]
        self.process = subprocess.Popen(ffmpeg_cmd, stdout=subprocess.PIPE, stderr=subprocess.DEVNULL)

    def get_frame(self):
            # Read raw frame from ffmpeg (width*height*3 bytes)
        frame_size = self.width * self.height * self.channels
        raw_frame = self.process.stdout.read(frame_size)

        if len(raw_frame) != frame_size:
            return None

        return raw_frame

    def get_frame_as_array(self):
        raw_frame = self.get_frame()
        if raw_frame is None:
            return None
        return np.frombuffer(raw_frame, np.uint8).reshape((self.height, self.width, self.channels))

    def stop(self):
        """Stop FFmpeg process"""
        if self.process:
            self.process.kill()
            self.process = None
