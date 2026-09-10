require("dotenv").config();

const cors = require("cors");
const express = require ("express")
const app = express();
const PORT = process.env.PORT || 5001;
const Groq = require("groq-sdk") 
const multer = require("multer")
const mammoth = require("mammoth")
const {PDFParse} = require ("pdf-parse")

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 10 * 1024 *1024
    }
});

app.use(cors());
app.use(express.json());

console.log(process.env.GROQ_API_KEY ? "API key loaded!" : "API key missing!");

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});


app.post("/summarize" , upload.single("file"), async (req, res) =>{
     const notes = req.body.notes;

     if(!notes?.trim() && !req.file){
        return res.status(400).json({
            error: "Please enter notes or file."
        });
     }
     let extractedText = "";

     if(req.file){
            if(req.file.mimetype === "application/pdf"){
                const Parser = new PDFParse({
                    data: req.file.buffer
                 })
                 const result = await Parser.getText();
                 extractedText = result.text;
                 await Parser.destroy();
              } else if (
                req.file.mimetype === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {

                    const result = await mammoth.extractRawText({
                    buffer: req.file.buffer
                });

        extractedText = result.value;
                }
     }
     

     

     const texttoSummarize = extractedText || notes ;

     const completion = await groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content:`You are an AI summarization assistant. Summarize the following content clearly and concisely.Keep the important facts and key points.Do not add information that is not present in the content.Use simple, easy-to-understand language.Content to summarize:\n\n${texttoSummarize}`
            }
        ],
        model: "openai/gpt-oss-20b"
     });

     const summary = completion.choices[0].message.content;

     res.json({
        summary: summary
     });
});


app.listen(PORT,"0.0.0.0", () =>{
    console.log(`server is running on ${PORT}`);
});

