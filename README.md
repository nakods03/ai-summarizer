# AI Summarizer

A full-stack AI-powered summarization web application that allows users to enter text or upload PDF and DOCX documents and receive a concise, easy-to-understand summary.

## 🚀 Live Demo

https://ai-summarizer-demo-025b.onrender.com

## 📌 Features

- Summarize text entered by the user
- Upload PDF documents for summarization
- Upload DOCX documents for summarization
- Extract text from PDF and DOCX files
- Generate concise AI-powered summaries
- 10 MB file upload limit
- Loading and error handling
- Responsive and modern dark-themed interface
- Frontend and backend deployed separately on Render

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- JavaScript / JSX
- CSS

### Backend
- Node.js
- Express.js
- Multer
- CORS
- pdf-parse
- Mammoth

### AI
- Groq API
- `openai/gpt-oss-20b`

### Deployment
- GitHub
- Render

## 🏗️ Project Structure

```text
ai-summarizer/
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── ...
│
├── .gitignore
└── README.md

🔄 How It Works
The user enters notes or selects a PDF/DOCX file.
React stores the input using state.
A FormData object is created containing the text and optional file.
The frontend sends a POST request to the /summarize endpoint.
Express receives the request and processes the uploaded file.
PDF files are parsed using pdf-parse.
DOCX files are processed using Mammoth.
The extracted text or typed notes are sent to the Groq API.
The AI model generates a concise summary.
The backend returns the summary as JSON.
React receives the response and displays the summary.
🔐 Environment Variables

The backend requires a Groq API key.

Create a .env file inside the backend folder:

GROQ_API_KEY=your_groq_api_key

The .env file should never be committed to GitHub.

💻 Running Locally
1. Clone the repository
git clone https://github.com/nakods03/ai-summarizer.git
cd ai-summarizer
2. Install frontend dependencies
cd frontend
npm install
3. Start the frontend
npm run dev
4. Install backend dependencies

Open another terminal:

cd ai-summarizer/backend
npm install
5. Add the API key

Create:

backend/.env

and add:

GROQ_API_KEY=your_groq_api_key
6. Start the backend
npm start

The backend will run on the configured port.

📡 API
POST /summarize

Accepts:

notes — optional text input
file — optional PDF or DOCX file

The endpoint extracts the document text when a file is provided and sends the resulting content to the Groq API.

Example response:

{
  "summary": "Generated summary..."
}
📦 File Processing
PDF

PDF text is extracted using:

pdf-parse
DOCX

DOCX text is extracted using:

Mammoth

Uploaded files are kept in memory using Multer's memoryStorage() rather than being permanently stored on the server.

🌐 Deployment

The application is deployed as two separate services on Render:

Frontend → Render Static Site
Backend → Render Web Service

The frontend communicates with the deployed Express backend through the /summarize API endpoint.

Environment variables are used to keep the Groq API key out of the source code.

📚 What I Learned

This project helped me practice:

React state management with useState
Controlled form inputs
File uploads with FormData
REST API communication using fetch
Node.js and Express backend development
Middleware with CORS and Multer
PDF and DOCX text extraction
Working with an AI API
Environment variables and API key security
Error and loading state handling
Git and GitHub
Full-stack deployment using Render
🔮 Future Improvements
Add authentication
Support additional document formats
Add summary length controls
Allow users to download summaries
Add summary history
Improve file validation
Add drag-and-drop file uploading
👩‍💻 Author

Shreya Nakods

GitHub:
https://github.com/nakods03