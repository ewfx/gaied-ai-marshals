# 🚀 Gen AI Orchestrator for Email and Document Triage/Routing - AI Marshals

## 📌 Table of Contents
- [Introduction](#introduction)
- [Demo](#demo)
- [What It Does](#what-it-does)
- [How We Built It](#how-we-built-it)
- [How to Run](#how-to-run)
- [Tech Stack](#tech-stack)

---

## 🎯 Introduction
Multiple emails from customers/clients that are dealt with different teams based on the context. This solution should enable auto-classification of emails based on the context and categorize emails into predefined request  types and sub request types based on the sender's intent along with reasoning and respond with a Json

## 🎥 Demo
🖼️ Screenshots:
![image](https://github.com/user-attachments/assets/430ea771-509a-49da-8c19-da952d10d6ed)

## ⚙️ What It Does
Our solution works as follows:
 - Email Receiving: Reads emails send as input, the email is parsed and the content is extracted
 - Custom prompt with augmented cache: Creating a custom prompt with providing request types information to match context and the expected json response. Also instructing to extract key elements from email content and add to response.
 - Large Language Model: The content is passed to our powerful Large Language Model, gpt-4o-mini which extracts the meaning, context and the sentiment from the email and determines the request type and sub request type based on prompt.
 - Summarization: The email is then summarized by a lighter model and responds in json format which can be integrated with any systems

## 🛠️ How We Built It
It is built using LLM model, gpt-4o-mini 

## 🏃 How to Run
1. Clone the repository  
   ```sh
   git clone https://github.com/ewfx/gaied-ai-marshals.git
   ```
2. Install dependencies  
   ```sh
   Go to https://github.com/ewfx/gaied-ai-marshals/tree/node_api/code/node-api-project path in cmd
   npm install
   ```
3. Add .env file in root folder of node-api-project and add
    ```sh
   OPENAI_API_KEY=KEY
   ```
4. Run the project  
   ```sh
   Go to https://github.com/ewfx/gaied-ai-marshals/tree/node_api/code/node-api-project path in cmd
   npm app.js 
   ```

## 🏗️ Tech Stack
- 🔹 Frontend: NA
- 🔹 Backend: Node.js
- 🔹 Database: NA
- 🔹 Other: OpenAI API
