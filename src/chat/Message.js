import React, { useState, useEffect } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";

import axios from "axios";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-US";

const Message = () => {
  const [isListening, setIsListening] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [note, setNote] = useState("");
  const [savedNotes, setSavedNotes] = useState([]);
  const [chatHistory, setChatHistory] = useState([
    { message: "Hi there, how can I help?" },
  ]);
  const [userTyping, setUserTyping] = useState(false); // Define userTyping state

  useEffect(() => {
    const handleListen = () => {
      if (isListening) {
        mic.start();
        mic.onend = () => {
          
          mic.start();
        };
      } else {
        mic.stop();
        mic.onend = () => {
          
        };
      }
      mic.onstart = () => {
       
      };

      mic.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join("");
        
        setNote(transcript);

        mic.onerror = (event) => {
          console.log(event.error);
        };
      };
    };

    handleListen();
  }, [isListening]);

  const sendNoteToBackend = async (note) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/submitUserInput",
        {
          userInput: note,
        }
      );
    } catch (error) {
      console.error("Error sending note:", error);
    }
  };

  const handleSaveNote = () => {
    setSavedNotes([...savedNotes, note]);
    setNote("");
    sendNoteToBackend(note);
  };

  const handleUserInput = (event) => {
    const { value } = event.target;
    setUserTyping(true); // Set userTyping to true when the user types
    setNote(value);
  };

  const handleUserSubmit = () => {
    setChatHistory([...chatHistory, { message: note }]);
    setNote("");
    setUserTyping(false); // Set userTyping to false after submission
  };

  return (
    <>
      {/* Profile picture for user */}
      <div className="align-center">
        {chatHistory.map((item, i) => (
          <div
            key={i}
            className={
              item.isUser
                ? "user-message with-picture"
                : "server-message with-picture"
            }
          >
            {item.message}
          </div>
        ))}
      </div>

      <div
        style={{
          position: "fixed",
          bottom: "20px",
          left: "50%",
          right: "50%",
          transform: "translateX(-50%)",
          width: "50%",
          height: "5%",
        }}
      >
        <input
          value={note}
          placeholder="Type your message..."
          onChange={handleUserInput}
          className="block 
                     flex-1 
                     border-2 
                     bg-transparent 
                     py-1.5 pl-1 
                     text-gray-900 
                     placeholder:text-gray-400
                     focus:ring-0 
                     sm:text-sm 
                     sm:leading-6 
                     w-full h-12 
                     bg-slate-300 
                     rounded-md "
        />

        {/* Send button */}
        <button
          onClick={handleUserSubmit}
          className="absolute right-12 top-0 bottom-0 flex items-center px-3 py-3 text-greenPrimary hover:text-other mr-4 hover:text-extrabold focus:outline-none"
        >
          <RiSendPlaneFill size={20} />
        </button>
        {/* Microphone button */}
        <button
          onClick={() => setIsListening((prevState) => !prevState)}
          className="absolute right-0 top-0 bottom-0 flex items-center px-3 py-3 text-greenPrimary rounded-r hover:text-extrabold hover:text-other focus:outline-none mr-4"
        >
          {isListening ? (
            <FaMicrophone size={24} color="green" />
          ) : (
            <FaMicrophoneSlash size={24} color="red" />
          )}
        </button>
      </div>
    </>
  );
};
export default Message;
