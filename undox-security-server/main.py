import cv2
from workers import *
from config.settings import INPUT_RTMP, OUTPUT_RTMP, WIDTH, HEIGHT

def main():
    try:
        rtmp_ingest = RTMPIngest(INPUT_RTMP, WIDTH, HEIGHT)
        rtmp_ingest.start()
        rtmp_egress = RTMPEgress(OUTPUT_RTMP, WIDTH, HEIGHT)
        rtmp_egress.start()
        ai_worker = AIWorker()
        while True:
            frame = rtmp_ingest.get_frame_as_array()
            if frame is None:
                continue
            blurred_frame = ai_worker.blur_frame(frame=frame, width=WIDTH, height=HEIGHT)
            rtmp_egress.write_frame(blurred_frame)
    except Exception as e:
        print(e)
    finally:
        rtmp_ingest.stop()
        rtmp_egress.stop()

if __name__ == "__main__":
    main()
