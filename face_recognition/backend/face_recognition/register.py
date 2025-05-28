import cv2
import face_recognition
from datetime import datetime
from database.models import add_user  # Function to add user to DB

def register_face(name):
    video_capture = cv2.VideoCapture(0)
    ret, frame = video_capture.read()
    rgb_frame = frame[:, :, ::-1]
    face_locations = face_recognition.face_locations(rgb_frame)
    if face_locations:
        face_encodings = face_recognition.face_encodings(rgb_frame, face_locations)
        timestamp = datetime.now()
        add_user(name, face_encodings[0], timestamp)
    video_capture.release()
