import React ,{useEffect, useState} from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaBook } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { BsBank } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import logo from "../assets/LibraConnect.svg"
export default function SharedPage({children,path}) {

    const navigate = useNavigate();
    const [showMenuButton, setShowMenuButton] = useState(false);
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const [isLivrePath, setIsLivrePath] = useState(false);
    const [isAdherentPath, setIsAdherentPath] = useState(false);
    const [isPretPath, setIsPretPath] = useState(false);



    useEffect(() => {
        if (path?.startsWith("/livre")) {
            setIsLivrePath(true);
            setIsAdherentPath(false);
            setIsPretPath(false);
        }
        if(path?.startsWith("/adherents")) {
            setIsLivrePath(false);
            setIsAdherentPath(true);
            setIsPretPath(false);
        }
        if(path?.startsWith("/prets")) {
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
        <body className='w-full h-full bg-[#F4F7FC]'>
            <div className='w-full h-[10vh] flex bg-white p-4 shadow-md mb-[8px] z-10 '>
                <div className={`font-maven-pro font-black text-white text-[4vh] mt-auto mb-auto 
                transition-all duration-500 ease-in-out`}>
                    <img src={logo} className='w-[12vw]'/>
                </div>
                <div className='w-[3vw] h-[6vh] rounded-full bg-red-600 mb-auto mt-auto ml-auto text-white font-maven-pro font-black text-[3vh] text-center pt-1 cursor-pointer hover:opacity-75'>
                    AA
                </div>
            </div>
            <div className='flex flex-col'>
                <div className={`w-[5vw] h-[90vh] bg-[#4874ED] pt-[3vh] mt-[-8px]`}>
                    <div className={`cursor-pointer w-full h-[10vh]
                    flex ${isLivrePath? 'bg-[#4874ED]' : ""}`} onClick={() => navigateTo("/livre")}>
                        <div className='flex h-[65%] w-[65%] hover:bg-white/35 m-auto rounded-[12px]'>
                            <FaBook className='text-[3vh] text-white m-auto'/>
                        </div>
                    </div>
                    <div className={`cursor-pointer w-full h-[10vh]
                    flex ${isLivrePath? 'bg-[#4874ED]' : ""}`} onClick={() => navigateTo("/adherents")}>
                        <div className='flex h-[65%] w-[65%] hover:bg-white/35 m-auto rounded-[12px]'>
                            <FaUsers className='text-[3vh] text-white m-auto'/>
                        </div>
                    </div>
                    <div className={`cursor-pointer w-full h-[10vh]
                    flex ${isLivrePath? 'bg-[#4874ED]' : ""}`} onClick={() => navigateTo("/prets")}>
                        <div className='flex h-[65%] w-[65%] hover:bg-white/35 m-auto rounded-[12px]'>
                            <BsBank className='text-[3vh] text-white m-auto'/>
                        </div>
                    </div>
                </div>
                <div className={`overflow-y-hidden h-[89vh] w-[95vw] flex fixed flex-wrap bg-[#F4F7FC] ml-[5vw] `}>
                    {children}
                </div>
            </div>
        </body>
    );
}