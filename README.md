# StudyMate Pro – AI-Powered Smart Revision Companion

## Overview
StudyMate Pro is a full-stack AI-powered learning assistant that allows students to upload study materials and interact with them in a smart, modular, and organized way. Features include subject-wise chats, module-wise folders, flashcard generation, quizzes, concept maps, summaries, and progress tracking.

## Tech Stack
- **Frontend:** React.js
- **Backend:** Python + Flask
- **Database:** MongoDB (or Firebase in future)
- **AI API:** OpenAI GPT-4 (or Hugging Face fallback)
- **PDF Parsing:** PyMuPDF
- **Visualization:** Mermaid.js

## Folder Structure
```
studymate-pro/
├── frontend/
├── backend/
├── database/
├── .env
├── README.md
```

## Setup Instructions

### Backend
1. `cd backend`
2. `python -m venv venv && source venv/bin/activate` (Linux/macOS) or `venv\Scripts\activate` (Windows)
3. `pip install -r requirements.txt`
4. `python app.py`

### Frontend
1. `cd frontend`
2. `npm install`
3. `npm start`

---

## Features (MVP)
- Upload PDFs/notes
- Subject/module folders
- Chat-based teaching
- Flashcard & summary generation
- Basic dashboard 