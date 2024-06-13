import React, { useEffect, useState } from "react";
import SharedPage from "./SharedPage";
import { useNavigate } from "react-router-dom";

export default function AddLoanPage() {
    const [livreId, setLivreId] = useState();
    const [adherentId, setAdherentId] = useState();
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const [bookTitle, setBookTitle] = useState([]);
    const [borrower, setBorrower] = useState([]);

    const [books, setBooks] = useState([]);
    const [adherents, setAdherents] = useState([]);


    useEffect(() => {
        fetch(`http://10.72.177.197:8000/livres/mongo/all`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Books:', data);
                setBooks(data);
                setLivreId(data[0].id);
            })
            .catch(error => {
                console.error('Error fetching books:', error);
            });

        // Fetch adherents
        fetch(`http://10.72.177.197:8000/adherents/all`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Adherents:', data);
                setAdherents(data); 
                setAdherentId(data[0].id);
            })
            .catch(error => {
                console.error('Error fetching adherents:', error);
            });
    }, []);

    function getRandomNumber() {
        const min = 100000000;
        const max = 999999999;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const loan = {
            id: getRandomNumber(),
            livreId: livreId,
            adherentId: adherentId,
        };

        fetch(`http://10.72.177.197:8000/loans/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loan)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Loan added:', data);
                setBookTitle("");
                setBorrower("");
                setErrorMessage("");
                navigate("/prets");
            })
            .catch(error => {
                console.error('Error:', error);
                if (errorMessage === "No copies available") {
                    setErrorMessage("There are no copies available.");
                } else {
                    setErrorMessage("An error occurred while adding the loan. Please try again.");
                }
            });
    };

    return (
        <SharedPage path="/prets/add">
            <form className="flex flex-col w-full m-20 items-center" onSubmit={handleSubmit}>
                <div className="flex flex-row justify-between m-10 w-[90%] ">
                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="bookTitle" className="text-[20px] font-bold mb-4 font-maven-pro">Book Title</label>
                        <select value={livreId} onChange={(event) => setLivreId(event.target.value)} className="h-[50px] rounded-[10px] bg-[#E8EAEF] pl-[15px] pr-[15px] focus:ring-2 focus:ring-blue-600 focus:outline-none">
                            {books.map((book) => (
                                <option key={book?.id} value={book?.id}>
                                    {book.titre}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="borrower" className="text-[20px] font-bold mb-4 font-maven-pro">Borrower</label>
                        <select value={adherentId} onChange={(event) => setAdherentId(event.target.value)} className="h-[50px] rounded-[10px] bg-[#E8EAEF] pl-[15px] pr-[15px] focus:ring-2 focus:ring-blue-600 focus:outline-none">
                            {adherents.map((adherent) => (
                                <option key={adherent?.id} value={adherent?.id}>
                                    {adherent.nom}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="flex justify-center mt-4">
                    <button className="text-lg text-white bg-[#4874ED] font-normal rounded-lg h-16 w-64 border border-white font-comfortaa hover:opacity-75" type="submit">Add Loan</button>
                </div>

                {errorMessage && <p className="text-red-500 text-m p-5 mt-2">{errorMessage}</p>}
            </form>
        </SharedPage>
    );
}
