const express = require('express');
const fs = require('fs');
const { simpleParser } = require('mailparser');

const { OpenAI } = require('openai');

require('dotenv').config(); // To load the OpenAI API key from .env

const app = express();
app.use(express.json());
const port = 3000;

const openaiApiKey = "";

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Load OpenAI API key from .env file
  });
  

// API endpoint to process the .eml file
app.get('/hello', async (req, res) => {
    res.json({ message: `Hello !` });
});

app.get('/process-eml', async (req, res) => {
  const emlFilePath = 'C:\\Users\\Administrator\\Desktop\\HACK\\gaied-ai-marshals\\artifacts\\demo\\Interest_Rate_Notice.eml'; // Change this to the path of your local .eml file

  try {
    // Read the .eml file from the local path
    const emlFile = fs.createReadStream(emlFilePath);

    // Parse the .eml file
    const parsed = await simpleParser(emlFile);
    
    // Extract the necessary email details
    const emlData = {
      subject: parsed.subject,
      from: parsed.from.text,
      to: parsed.to.text,
      date: parsed.date,
      text: parsed.text,
      html: parsed.html,
    };

    console.log('Parsed EML Data:', emlData);

   
    const messages = [
        { role: 'system', content: 'You are an assistant that summarizes and analyzes emails.' },
        { 
          role: 'user', 
          content: `I received the following email:\n\nSubject: ${emlData.subject}\nFrom: ${emlData.from}\nTo: ${emlData.to}\nDate: ${emlData.date}\n\nBody: ${emlData.text}\n\nCan you summarize the main points of this email?` 
        }
      ];

      console.log(process.env.OPENAI_API_KEY)
  
      // Send the parsed data to OpenAI using the Chat Completion API
      const completion = await client.chat.completions.create({
        model: 'gpt-4o', // or 'gpt-3.5-turbo'
        messages: messages
      });
  
      // Get the response from OpenAI
      const openAiResponse = completion.choices[0].message.content.trim();
  
      // Send the response back to the client
      res.status(200).json({
        message: 'EML file processed and response from OpenAI received.',
        openAiResponse: openAiResponse,
      });
     
  } catch (error) {
    console.error('Error processing EML file:', error);
    res.status(500).send('Error processing the EML file.'+error);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});