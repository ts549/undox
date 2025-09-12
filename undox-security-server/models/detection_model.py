from ultralytics import YOLO
import cv2

class DetectionModel:
    def __init__(self, weights="yolov8n.pt"):
        self.model = YOLO(weights)

    def train(self, data, epochs=50, imgsz=640, batch=16, device=0, patience=20):
        results = self.model.train(data=data, epochs=epochs, imgsz=imgsz, batch=batch, device=device, patience=patience)
        return results

    def evaluate(self):
        metrics = self.model.val()
        return metrics

    def predict(self, source, save=True, save_txt=True, imgsz=640, conf=0.25):
        results = self.model.predict(source=source, save=save, save_txt=save_txt, imgsz=imgsz, conf=conf)
        return results

    def blur_frame(self, frame):
        resized_frame = cv2.resize(frame, (640, 640))

        # Run prediction
        results = self.model.predict(
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
                label = self.model.names[cls]

                if (conf < 0.5 or cls != 0):
                    continue

                print(label)

                roi = resized_frame[y1:y2, x1:x2]

                blurred_roi = cv2.GaussianBlur(roi, (51, 51), 30)

                # Replace original ROI with blurred one
                resized_frame[y1:y2, x1:x2] = blurred_roi

        return resized_frame


if (__name__ == "__main__"):
    # model = DetectionModel(weights="../../runs/detect/train/weights/best.pt")
    # # results = model.train(data="./datasets/credit_card/data.yaml", epochs=50, imgsz=640, batch=16, device="cpu")
    # # metrics = model.evaluate()
    # predictions = model.predict(source="./datasets/credit_card/test/images", save=True, save_txt=True, imgsz=640, conf=0.25)

    # # print(results)
    # # print(metrics)
    frame = cv2.imread("./datasets/credit_card/test/images/img_191_PNG.rf.62af183ac489e5e4f7b76f4657fa0499.jpg")
    model = DetectionModel(weights="../../runs/detect/train/weights/best.pt")
    # results = model.train(data="./datasets/credit_card/data.yaml", epochs=50, imgsz=640, batch=16, device="cpu")
    # metrics = model.evaluate()
    blurred_frame = model.blur_frame(frame=frame)

    cv2.imshow("Blurred Detections", blurred_frame)
    cv2.waitKey(0)
    cv2.destroyAllWindows()
