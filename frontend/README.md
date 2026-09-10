# AI Summarizer

An AI-powered web application that summarizes notes and documents using the Groq API.

## 🚀 Live Demo

https://ai-summarizer-demo-025b.onrender.com

## ✨ Features

- Summarize pasted text
- Upload and summarize PDF files
- Upload and summarize DOCX files
- Automatically extracts text from uploaded documents
- Responsive and modern UI
- AI-generated concise summaries
- File size limit of 10 MB

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- CSS

### Backend
- Node.js
- Express.js
- Multer
- pdf-parse
- Mammoth

### AI
- Groq API
- Llama 3.1 8B Instant

## 🏗️ Architecture

React Frontend → Express Backend → Groq API → AI Summary

## ⚙️ Running Locally

### Frontend

```bash
cd frontend
npm install
npm run dev