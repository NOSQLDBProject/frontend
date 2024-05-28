import React from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaBook } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { BsBank } from "react-icons/bs";

export default function Home() {
    return (
        <body className='w-full h-full'>
            <div className='w-full h-[10vh] flex bg-gradient-to-r from-[#3E27C9] to-[#2F0C7A] p-4'>
                <div className='font-maven-pro font-black text-white text-[4vh] mt-auto mb-auto'>
                    BookNow
                </div>
                <IoMdCloseCircleOutline className='text-[5vh] text-white mt-auto mb-auto ml-[10vw] cursor-pointer hover:opacity-75'/>
                <div className='w-[3vw] h-[6vh] rounded-full bg-red-600 mb-auto mt-auto ml-auto text-white font-maven-pro font-black text-[3vh] text-center pt-1 cursor-pointer hover:opacity-75'>
                    AA
                </div>
            </div>
            <div className='w-[22vw] h-[90vh] bg-[#212121] pt-[3vh]'>
                <div className='border-b border-gray-600 cursor-pointer w-full h-[10vh] hover:bg-[#3E27C9] flex'>
                    <FaBook className='text-[4vh] text-white mt-auto mb-auto ml-[2vw]'/>
                    <p className='mt-auto mb-auto ml-2 text-white text-[4vh] font-comfortaa'>Livres</p>
                </div>
                <div className='border-b border-gray-600 cursor-pointer w-full h-[10vh] hover:bg-[#3E27C9] flex'>
                    <FaUsers className='text-[4vh] text-white mt-auto mb-auto ml-[2vw]'/>
                    <p className='mt-auto mb-auto ml-2 text-white text-[4vh] font-comfortaa'>Adherents</p>
                </div>
                <div className='border-b border-gray-600 cursor-pointer w-full h-[10vh] hover:bg-[#3E27C9] flex'>
                    <BsBank className='text-[4vh] text-white mt-auto mb-auto ml-[2vw]'/>
                    <p className='mt-auto mb-auto ml-2 text-white text-[4vh] font-comfortaa'>Prets</p>
                </div>
            </div>
        </body>
    );
}