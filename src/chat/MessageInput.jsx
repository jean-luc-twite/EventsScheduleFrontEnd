import React from "react"; 
import { FaMicrophoneAlt } from 'react-icons/fa';
import { RiSendPlaneFill } from "react-icons/ri";
// import Logo from '../assets/mainlogo.png';

function MessageInput() {
  return (
    <> 
        {/* User input */}
        <div className="ml-[10%] flex items-center p-4 border-gray-200 md:w-[80%] relative sm:w-[40%]">
          {/* Input field */}
          <input
            type="text"
            placeholder="Send message"
            className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none"
          />
          {/* Send button */}
          <button className="absolute right-12 top-0 bottom-0 flex items-center px-3 py-3 text-greenPrimary hover:text-other mr-4 hover:text-extrabold focus:outline-none">
            <RiSendPlaneFill size={20} />
          </button>
          {/* Microphone button */}
          <button className="absolute right-0 top-0 bottom-0 flex items-center px-3 py-3 text-greenPrimary rounded-r hover:text-extrabold hover:text-other focus:outline-none mr-4">
            <FaMicrophoneAlt size={20}/>
          </button>
        </div>

    </>
      
  );
}

export default MessageInput;
