# from paddleocr import PaddleOCR
import re

class OCRModel:
    def __init__(self, lang="en"):
        # self.model = PaddleOCR(use_angle_cls=True, lang=lang)

        # # Precompile regex patterns for speed
        # self.patterns = {
        #     "phone": re.compile(r"\b\d{3}[-.\s]?\d{3}[-.\s]?\d{4}\b"),
        #     "ssn": re.compile(r"\b\d{3}-\d{2}-\d{4}\b"),
        #     "credit_card": re.compile(r"\b(?:\d[ -]*?){13,16}\b"),
        #     "email": re.compile(r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}")
        # }
        pass

    def detect_sensitive_text(self, frame, confidence_thresh=0.6):
        # results = self.model.ocr(frame)
        # regions = []

        # if results:
        #     for result in results[0]:
        #         bbox, (text, conf) = result
        #         if conf >= confidence_thresh:
        #             for name, pattern in self.patterns.items():
        #                 if pattern.search(text):
        #                     regions.append({
        #                         "bbox": bbox,
        #                         "label": name,
        #                         "confidence": conf
        #                     })
        # return regions

        pass