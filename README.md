# 🚀 Project Name

## 📌 Table of Contents
- [Introduction](#introduction)
- [Demo](#demo)
- [Inspiration](#inspiration)
- [What It Does](#what-it-does)
- [How We Built It](#how-we-built-it)
- [Challenges We Faced](#challenges-we-faced)
- [How to Run](#how-to-run)
- [Tech Stack](#tech-stack)
- [Team](#team)

---

## 🎯 Introduction
Multiple emails from customers/clients that are dealt with different teams based on the context. This solution should enable auto-classification of emails based on the context and categorize emails into predefined request  types and sub request types based on the sender's intent along with reasoning and respond with a Json

## 🎥 Demo
🔗 [Live Demo](#) (if applicable)  
📹 [Video Demo](#) (if applicable)  
🖼️ Screenshots:
![image](https://github.com/user-attachments/assets/430ea771-509a-49da-8c19-da952d10d6ed)


## 💡 Inspiration
What inspired you to create this project? Describe the problem you're solving.

## ⚙️ What It Does
Our solution works as follows:​
email Receiving: Reads emails send as input, the email is parsed and the content is extracted (including attachments!)​
Large Language Model: The content is passed to our powerful Large Language Model, gpt-4o-mini which extracts the meaning, context and the sentiment from the email and determines the request type and sub request type based on prompt.​
Summarization: The email is then summarized by a lighter model and responds in json format which can be integrated with any systems

## 🛠️ How We Built It
It is built using LLM model, gpt-4o-mini 


## 🚧 Challenges We Faced
Describe the major technical or non-technical challenges your team encountered.

## 🏃 How to Run
1. Clone the repository  
   ```sh
   git clone https://github.com/your-repo.git
   ```
2. Install dependencies  
   ```sh
   Go to https://github.com/ewfx/gaied-ai-marshals/tree/node_api/code/src/node-api-project path in cmd
   npm install
   ```
3  Add .env file in root folder of node-api-project and add 
   OPENAI_API_KEY=KEY
4. Run the project  
   ```sh
   Go to https://github.com/ewfx/gaied-ai-marshals/tree/node_api/code/src/node-api-project path in cmd
   npm app.js 
   ```

## 🏗️ Tech Stack
- 🔹 Frontend: NA
- 🔹 Backend: Node.js
- 🔹 Database: NA
- 🔹 Other: OpenAI API

## 👥 Team
- **Your Name** - [GitHub](#) | [LinkedIn](#)
- **Teammate 2** - [GitHub](#) | [LinkedIn](#)
