import { useState ,useEffect} from "react";
import SharedPage from "./SharedPage";
import { useNavigate, useParams } from "react-router-dom";
import './LivrePage.css';


export default function Auteur() {

    const {auteurId } = useParams();

    const [books, setBooks] = useState();
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [auteur, setAuteur] = useState();

    const navigate = useNavigate();

    useEffect(() => {
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
    
        fetch(`http://10.72.177.197:8000/livres/neo4j/all`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Books:', data);
                const filtered = data.filter(book => String(book.auteurId) === String(auteurId));
                setFilteredBooks(filtered);
                console.log('Books1:', filtered);
                console.log('Books2:', filteredBooks);
            })
            .catch(error => {
                console.error('Error fetching book:', error);
            });
    }, [auteurId]);

    const handleDetails = (book) => {
        navigate(`/livre/book/${book.id}/${book.auteurId}`);
    }


    return(
        <SharedPage path="/livre">
            <div className='w-full h-full inline p-6'>
                <h1 className='text-[#1578DA] font-maven-pro text-[36px] font-bold ml-2'>
                    {auteur?.name} <span className='font-normal text-[18px]'>({auteur?.dateOfBirth}-{auteur?.dateOfDeath})</span>
                </h1>
                <div className="font-roboto text-[16px] font-normal ml-4">
                    {auteur?.biography}
                </div>
                <div className="scroll-wrapper mt-4">
                    <div className="movies-container">
                        {filteredBooks.map((book, index) => (
                            <div className="movie" key={index} onClick={() => {handleDetails(book)}}>
                                <div>
                                    <div className="movie-thumbnail">
                                        <a>
                                            <img className="image" src={book.imagePath} alt={book.imagePath} />
                                        </a>
                                    </div>
                                    <div className="movie-title">
                                        <p className="movie-title-content">{book.titre}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
        </SharedPage>
    );
}