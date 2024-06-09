import React, { useState } from "react";
import SharedPage from "./SharedPage";
import { useNavigate } from "react-router-dom";

export default function AddLoanPage() {
    const [bookTitle, setBookTitle] = useState("");
    const [borrower, setBorrower] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const loan = {
            bookTitle: bookTitle,
            borrower: borrower,
            // Loan date and return date will be managed automatically
        };

        fetch('http://localhost:8000/loans/add', {
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
            // Clear form
            setBookTitle("");
            setBorrower("");
            setErrorMessage("");
            navigate("/loans");
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
        <SharedPage path="/loans/add">
            <form className="flex flex-col w-full m-20 items-center" onSubmit={handleSubmit}>
                <div className="flex flex-row justify-between m-10 w-[90%] ">
                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="bookTitle" className="text-[20px] font-bold mb-4 font-maven-pro">Book Title</label>
                        <input
                            type="text"
                            id="bookTitle"
                            name="bookTitle"
                            className="h-12 rounded-[10px] bg-[#E8EAEF] pl-[15px] pr-[15px] focus:ring-2 focus:ring-blue-600 focus:outline-none"
                            value={bookTitle}
                            onChange={(event) => setBookTitle(event.target.value)}
                        />
                    </div>
                    <div className="flex flex-col w-[48%]">
                        <label htmlFor="borrower" className="text-[20px] font-bold mb-4 font-maven-pro">Borrower</label>
                        <input
                            type="text"
                            id="borrower"
                            name="borrower"
                            className="h-12 rounded-[10px] bg-[#E8EAEF] pl-[15px] pr-[15px] focus:ring-2 focus:ring-blue-600 focus:outline-none"
                            value={borrower}
                            onChange={(event) => setBorrower(event.target.value)}
                        />
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
