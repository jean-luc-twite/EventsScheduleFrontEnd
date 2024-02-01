import React from "react";
import Side from "../chat/Side";
import LogoIdentity from "../chat/LogoIdentity";
import Message from "../chat/Message";

function Getstarted() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Side />
        
      {/* Main content */}
      <div className="flex-1 flex flex-col relative">
        <LogoIdentity/> 
       <Message/>
      </div>
    </div>
  );
}

export default Getstarted;
