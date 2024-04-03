import React from "react";
import Side from "../chat/Side";
import LogoIdentity from "../chat/LogoIdentity";
import Message from "../chat/Message";

function Getstarted() {
  return (
    <div className="flex h-full bg-gray-50">
      {/* Sidebar */}
      <Side />
        
      {/* Main content */}
      <div className="flex-1 flex flex-col relative">
         
      </div>
    </div>
  );
}

export default Getstarted;
