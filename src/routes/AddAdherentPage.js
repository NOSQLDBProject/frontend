import React, { useRef, useState } from "react";
import SharedPage from "./SharedPage";
import myImage from '../assets/Group 11.svg'; 
import { useNavigate } from "react-router-dom";

export default function AddAdherentPage() {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [cin, setCin] = useState("");
    const [telephone, setTelephone] = useState("");
    const [email, setEmail] = useState("");
    const [age , setAge] = useState("");
    const [status, setStatus] = useState("married");
    const [gender, setGender] = useState("");
    const navigate = useNavigate();
    const [adherent1, setAdherent] = useState({
        id:"",
        nom: '',
        prenom: '',
        cin: '',
        email: '',
        telephone: ''
      });

    const optionsList = [
        { value: 'married', name: 'Married' },
        { value: 'single', name: 'Single' },
    ];

    function getRandomNumber() {
        const min = 100000000;
        const max = 999999999;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Nom:", nom);
        console.log("Prenom:", prenom);
        console.log("CIN:", cin);
        console.log("Telephone:", telephone);
        console.log("Email:", email);
        console.log("Age:", age);
        console.log("Status:", status);
        console.log("Gender:", gender);
        const adherent = {
            id:getRandomNumber(),
            nom: nom,
            prenom: prenom,
            cin: cin,
            email: email,
            telephone: telephone
        };
        fetch(`http://10.72.177.197:8000/adherents/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify(adherent)
        })
          .then(response => response.json())
          .then(data => {
            console.log('Adherent added:', data);
            // Clear form
            setAdherent({
                id:1,
                nom: nom,
                prenom: prenom,
                cin: cin,
                email: email,
                telephone: telephone
            });
          })
          .catch(error => console.error('Error:', error));
          navigate("/adherents")
        };


    return (
        <SharedPage path="/adherents/add">
            <form className="flex flex-col w-full m-auto items-center " onSubmit={handleSubmit}>
                <div className="flex flex-row justify-between w-[90%] ">
                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="nom" className="text-[20px] font-maven-pro font-bold mb-[11px]">First Name</label>
                        <input type="text" id="nom" name="nom" className="h-[50px] rounded-[10px] bg-[#E8EAEF] pl-[15px] pr-[15px] focus:ring-2 focus:ring-blue-600 focus:outline-none" 
                        value={nom} onChange={(event) => setNom(event.target.value)}/>
                    </div>
                    <div className="flex flex-col  w-[48%] ">
                        <label htmlFor="prenom" className="text-[20px] font-maven-pro font-bold mb-[11px]">Last Name</label>
                        <input type="text" id="prenom" name="prenom" className="h-[50px] rounded-[10px] bg-[#E8EAEF] pl-[15px] pr-[15px] focus:ring-2 focus:ring-blue-600 focus:outline-none" 
                        value={prenom} onChange={(event) => setPrenom(event.target.value)}/>
                    </div>
                </div>
                <div className="flex flex-row justify-between w-[90%] mt-[40px]">
                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="age" className="text-[20px] font-maven-pro font-bold mb-[11px]">Age</label>
                        <input type="text" id="age" name="age" className="h-[50px] rounded-[10px] bg-[#E8EAEF] pl-[15px] pr-[15px] focus:ring-2 focus:ring-blue-600 focus:outline-none" 
                        value={age} onChange={(event) => setAge(event.target.value)}/>
                    </div>
                    <div className="flex flex-col w-[48%] ">
                        <label htmlFor="gender" className="text-[20px] font-maven-pro font-bold mb-[11px]">Gender</label>
                        <div className="mt-4">
                            <input
                                type="radio"
                                id="male"
                                name="gender"
                                value="Male"
                                checked={gender === 'Male'}
                                onChange={(event) => setGender(event.target.value)}
                                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none checked:bg-blue-600"
                            />
                            <label htmlFor="male" className="ml-2 text-sm font-medium text-gray-700">
                                Male
                            </label>
                            <input
                                type="radio"
                                id="female"
                                name="gender"
                                value="Female"
                                checked={gender === 'Female'}
                                onChange={(event) => setGender(event.target.value)}
                                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none checked:bg-blue-600 ml-4"
                            />
                            <label htmlFor="female" className="ml-2 text-sm font-medium text-gray-700">
                                Female
                            </label>
                        </div>
                    </div>  
                </div>
                <div className="flex flex-row justify-between w-[90%]  mt-[40px]">
                    <div className="flex flex-col  w-[48%] ">
                        <label htmlFor="telephone" className="text-[20px] font-maven-pro font-bold mb-[11px]">Phone Number</label>
                        <input type="text" id="telephone" name="telephone" className="h-[50px] rounded-[10px] bg-[#E8EAEF] pl-[15px] pr-[15px] focus:ring-2 focus:ring-blue-600 focus:outline-none" 
                        value={telephone} onChange={(event) => setTelephone(event.target.value)}/>
                    </div>
                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="status" className="text-[20px] font-maven-pro font-bold mb-[11px]">Status</label>
                        <select id="status" name="status" className="h-[50px] rounded-[10px] bg-[#E8EAEF] pl-[15px] pr-[15px] focus:ring-2 focus:ring-blue-600 focus:outline-none" 
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
                        <input type="text" id="email" name="email" className="h-[50px] rounded-[10px] bg-[#E8EAEF] pl-[15px] pr-[15px] focus:ring-2 focus:ring-blue-600 focus:outline-none" 
                        value={email} onChange={(event) => setEmail(event.target.value)}/>
                    </div>
                    <div className="flex flex-col w-[48%] ">
                        <label htmlFor="cin" className="text-[20px] font-maven-pro font-bold mb-[11px]">CIN</label>
                        <input type="text" id="cin" name="cin" className="h-[50px] rounded-[10px] bg-[#E8EAEF] pl-[15px] pr-[15px] focus:ring-2 focus:ring-blue-600 focus:outline-none" 
                        value={cin} onChange={(event) => setCin(event.target.value)}/>
                    </div>
                </div>
                <div className="flex flex-row justify-center mt-[20px] w-full gap-5">
                    <button className="text-lg text-[#4874ED] font-normal rounded-lg h-16 w-64 border border-blue-600 font-comfortaa hover:opacity-75" onClick={() => navigate("/adherents")}>
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
