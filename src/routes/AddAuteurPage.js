import React, { useRef, useState } from "react";
import SharedPage from "./SharedPage";
import { useNavigate } from "react-router-dom";

export default function AddAuteurPage() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [biography, setBiography] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [dateOfDeath, setDateOfDeath] = useState("");
    const [auteur1, setAuteur] = useState({
        id:"",
        name: '',
        biography: '',
        dateOfBirth: '',
        dateOfDeath: '',
      });


    function getRandomNumber() {
        const min = 100000000;
        const max = 999999999;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const auteur = {
            name,
            biography,
            dateOfBirth,
            dateOfDeath
        };
    
        fetch('http://localhost:8000/auteurs/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(auteur)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Author added successfully:', data);
            // You might want to navigate to another page here
        })
        .catch(error => {
            console.error('Error adding author:', error);
        });
            navigate("/livre/add")
        };


    return (
        <SharedPage path="/livre/add">
            <form className="flex flex-col w-full m-auto items-center " onSubmit={handleSubmit}>
                <div className="flex flex-row justify-between w-[90%] ">
                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="name" className="text-[20px] font-maven-pro font-bold mb-[11px]">Name</label>
                        <input type="text" id="name" name="name" className="h-[50px] rounded-[10px] bg-[#E8EAEF] pl-[15px] pr-[15px] focus:ring-2 focus:ring-blue-600 focus:outline-none" 
                        value={name} onChange={(event) => setName(event.target.value)}/>
                    </div>
                    <div className="flex flex-col  w-[48%] ">
                        <label htmlFor="dateOfBirth" className="text-[20px] font-maven-pro font-bold mb-[11px]">Date Of Birth</label>
                        <input type="text" id="dateOfBirth" name="dateOfBirth" className="h-[50px] rounded-[10px] bg-[#E8EAEF] pl-[15px] pr-[15px] focus:ring-2 focus:ring-blue-600 focus:outline-none" 
                        value={dateOfBirth} onChange={(event) => setDateOfBirth(event.target.value)}/>
                    </div>
                </div>
                <div className="flex flex-row justify-between w-[90%] mt-[40px]">
                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="dateOfDeath" className="text-[20px] font-maven-pro font-bold mb-[11px]">Date Of Death</label>
                        <input type="text" id="dateOfDeath" name="dateOfDeath" className="h-[50px] rounded-[10px] bg-[#E8EAEF] pl-[15px] pr-[15px] focus:ring-2 focus:ring-blue-600 focus:outline-none" 
                        value={dateOfDeath} onChange={(event) => setDateOfDeath(event.target.value)}/>
                    </div>
                    <div className="flex flex-col  w-[48%] ">
                        <label htmlFor="biography" className="text-[20px] font-maven-pro font-bold mb-[11px]">Biography</label>
                        <input type="text" id="biography" name="biography" className="h-[50px] rounded-[10px] bg-[#E8EAEF] pl-[15px] pr-[15px] focus:ring-2 focus:ring-blue-600 focus:outline-none" 
                        value={biography} onChange={(event) => setBiography(event.target.value)}/>
                    </div>
                </div>
                <div className="flex flex-row justify-center mt-[20px] w-full gap-5">
                    <button className="text-lg text-[#4874ED] font-normal rounded-lg h-16 w-64 border border-blue-600 font-comfortaa hover:opacity-75" onClick={() => navigate("/livre/add")}>
                        Back
                    </button>
                    <button className="text-lg text-white bg-[#4874ED] font-normal rounded-lg h-16 w-64 border border-white font-comfortaa hover:opacity-75" type="submit">
                        Add
                    </button>
                </div>
            </form>
        </SharedPage>
    );
}
