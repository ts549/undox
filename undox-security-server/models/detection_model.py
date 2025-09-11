from ultralytics import YOLO

class DetectionModel:
    def __init__(self, weights="models/yolov8_custom.pt"):
        self.model = YOLO(weights)

    def detect_sensitive_objects(self, frame, confidence_thresh=0.6):
        results = self.model(frame)[0]
        regions = []

        for det in results.boxes:
            cls_id = int(det.cls)
            conf = float(det.conf)

            if conf >= confidence_thresh:
                x1, y1, x2, y2 = map(int, det.xyxy[0])
                regions.append({
                    "bbox": [(x1, y1), (x2, y2)],
                    "label": self.model.names[cls_id],
                    "confidence": conf
                })
        return regions
