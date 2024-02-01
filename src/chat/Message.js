import React from 'react';
import { CDBInput, CDBContainer } from 'cdbreact';
import { FaArrowUp, FaMicrophoneAlt } from 'react-icons/fa';
import { RiSendPlaneFill } from "react-icons/ri";


const Message = () => {
  return (
    
    <div style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)', width: '50%', borderRadius: '25px'}}>
      <CDBInput fontSize={16} size="lg" placeholder="Type your message..."/>
      {/* Send button */}
      <button className="absolute right-12 top-0 bottom-0 flex items-center px-3 py-3 text-greenPrimary hover:text-other mr-4 hover:text-extrabold focus:outline-none">
            <RiSendPlaneFill size={20} />
          </button>
          {/* Microphone button */}
     <button className="absolute right-0 top-0 bottom-0 flex items-center px-3 py-3 text-greenPrimary rounded-r hover:text-extrabold hover:text-other focus:outline-none mr-4">
            <FaMicrophoneAlt size={20}/>
    </button>

    </div>
  );
};
export default Message;