import cv2
from models import DetectionModel, OCRModel

class AIWorker:

    def __init__(self):
        self.detection_model = DetectionModel('../../runs/detect/train/weights/best.pt')
        self.ocr_model = OCRModel()

    def blur_frame(self, frame):
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
                print(box)
                x1, y1, x2, y2 = map(int, box.xyxy[0])
                conf = float(box.conf[0])
                cls = int(box.cls[0])
                label = self.detection_model.names[cls]

                if (conf < 0.5 or cls != 0):
                    continue

                print(label)

                roi = resized_frame[y1:y2, x1:x2]

                blurred_roi = cv2.GaussianBlur(roi, (51, 51), 30)

                # Replace original ROI with blurred one
                resized_frame[y1:y2, x1:x2] = blurred_roi

        return resized_frame

if (__name__ == "__main__"):
    frame = cv2.imread("../../runs/detect/predict/runs/detect/predict/img_4_PNG.rf.a9572668b2e584e138c280959f88fdd7.jpg")
    model = DetectionModel(weights="../../runs/detect/train/weights/best.pt")
    # results = model.train(data="./datasets/credit_card/data.yaml", epochs=50, imgsz=640, batch=16, device="cpu")
    # metrics = model.evaluate()
    blurred_frame = model.blur_frame(frame=frame)

    cv2.imshow("Blurred Detections", blurred_frame)

    # print(results)
    # print(metrics)
