import React, { useState, useEffect } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [pdfFile, setPdfFile] = useState(null);

  useEffect(() => {
    const welcomeMessages = [
      { id: Date.now(), text: "Hello! I'm your chatbot assistant.", sender: 'bot' },
      { id: Date.now() + 1, text: "I can help you navigate through the PDF. Just type your questions!", sender: 'bot' },
    ];
    setMessages(welcomeMessages);
  }, []);

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleSendMessage = (event) => {
    event.preventDefault();
    if (!userInput.trim()) return;

    const newMessage = { id: Date.now(), text: userInput, sender: 'user' };
    setMessages(prevMessages => [...prevMessages, newMessage]);

    setUserInput('');
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
      const fileMessage = { id: Date.now(), text: `PDF uploaded: ${file.name}`, sender: 'bot' };
      setMessages(prevMessages => [...prevMessages, fileMessage]);
    } else {
      alert("Please upload a PDF file.");
    }
  };

  return (
    <div className="chatbot-container">
      <h1 className="app-title">bibConfetti</h1>
      <h2>ChatWithpdf</h2>
      <div className="messages-container">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <label htmlFor="pdf-upload" className="pdf-upload-button">
          Upload PDF
          <input
            id="pdf-upload"
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            hidden
          />
        </label>
        <form className="message-form" onSubmit={handleSendMessage}>
          <input
            type="text"
            value={userInput}
            onChange={handleUserInput}
            
            className="message-input"
            placeholder="Type your message here..."
          />
          <button type="submit" className="send-button">&gt;</button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
