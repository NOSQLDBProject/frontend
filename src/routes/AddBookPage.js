import React, { useEffect, useRef, useState } from "react";
import SharedPage from "./SharedPage";
import { useNavigate } from "react-router-dom";

export default function AddBookPage() {
    const navigate = useNavigate();
    const [titre, setTitre] = useState("");
    const [isbn, setIsbn] = useState("");
    const [nbCopy, setNbCopy] = useState("");
    const [imagePath, setImagePath] = useState("");
    const [type, setType] = useState("");
    const [auteur, setAuteur] = useState("");
    const [book1, setBook] = useState({
        id:"",
        titre: '',
        isbn: '',
        nbCopy: '',
        imagePath: '',
        type:""
      });
    const [optionsList, setOptionsList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/auteurs/all')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Auteurs:', data);
                const newOptionsList = data.map((auteur) => ({ value: auteur.id, name: auteur.name }));
                setOptionsList(newOptionsList);
                console.log('Options:', newOptionsList);
            })
            .catch(error => {
                console.error('Error fetching auteurs:', error);
            });
    }, []);

    function getRandomNumber() {
        const min = 100000000;
        const max = 999999999;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleSubmit = (event) => {
        
          navigate("/livre")
        };


    return (
        <SharedPage path="/adherents/add">
            <form className="flex flex-col w-full m-auto items-center " onSubmit={handleSubmit}>
                <div className="flex flex-row justify-between w-[90%] ">
                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="titre" className="text-[20px] font-maven-pro font-bold mb-[11px]">Title</label>
                        <input type="text" id="titre" name="titre" className="h-[50px] rounded-[10px] bg-[#E8EAEF] pl-[15px] pr-[15px] focus:ring-2 focus:ring-blue-600 focus:outline-none" 
                        value={titre} onChange={(event) => setTitre(event.target.value)}/>
                    </div>
                    <div className="flex flex-col  w-[48%] ">
                        <label htmlFor="isbn" className="text-[20px] font-maven-pro font-bold mb-[11px]">ISBN</label>
                        <input type="text" id="isbn" name="isbn" className="h-[50px] rounded-[10px] bg-[#E8EAEF] pl-[15px] pr-[15px] focus:ring-2 focus:ring-blue-600 focus:outline-none" 
                        value={isbn} onChange={(event) => setIsbn(event.target.value)}/>
                    </div>
                </div>
                <div className="flex flex-row justify-between w-[90%] mt-[40px]">
                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="nbCopy" className="text-[20px] font-maven-pro font-bold mb-[11px]">Copies Number</label>
                        <input type="text" id="nbCopy" name="nbCopy" className="h-[50px] rounded-[10px] bg-[#E8EAEF] pl-[15px] pr-[15px] focus:ring-2 focus:ring-blue-600 focus:outline-none" 
                        value={nbCopy} onChange={(event) => setNbCopy(event.target.value)}/>
                    </div>
                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="imagePath" className="text-[20px] font-maven-pro font-bold mb-[11px]">Image Path</label>
                        <input type="text" id="imagePath" name="imagePath" className="h-[50px] rounded-[10px] bg-[#E8EAEF] pl-[15px] pr-[15px] focus:ring-2 focus:ring-blue-600 focus:outline-none" 
                        value={imagePath} onChange={(event) => setImagePath(event.target.value)}/>
                    </div>
                </div>
                <div className="flex flex-row justify-between w-[90%]  mt-[40px]">
                    <div className="flex flex-col  w-[48%] ">
                        <label htmlFor="type" className="text-[20px] font-maven-pro font-bold mb-[11px]">Type</label>
                        <input type="text" id="type" name="type" className="h-[50px] rounded-[10px] bg-[#E8EAEF] pl-[15px] pr-[15px] focus:ring-2 focus:ring-blue-600 focus:outline-none" 
                        value={type} onChange={(event) => setType(event.target.value)}/>
                    </div>
                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="auteur" className="text-[20px] font-maven-pro font-bold mb-[11px]">Author</label>
                        <select id="auteur" name="auteur" className="h-[50px] rounded-[10px] bg-[#E8EAEF] pl-[15px] pr-[15px] focus:ring-2 focus:ring-blue-600 focus:outline-none" 
                        value={auteur} onChange={(event) => setAuteur(event.target.value)}>
                            {optionsList.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.name}
                                </option>
                            ))}
                        </select>
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
