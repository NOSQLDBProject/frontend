import React, { useRef, useState } from "react";
import SharedPage from "./SharedPage";
import myImage from '../assets/Group 11.svg'; 

export default function AddAdherentPage() {
    const fileInput = useRef(null);
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [cin, setCin] = useState("");
    const [telephone, setTelephone] = useState("");
    const [email, setEmail] = useState("");
    const [age , setAge] = useState("");
    const [status, setStatus] = useState("");

    const handleDivClick = () => {
        fileInput.current.click();
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = function() {
        const base64String = reader.result.replace("data:", "")
            .replace(/^.+,/, "");
        console.log(base64String);
    }
    reader.readAsDataURL(file);
    };

    const optionsList = [
        { value: 'married', name: 'Married' },
        { value: 'single', name: 'Single' },

    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Nom:", nom);
        console.log("Prenom:", prenom);
        console.log("CIN:", cin);
        console.log("Telephone:", telephone);
        console.log("Email:", email);
        console.log("Photo:", fileInput.current.files[0])
    }

    return (
        <SharedPage path="/adherents/add">
            <form className="flex flex-col w-full m-auto items-center overflow-y-hidden" onSubmit={handleSubmit}>
                <div className="flex flex-row justify-between w-[90%] ">
                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="nom" className="text-[20px] font-maven-pro font-bold mb-[11px]">First Name</label>
                        <input type="text" id="nom" name="nom" className="h-[50px] rounded-[10px] bg-[#E8EAEF]
                        pl-[15px] pr-[15px] focus:ring-2 focus:ring-blue-600 focus:outline-none" 
                        value={nom} onChange={(event) => setNom(event.target.value)}/>
                    </div>
                    <div className="flex flex-col  w-[48%] ">
                        <label htmlFor="prenom" className="text-[20px] font-maven-pro font-bold mb-[11px]">Last Name</label>
                        <input type="text" id="prenom" name="prenom" className="h-[50px] rounded-[10px] bg-[#E8EAEF]
                        pl-[15px] pr-[15px] focus:ring-2 focus:ring-blue-600 focus:outline-none" 
                        value={prenom} onChange={(event) => setPrenom(event.target.value)}/>
                    </div>
                </div>
                <div className="flex flex-row justify-between w-[90%] mt-[40px]">
                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="age" className="text-[20px] font-maven-pro font-bold mb-[11px]">Age</label>
                        <input type="text" id="age" name="age" className="h-[50px] rounded-[10px] bg-[#E8EAEF]
                        pl-[15px] pr-[15px] focus:ring-2 focus:ring-blue-600 focus:outline-none" 
                        value={age} onChange={(event) => setAge(event.target.value)}/>
                    </div>
                    <div className="flex flex-col w-[48%] ">
                        <label htmlFor="cin" className="text-[20px] font-maven-pro font-bold mb-[11px]">CIN</label>
                        <input type="text" id="cin" name="cin" className="h-[50px] rounded-[10px] bg-[#E8EAEF]
                        pl-[15px] pr-[15px] focus:ring-2 focus:ring-blue-600 focus:outline-none" 
                        value={cin} onChange={(event) => setCin(event.target.value)}/>
                    </div>
                </div>
                <div className="flex flex-row justify-between w-[90%]  mt-[40px]">
                <div className="flex flex-col  w-[48%] ">
                        <label htmlFor="telephone" className="text-[20px] font-maven-pro font-bold mb-[11px]">Phone Number</label>
                        <input type="text" id="telephone" name="telephone" className="h-[50px] rounded-[10px] bg-[#E8EAEF]
                        pl-[15px] pr-[15px] focus:ring-2 focus:ring-blue-600 focus:outline-none" 
                        value={telephone} onChange={(event) => setTelephone(event.target.value)}/>
                    </div>
                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="status" className="text-[20px] font-maven-pro font-bold mb-[11px]">Status</label>
                        <select id="status" name="status" className="h-[50px] rounded-[10px] bg-[#E8EAEF]
                        pl-[15px] pr-[15px] focus:ring-2 focus:ring-blue-600 focus:outline-none" 
                        value={status} onChange={(event) => setStatus(event.target.value)}>
                                    {optionsList.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    
                </div>
                <div className="flex flex-row justify-between w-[90%] mt-[40px]">
                <div className="flex flex-col  w-[48%]">
                        <label htmlFor="email" className="text-[20px] font-maven-pro font-bold mb-[11px]">E-mail</label>
                        <input type="text" id="email" name="email" className="h-[50px] rounded-[10px] bg-[#E8EAEF]
                        pl-[15px] pr-[15px] focus:ring-2 focus:ring-blue-600 focus:outline-none" 
                        value={email} onChange={(event) => setEmail(event.target.value)}/>
                    </div>
                    <div className="flex flex-col w-[48%] ">
                        <label htmlFor="cin" className="text-[20px] font-maven-pro font-bold mb-[11px]">CIN</label>
                        <input type="text" id="cin" name="cin" className="h-[50px] rounded-[10px] bg-[#E8EAEF]
                        pl-[15px] pr-[15px] focus:ring-2 focus:ring-blue-600 focus:outline-none" 
                        value={cin} onChange={(event) => setCin(event.target.value)}/>
                    </div>
                </div>
                <div className="flex flex-row justify-center mt-[20px] w-full gap-5">
                    <button className="text-lg text-[#4874ED] font-normal rounded-lg h-16 w-64 border border-blue-600 font-comfortaa ">
                        Back
                    </button>
                    <button className="text-lg text-white bg-[#4874ED] font-normal rounded-lg h-16 w-64 border border-white font-comfortaa">
                        Add
                    </button>
                </div>
            </form>
        </SharedPage>
    );
}