# 👤 Face Recognition & Real-Time Q&A Platform

## 🚀 Overview

This is a full-stack browser-based platform that enables:

- Real-time **face registration** using webcam  
- **Multi-face detection** and recognition with bounding boxes  
- **Chat-based interface** powered by **RAG (Retrieval-Augmented Generation)** using OpenAI's ChatGPT API  
- Answers queries like:
  - "Who was the last person registered?"
  - "At what time was Karthik registered?"
  - "How many people are currently registered?"

---

## 🧩 Features

### 🔐 Face Registration Tab
- Captures face from webcam
- Stores encoding + name + timestamp
- Supports multiple face registrations

### 🎥 Live Recognition Tab
- Detects and names known faces in real-time
- Handles multiple faces
- Bounding box overlay with names

### 💬 Chat Interface (RAG + LLM)
- WebSocket-based live chat
- Uses LangChain + FAISS for retrieval
- Uses OpenAI API for LLM-based query response

---

## 🧰 Tech Stack

| Module         | Tech Used                         |
|----------------|-----------------------------------|
| Frontend       | React.js (CSS)                    |
| Backend (API)  | Node.js + Express.js              |
| Face Detection | Python + dlib + face_recognition  |
| RAG Engine     | Python + LangChain + FAISS        |
| Chat Engine    | WebSocket (Node ↔ Python ↔ React) |
| LLM            | OpenAI ChatGPT API                |
| Database       | MongoDB (for face metadata)       |

---

## 📁 Folder Structure

```
📦 root/
 ┣ 📁 client/            # React frontend
 ┣ 📁 server/            # Node.js backend with WebSocket
 ┣ 📁 rag_engine/        # Python RAG engine (LangChain + FAISS)
 ┣ 📁 face_backend/      # Python face recognition backend
 ┣ 📄 requirements.txt   # Python dependencies
 ┣ 📄 README.md
 ┗ 📄 architecture.png   # Architecture diagram
```

---

## 🏗️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/aishuradhakrishnan/face-recognition-rag-platform/.git
cd face-recognition-rag-platform
```

### 2. Setup Python Environment

```bash
python -m venv venv
# Activate environment
venv\Scripts\activate       # On Windows
# OR
source venv/bin/activate    # On Mac/Linux

# Install Python dependencies
pip install -r requirements.txt
```

> ⚠️ If on Windows and facing issues with `dlib`, use Anaconda:
> ```bash
> conda create -n face_env python=3.10 -y
> conda activate face_env
> conda install -c conda-forge dlib
> pip install face_recognition
> ```

### 3. Setup Node.js Backend

```bash
cd server
npm install
npm run dev
```

### 4. Setup React Frontend

```bash
cd client
npm install
npm start
```

---

## ⚙️ Configuration

### 🔑 Add your OpenAI Key

Edit `rag_engine/config.py`:

```python
OPENAI_API_KEY = "your_openai_key_here"
```

> During evaluation, a valid key will be provided.

---

## 💬 Sample Queries for Chatbot

- `Who was the last person registered?`
- `How many people are currently registered?`
- `When was Mahesh registered?`

---

## 🧠 Assumptions

- Each face is uniquely named and registered once
- All chat queries relate to face registrations
- Face data is stored using face_encodings and metadata in MongoDB

---

## 🔍 Logging

All key events are logged:

- `logs/face_events.log`
- `logs/rag_queries.log`

---

## 🏁 Run the Full System

```bash
# Run Python Face Recognition Service
python face_backend/main.py

# Run RAG Engine
python rag_engine/main.py

# Start Node.js Backend
cd server && npm run dev

# Start React Frontend
cd client && npm start
```

---

## 🧠 Prompting / AI Tools Used

- ChatGPT for architecture, code, and debugging
- Loom for demo video recording
- GitHub Copilot for code suggestions

---

## 🌐 Credits

This project was developed as part of a hackathon run by [https://katomaran.com](https://katomaran.com)
