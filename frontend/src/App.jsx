import {useState} from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";

function App(){
  const[message, setMessage] = useState("");
  const[notes, setNotes]= useState("");
  const [loading, setLoading] = useState(false);
  const[error, setError] = useState("");
  const [file, setFile] = useState(null);

  console.log(file);
  
  return(
    <div className = "app ">
    
        <h1>AI Summarizer</h1>
        <p className ="Subtitle">
             Turn your notes into Summary.  
        </p>
        <div className = "card">
          <div className = "card-title">
            YOUR NOTES
          </div>


        <label className = "file-upload"> 
        <input
          type= "file"
          accept= ".pdf,.docx"
          onChange= {(e) => setFile(e.target.files[0])}
        />
        <span className="upload-icon">📄</span>

        <span className="upload-text">
        {file ? file.name : "Upload a PDF or DOCX"}
        </span>

        <span className="upload-subtext">
        {file ? "File selected" : "Click to browse * Upto 10 MB only"}
        </span>
       </label>

        
        <textarea 
            value = {notes}
            onChange = {(e)=> {
              setNotes(e.target.value);
              e.target.style.height = "auto";
              e.target.style.height = e.target.scrollHeight + "px";

            }}
            placeholder = "Paste your notes here...."
        />
        {error && <p className = "error">{error}</p>}

        <button 
           disabled = {loading}
           onClick = {() => {
               
               if(!notes.trim() && !file){
                setError("Please enter something or uplaod any file.");
                return;
               }
               setError("");
               setLoading(true);

               const formData = new FormData();
               formData.append("notes", notes);
               if (file){
                formData.append("file", file);
               }

               fetch("https://ai-summarizer-lqhn.onrender.com/summarize" ,{
               method: "POST",
                body: formData
                })
           .then((response)=> response.json())
           .then((data) => {
              setMessage(data.summary);
              setLoading(false);
            })
            .catch((error) => {
                  console.log(error);
                  setError("something went wrong. Please try again later.");
                  setLoading(false);
            });
          }}
         > 
           Summarize
        </button>
    </div>

    <div className = "card">
      <div className = "card-title">
         YOUR SUMMARY
      </div>
    
   <div className="summary">
    {message ? <ReactMarkdown>{message}</ReactMarkdown> : "Your Summary will appear is here."}  
  </div>
    </div>
    </div>
    );
  
}
export default App;