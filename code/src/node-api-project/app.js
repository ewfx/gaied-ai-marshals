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
      {
        role: "system",
        content: "You are a capable assistant trained to extract key elements from an email body related to loan details and exactly match the context in provided request type and request sub type. The email body may include loan-related information such as the customer name, loan amount and other important loan terms. You should parse the email to identify and extract the following key details:" +
             "1. *Request Type*: The request type from context. " +
             "2. *Request Sub Type*: The request sub type from context. " +
             "3. *Borrower Name*: The name of the borrower. " +
             "4. *Loan Amount*: The total amount of the loan. " +
             "Once these elements are extracted, provide the response in the following json format: " +
             "{" +
             "\"request_type\": \"<Request Type>\",\n" +
             "\"request_sub_type\": \"<Request Sub Type>\",\n" +
             "\"borrower_name\": \"<Borrower Name>\",\n" +
             "\"loan_amount\": \"<Loan Amount>\"\n" +
             "}" +
             "These are request types and request sub types: " +
             "{" +
              "\"Adjustment\": \"\", " +
              "\"AU Transfer\": \"\", " +
              "\"Closing Notice\": \"Relocation Fees\", " +
             "\"Closing Notice\": \"Amendment Fees\", " +
             "\"Closing Notice\": \"Relocation Principal\", " +
             "\"Commitment Change\": \"Cashless Roll\", " +
             "\"Commitment Change\": \"Decrease\", " +
             "\"Commitment Change\": \"Increase\", " +
             "\"Fee Payment\": \"Ongoing Fee\", " +
             "\"Fee Payment\": \"Letter of Credit Fee\", " +
             "\"Money Movement - Inbound\": \"Principal\", " +
             "\"Money Movement - Inbound\": \"Interest\", " +
             "\"Money Movement - Inbound\": \"Principal + Interest\", " +
             "\"Money Movement - Inbound\": \"Principal + Interest + Fee\", " +
             "\"Money Movement - Outbound\": \"Timebound\", " +
             "\"Money Movement - Outbound\": \"Foreign Currency\" " +
              "}"
     },
   {
        role: "user",
        content: emlData.text,
     }
      ];
      
      // Send the parsed data to OpenAI using the Chat Completion API
      const completion = await client.chat.completions.create({
          model: 'gpt-4o-mini', // or 'gpt-3.5-turbo'
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
