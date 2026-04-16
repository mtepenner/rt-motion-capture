import cv2
import mediapipe as mp
import socketio # pip install "python-socketio[client]"

sio = socketio.Client()
mp_pose = mp.solutions.pose
pose = mp_pose.Pose(static_image_mode=False, model_complexity=1, min_detection_confidence=0.5)

@sio.event
def connect():
    print("Connected to Node.js Server")

sio.connect('http://localhost:5000')

cap = cv2.VideoCapture(0)

while cap.isOpened():
    ret, frame = cap.read()
    if not ret: break

    # Convert to RGB for MediaPipe
    image = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    results = pose.process(image)

    if results.pose_landmarks:
        # Convert landmarks to a simple list of dicts
        landmarks = []
        for lm in results.pose_landmarks.landmark:
            landmarks.append({'x': lm.x, 'y': lm.y, 'z': lm.z})
        
        # Emit data to Node.js server
        sio.emit('pose_data', landmarks)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
