import React, { useState } from 'react'
import { ChevronFirst } from 'lucide-react';
import { IoSettingsSharp} from "react-icons/io5";
import {FaSignOutAlt, FaHistory} from 'react-icons/fa';
import { CgMenuRightAlt } from "react-icons/cg";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { MdHelpOutline, MdOutlineClose } from "react-icons/md";
function Sidebar({children}) {
    const [expanded, setExpended] = useState(true);

    // <img src={Logo} 
    //                              alt="" className={`overflow-hidden transition-all 
    //                              ${expanded?"w-10":"w-10"}`}/>
  return (
    <> 
            <div className="h-screen">
                <nav className="h-full flex flex-col bg-greenPrimary border-r shadow-sm">
                    <div className="p-4 pb-2 flex justify-between items-center">
                        <div className={`overflow-hidden transition-all ${expanded?"w-48" : "w-10"}`}/>
                        <button 
                            onClick={()=> 
                            setExpended((curr) =>!curr)} 
                            className='p-1.5 rounded-l 
                                        text-white 
                                        hover:rotate-180 
                                        transition-transform 
                                        duration-200 '
                        >
                            {expanded ? <MdOutlineClose size={20}/>: <CgMenuRightAlt size={20}/> }
                        </button>
                    </div>
                        {/* The profile content display */}

                        <div className='flex text-white items-center mt-10 ml-1  rounded-md  cursor-pointer'>
                        
                        <div        
                                 className={`overflow-hidden transition-all 
                                 ${expanded?"w-10":"w-10"}`} >
                        </div>
                            <div className={`text-lg ml-2  overflow-hidden transition-all ${expanded?"w-52":"w-0"}`}>Linda</div>
                             
                        </div>

                        {/* The new chat display */}
                    <div className="flex text-white items-center mt-10 rounded-md h-12 mr-2 cursor-pointer hover:text-brandPrimary hover:border-brandPrimary ">                        
                            <div className=' ml-2 '><AiOutlinePlusSquare size={20}/></div>
                            <div className={`text-m transition-all overflow-hidden ${expanded?"w-52 ml-2" :"w-0"}`}>New Chat</div>                                
                    </div>

                    {/* Display the history of check and the title which must come from the reset search terms */}
                    <div className='flex items-center text-white ml-2 mt-3 mb-8  cursor-pointer hover:text-brandPrimary '>
                         <FaHistory size={20}/> 
                         <div className={`font-extrabold text-m overflow-hidden  transition-all ml-2 ${expanded?"w-52": "w-0"}`}>
                            History</div> </div>

                    <ul className="flex-1 px-3"> {children}</ul>
                    <div className='ml-2 relative text-white'>
                    <div className='flex items-center mb-6 h-6 cursor-pointer hover:rounded-md hover:text-brandPrimary '> 
                    <MdHelpOutline size={20}/> 
                    <div className={`font-extrabold transition-all overflow-hidden ml-2 ${expanded?"w-52": "w-0"}`}>
                        Help</div> </div>
                    <div className='flex items-center mb-8  cursor-pointer hover:text-brandPrimary '>
                         <IoSettingsSharp size={20}/> 
                         <div className={`font-extrabold overflow-hidden transition-all ml-2 ${expanded?"w-52": "w-0"}`}>
                            Settings</div> </div>
    
                    </div> 
                    <div className=" border-t flex p-3 hover:text-brandPrimary cursor-pointer text-white">
                        <FaSignOutAlt size={20}/>
                        <div className="flex justify-between items-center">
                            <div className="leading-4">
                                <h4 className={`font-semibold ml-4  overflow-hidden transition-all ${expanded? "w-52 ml-3": "w-0"}`} >
                                    Log out
                                </h4>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
    </>
  )
}


export default Sidebar