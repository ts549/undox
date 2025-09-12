import cv2
from models import DetectionModel

class AIWorker:

    def __init__(self):
        self.detection_model = DetectionModel('../runs/detect/train/weights/best.pt')
        # self.ocr_model = OCRModel()

    def blur_frame(self, frame, width, height):
        resized_frame = cv2.resize(frame, (640, 640))

        # Run prediction
        results = self.detection_model.predict(
            source=resized_frame,   # directly pass the numpy array
            save=False,             # save output with bounding boxes
            save_txt=False,         # save bounding boxes as txt files
            imgsz=640,              # image size
            conf=0.25,              # confidence threshold
        )

        for result in results:
            for box in result.boxes:
                x1, y1, x2, y2 = map(int, box.xyxy[0])
                conf = float(box.conf[0])
                cls = int(box.cls[0])
                label = self.detection_model.model.names[cls]

                if (conf < 0.5 or label != "credit card"):
                    continue

                roi = resized_frame[y1:y2, x1:x2]

                blurred_roi = cv2.GaussianBlur(roi, (51, 51), 30)

                # Replace original ROI with blurred one
                resized_frame[y1:y2, x1:x2] = blurred_roi

        blurred_frame = cv2.resize(resized_frame, (width, height))
        return blurred_frame

if (__name__ == "__main__"):
    ai_worker = AIWorker()
    frame = cv2.imread("./models/datasets/credit_card/test/images/a.jpg")
    blurred_frame = ai_worker.blur_frame(frame=frame, width=640, height=360)

    cv2.imshow("Blurred Detections", blurred_frame)
    cv2.waitKey(0)
    cv2.destroyAllWindows()
