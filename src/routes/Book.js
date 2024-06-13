import React, { useEffect , useState } from 'react';
import SharedPage from './SharedPage';
import { useNavigate, useParams } from 'react-router-dom';

export default function Book() {

    const { bookId, auteurId } = useParams();

    const [book, setBook] = useState();
    const [auteur, setAuteur] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        console.log('Book ID:', bookId);
        console.log('Auteur ID:', auteurId);
        
        fetch(`http://10.72.177.197:8000/auteurs/id/${auteurId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Auteur:', data);
                setAuteur(data);
            })
            .catch(error => {
                console.error('Error fetching auteur:', error);
            });

        fetch(`http://10.72.177.197:8000/livres/neo4j/${bookId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Book:', data);
                setBook(data);
            })
            .catch(error => {
                console.error('Error fetching book:', error);
            });
    }, [bookId, auteurId]);

    return (
        <SharedPage path="/livre">
            <div className='w-full h-full flex p-6'>
                <img src={book?.imagePath} alt={book?.titre} className=' h-full object-cover' />
                <div className='inline'>
                    <h1 className='text-[#1578DA] font-maven-pro text-[36px] font-bold ml-2'>
                        {book?.titre} <span className='font-normal text-[18px]'>({book?.type})</span>
                    </h1>
                    <h2 className='text-black font-maven-pro text-[24px] font-black ml-2 mt-4' >
                        <span className='cursor-pointer hover:text-[#1578DA]' 
                        onClick={() => {navigate(`/livre/auteur/${auteurId}`)}}>{auteur?.name}</span> 
                        <span className='font-thin font-comfortaa'>({auteur?.dateOfBirth}-{auteur?.dateOfDeath})</span>
                    </h2>
                    <p className='font-maven-pro text-[18px] text-black font-black ml-2 mt-4'>Isbn : <span className='font-comfortaa text-[14px] font-thin'>{book?.isbn}</span></p>
                    <p className='font-maven-pro text-[18px] text-black font-black ml-2 mt-4'>Description :</p>
                    <div className='font-comfortaa text-[14px] text-black font-thin ml-2 w-[95%] text-justify mt-2'>{book?.description}</div>

                </div>
            </div>
        </SharedPage>
    );
}