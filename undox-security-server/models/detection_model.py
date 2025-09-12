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


if (__name__ == "__main__"):
    pass
