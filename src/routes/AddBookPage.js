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
    const [auteur, setAuteur] = useState();
    const [description, setDescription] = useState("");
    
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
                setAuteur(newOptionsList[0].value);
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
        event.preventDefault();
          console.log("Titre:", titre);
            console.log("ISBN:", isbn);
            console.log("nbCopy:", nbCopy);
            console.log("imagePath:", imagePath);
            console.log("type:", type);
            console.log("auteur:", auteur);
            const bookMongo = {
                id:getRandomNumber(),
                titre: titre,
                isbn: isbn,
                nbCopy: nbCopy,
                imagePath: imagePath,
                type: type,
                estDisponible:true,
                description: description
            };
            const bookneo4j = {
                titre: titre,
                isbn: isbn,
                type: type,
                imagePath: imagePath,
                auteurId: auteur,
                description: description
            }

            fetch('http://localhost:8000/livres/mongo/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
                body: JSON.stringify(bookMongo)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Book added:', data);
            })
            .catch(error => console.error('Error:', error));

            fetch('http://localhost:8000/livres/neo4j', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
                body: JSON.stringify(bookneo4j)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Book added:', data);
            })
            .catch(error => console.error('Error:', error));

        //   navigate("/livre")
        };


    return (
        <SharedPage path="/livre/add">
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
                <div className="flex flex-row justify-between w-[90%] mt-[30px]">
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
                <div className="flex flex-row justify-between w-[90%]  mt-[30px]">
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
                <div className="flex flex-row justify-between w-[90%]  mt-[20px]">
                    <div className="flex flex-col  w-[100%] ">
                        <label htmlFor="description" className="text-[20px] font-maven-pro font-bold mb-[11px]">Description</label>
                        <input type="text" id="description" name="description" className="h-[50px] rounded-[10px] bg-[#E8EAEF] pl-[15px] pr-[15px] focus:ring-2 focus:ring-blue-600 focus:outline-none" 
                        value={description} onChange={(event) => setDescription(event.target.value)}/>
                    </div>
                    </div>
                
                <div className="flex flex-row justify-center mt-[20px] w-full gap-5">
                    <button className="text-lg text-[#4874ED] font-normal rounded-lg h-16 w-64 border border-blue-600 font-comfortaa hover:opacity-75" onClick={() => navigate("/livre")}>
                        Back
                    </button>
                    <button className="text-lg text-white bg-[#4874ED] font-normal rounded-lg h-16 w-64 border border-white font-comfortaa hover:opacity-75" type="submit">
                        Add
                    </button>
                </div>
            </form>
            <button className="w-[100px] h-[30px] text-white text-[12px] font-maven-pro bg-[#1578DA] ml-auto mr-auto rounded-[10px]" onClick={() => {navigate("/add/auteur")}}>Add Author</button>

        </SharedPage>
    );
}
