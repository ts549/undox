import cv2
from workers.rtmp_ingest import RTMPIngest
from workers.rtmp_egress import RTMPEgress
from config.settings import INPUT_RTMP, OUTPUT_RTMP, WIDTH, HEIGHT

def main():
    try:
        rtmp_ingest = RTMPIngest(INPUT_RTMP, WIDTH, HEIGHT)
        rtmp_ingest.start()
        rtmp_egress = RTMPEgress(OUTPUT_RTMP, WIDTH, HEIGHT)
        rtmp_egress.start()
        while True:
            frame = rtmp_ingest.get_frame_as_array()
            blurred = cv2.GaussianBlur(frame, (21, 21), 30)
            rtmp_egress.write_frame(blurred)
    except Exception as e:
        print(e)
    finally:
        rtmp_ingest.stop()
        rtmp_egress.stop()

if __name__ == "__main__":
    main()
