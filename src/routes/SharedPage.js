import React ,{useEffect, useState} from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaBook } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { BsBank } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function SharedPage({children,path}) {

    const navigate = useNavigate();
    const [showMenuButton, setShowMenuButton] = useState(false);
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const [isLivrePath, setIsLivrePath] = useState(false);
    const [isAdherentPath, setIsAdherentPath] = useState(false);
    const [isPretPath, setIsPretPath] = useState(false);



    useEffect(() => {
        if (path.startsWith("/livre")) {
            setIsLivrePath(true);
            setIsAdherentPath(false);
            setIsPretPath(false);
        }
        if(path.startsWith("/adherents")) {
            setIsLivrePath(false);
            setIsAdherentPath(true);
            setIsPretPath(false);
        }
        if(path.startsWith("/prets")) {
            setIsLivrePath(false);
            setIsAdherentPath(false);
            setIsPretPath(true);
        }
        console.log(path);
    }, [path]);


    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
        setShowMenuButton(true);
        setTimeout(() => setShowMenuButton(false), 20);
    };

    const navigateTo = (path) => {
        navigate(path);
    }



    return (
        <body className='w-full h-full'>
            <div className='w-full h-[10vh] flex bg-gradient-to-r from-[#3E27C9] to-[#2F0C7A] p-4'>
                <div className={`font-maven-pro font-black text-white text-[4vh] mt-auto mb-auto 
                transition-all duration-500 ease-in-out ${sidebarVisible ? '' : 'translate-x-[-20vw]'}`}>
                    BookNow
                </div>
                {sidebarVisible && (
                    <IoMdCloseCircleOutline className={`text-[5vh] text-white mt-auto mb-auto cursor-pointer hover:opacity-75 transition-all duration-500 ease-in-out ${sidebarVisible ? 'translate-x-[10vw]' : 'translate-x-[-11vw]'}`} onClick={toggleSidebar}/>
                )}
                {!sidebarVisible && (
                    <FaBars className={`text-[5vh] text-white mt-auto mb-auto cursor-pointer hover:opacity-75 transition-all duration-500 ease-in-out ${showMenuButton ? 'ml-[10vw]' : 'ml-[-11vw]'}`} onClick={toggleSidebar}/>
                )}
                <div className='w-[3vw] h-[6vh] rounded-full bg-red-600 mb-auto mt-auto ml-auto text-white font-maven-pro font-black text-[3vh] text-center pt-1 cursor-pointer hover:opacity-75'>
                    AA
                </div>
            </div>
            <div className='flex flex-wrap-2'>
                <div className={`w-[22vw] h-[90vh] bg-[#212121] pt-[3vh] transition-all duration-500 ease-in-out ${sidebarVisible ? '' : 'translate-x-[-22vw]'}`}>
                    <div className={`border-b border-gray-600 cursor-pointer w-full h-[10vh] 
                    hover:bg-[#3E27C9] flex ${isLivrePath? 'bg-[#3E27C9]' : ""}`} onClick={() => navigateTo("/livre")}>
                        <FaBook className='text-[4vh] text-white mt-auto mb-auto ml-[2vw]'/>
                        <p className='mt-auto mb-auto ml-2 text-white text-[4vh] font-comfortaa'>Livres</p>
                    </div>
                    <div className={`border-b border-gray-600 cursor-pointer w-full h-[10vh] 
                    hover:bg-[#3E27C9] flex ${isAdherentPath? 'bg-[#3E27C9]' : ""}`} onClick={() => navigateTo("/adherents")}>
                        <FaUsers className='text-[4vh] text-white mt-auto mb-auto ml-[2vw]'/>
                        <p className='mt-auto mb-auto ml-2 text-white text-[4vh] font-comfortaa'>Adherents</p>
                    </div>
                    <div className={`border-b border-gray-600 cursor-pointer w-full h-[10vh] 
                    hover:bg-[#3E27C9] flex ${isPretPath? 'bg-[#3E27C9]' : ""}`}>
                        <BsBank className='text-[4vh] text-white mt-auto mb-auto ml-[2vw]'/>
                        <p className='mt-auto mb-auto ml-2 text-white text-[4vh] font-comfortaa'>Prets</p>
                    </div>
                </div>
                <div className={`overflow-y-scroll h-[90vh] flex fixed flex-wrap bg-white  ${sidebarVisible ? 'w-[79vw] ml-[22vw] duration-700 ease-in-out' : 'w-[100vw] duration-300 ease-in'}`}>
                    {children}
                </div>
            </div>
        </body>
    );
}