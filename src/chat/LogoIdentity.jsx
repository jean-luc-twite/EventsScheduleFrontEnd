import React from "react";  
// import Logo from '../assets/mainlogo.png';

function LogoIdentity() {
  return (
    <> 
        {/* Logo on top right corner */}
        <div className="flex absolute top-0 right-0 p-4 text-black items-center lg:text-xl md:text-lg font-extrabold">
          {/* <img src={Logo} alt="" className="h-10"/>  */}
        </div>  
        <div className="flex-1 overflow-y-auto"> 
        </div>  
    </>
  );
}

export default LogoIdentity;
