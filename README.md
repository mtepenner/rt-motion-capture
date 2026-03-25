# Real-Time Motion Capture System

A full-stack, real-time motion capture application that utilizes MediaPipe for pose estimation, a Node.js server for data relay, and React Three Fiber for 3D visualization.

## 📋 Table of Contents

  - [Features](https://www.google.com/search?q=%23features)
  - [Technologies Used](https://www.google.com/search?q=%23technologies-used)
  - [Architecture](https://www.google.com/search?q=%23architecture)
  - [Installation](https://www.google.com/search?q=%23installation)
  - [Usage](https://www.google.com/search?q=%23usage)

## 🚀 Features

  - **Real-time Pose Estimation**: High-performance body tracking using MediaPipe's Pose solution.
  - **Sub-second Latency**: Efficient data streaming through Socket.io for immediate visual feedback.
  - **3D Visualization**: Dynamic rendering of skeletal landmarks in a 3D environment using React Three Fiber.
  - **Decoupled Architecture**: Independent backend, relay server, and frontend components for scalability.

## 🛠️ Technologies Used

  - **Backend**: Python, OpenCV, MediaPipe, Python-SocketIO
  - **Server**: Node.js, Express, Socket.io
  - **Frontend**: React, Three.js, @react-three/fiber, Socket.io-client

## 🏗️ Architecture

1.  **Python Backend**: Captures video from the webcam, processes frames via MediaPipe to extract 3D landmarks, and emits coordinates.
2.  **Node.js Relay**: Acts as a central hub, receiving pose data from the Python client and broadcasting it to all connected web clients.
3.  **React Frontend**: Listens for pose data and maps coordinates to 3D meshes (spheres) within a Three.js canvas.

## 📥 Installation

### 1\. Server (Relay)

```bash
cd Server
npm install express socket.io
node server.js
```

### 2\. Backend (Motion Capture)

```bash
cd Backend
pip install opencv-python mediapipe "python-socketio[client]"
python backend.py
```

### 3\. Frontend (Visualization)

```bash
cd Frontend
npm install react-three-fiber three socket.io-client
npm start
```

## 💻 Usage

1.  Start the **Node.js Server** first to establish the communication hub.
2.  Run the **Python Backend**; ensure your webcam is accessible.
3.  Open the **React Frontend** in your browser.
4.  Move in front of the camera to see your skeletal landmarks rendered in 3D.
