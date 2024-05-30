import React , { useRef } from "react";
import SharedPage from "./SharedPage";
import myImage from '../assets/Group 11.svg'; 

export default function AddAdherentPage() {
    const fileInput = useRef(null);

    const handleDivClick = () => {
        fileInput.current.click();
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log(file); 
      };
    return (
        <SharedPage path="/adherents/add">
            <form className="m-auto w-[80%] h-[40vh] flex flex-wrap ">
                    <input type="text" placeholder="Nom" className="ml-auto mr-auto w-[35%] h-[5vh] m-2 p-2 rounded-[15px] border-2 border-gray-300"/>
                    <input type="text" placeholder="Prenom" className="ml-auto mr-auto w-[35%] h-[5vh] m-2 p-2 rounded-[15px] border-2 border-gray-300"/>
                    <input type="text" placeholder="cin" className="ml-auto mr-auto w-[35%] h-[5vh] m-2 p-2 rounded-[15px] border-2 border-gray-300"/>
                    <input type="text" placeholder="Telephone" className="ml-auto mr-auto w-[35%] h-[5vh] m-2 p-2 rounded-[15px] border-2 border-gray-300"/>
                    <input type="text" placeholder="Email" className="ml-auto mr-auto w-[60%] h-[5vh] m-2 p-2 rounded-[15px] border-2 border-gray-300"/>
                    <div className="ml-auto mr-auto relative flex cursor-pointer hover:opacity-75 h-[8vh] ease-in-out duration-300 hover:translate-y-[1px]" onClick={handleDivClick}>
                        <img src={myImage} alt="add" className="w-[2vw] m-2"/>
                        <div className="text-[2vh] text-black font-maven-pro mt-auto mb-auto">
                            Add a photo
                        </div>
                        <input type="file" ref={fileInput} onChange={handleFileChange} style={{ display: 'none' }} />
                    </div>
                    
            </form>
        </SharedPage>
    );
}