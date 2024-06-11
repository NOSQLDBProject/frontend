import React, { useState, useEffect } from "react";
import SharedPage from "./SharedPage";
import './LivrePage.css';
import blury from '../assets/blurybooks.png';
import { useNavigate } from "react-router-dom";

export default function LivrePage() {

    const [personalDevBooks, setPersonalDevBooks] = useState([]);
    const [actionBooks, setActionBooks] = useState([]);
    const [fictionBooks, setFictionBooks] = useState([]);
    const [auteur,setAuteur] = useState([])
    const navigate = useNavigate();

    useEffect(() => {

        const fetchBooks = async () => {

            fetch('http://localhost:8000/auteurs/all')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setAuteur(data); 
                console.log('Books:', data);
                console.log('Books:', auteur);
            })
            .catch(error => {
                console.error('Error fetching books:', error);
            });
            
            fetch('http://localhost:8000/livres/neo4j/all')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                data.push({ titre: 'Coming soon !', imagePath: require('../assets/soon1.png') });
                setPersonalDevBooks(data); 
                console.log('Books:', data);
                console.log('Books:', personalDevBooks);
            })
            .catch(error => {
                console.error('Error fetching books:', error);
            });

            

            const ActionBooksList = [
                { title: 'Dance of Thieves', thumbnail: 'https://booksondemand.ma/cdn/shop/products/71Ts78osPkL.jpg?v=1631701342&width=990' },
                { title: 'The Hunger Games', thumbnail: 'https://booksondemand.ma/cdn/shop/products/61JfGcL2ljL.jpg?v=1631701508&width=990' },
                { title: 'Paper Towns', thumbnail: 'https://booksondemand.ma/cdn/shop/products/81WBJQUEFsL.jpg?v=1631701443&width=990' },
                { title: 'Inferno', thumbnail: 'https://booksondemand.ma/cdn/shop/products/91Bx8Fqx1pL.jpg?v=1631701386&width=990' },
                { title: 'The Island', thumbnail: 'https://booksondemand.ma/cdn/shop/products/71ZdwYYsduL.jpg?v=1673306275&width=990' },
                { title: 'The Assassin\'s Blade', thumbnail: 'https://booksondemand.ma/cdn/shop/products/81KTUX7JTcL-min.jpg?v=1654795661&width=990' },
                { title: 'The Name of the Wind', thumbnail: 'https://booksondemand.ma/cdn/shop/products/91b8oNwaV1L.jpg?v=1631701522&width=990' },
                { title: 'Coming soon !', thumbnail: require('../assets/soon2.png') },
                
            ];

            const FictionBooksList = [
                { title: 'A Little Life', thumbnail: 'https://booksondemand.ma/cdn/shop/products/915wDWUexBL.jpg?v=1631701261&width=990' },
                { title: 'The Alchemist', thumbnail: 'https://booksondemand.ma/cdn/shop/products/81ioPZFMeUL-min.jpg?v=1631701482&width=990' },
                { title: '1984', thumbnail: 'https://booksondemand.ma/cdn/shop/products/1_dc7d5ded-eff3-48dd-b8a9-14ea9d25104d.jpg?v=1668004764&width=990' },
                { title: 'The Silent Patient', thumbnail: 'https://booksondemand.ma/cdn/shop/products/silentpatient.jpg?v=1631701539&width=990' },
                { title: 'Berserk volume 1', thumbnail: 'https://booksondemand.ma/cdn/shop/products/91oSUA0bSuL-min.jpg?v=1631701314&width=990' },
                { title: 'Crime and Punishment', thumbnail: 'https://booksondemand.ma/cdn/shop/products/crime-min.jpg?v=1609442879&width=990' },
                { title: 'The Love Hypothesis', thumbnail: 'https://booksondemand.ma/cdn/shop/products/71G3v1m2CtS-min.jpg?v=1632156753&width=990' },
                { title: 'Coming soon !', thumbnail: require('../assets/soon3.png') },
            ];

            setPersonalDevBooks(personalDevBooks);
            setActionBooks(ActionBooksList);
            setFictionBooks(FictionBooksList);
        };

        fetchBooks();
    }, []);

    const handleDetails = (book) => {
        navigate(`/livre/book/${book.id}/${book.auteurId}`);
    }

    

    return (
        <SharedPage path="/livre">
            <div className="p-10 h-full w-full">
            <p className="title flex">
                Books
                <button className="ml-auto w-[100px] h-[30px] bg-[#1578DA] text-white text-[12px] font-maven-pro rounded-[15px]" onClick={() => {navigate("/livre/add")}}>Add Book</button>
            </p>
    <p className="description text-black">Books transport us to new worlds, offering thrilling, humorous, and insightful experiences. With countless titles and genres, there's always an adventure waiting. Explore our catalog and discover your next great read.</p>
                <p className="slider-title">Personal Development</p>
                <div className="scroll-wrapper">
                    <div className="movies-container">
                        {personalDevBooks.map((book, index) => (
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

                <p className="slider-title">Action & Adventure</p>
                <div className="scroll-wrapper">
                    <div className="movies-container">
                        {actionBooks.map((book, index) => (
                            <div className="movie" key={index}>
                                <div>
                                    <div className="movie-thumbnail">
                                        <a>
                                            <img className="image" src={book.thumbnail} alt={book.title} />
                                        </a>
                                    </div>
                                    <div className="movie-title">
                                        <p className="movie-title-content">{book.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <p className="slider-title">Fiction</p>
                <div className="scroll-wrapper">
                    <div className="movies-container">
                        {fictionBooks.map((book, index) => (
                            <div className="movie" key={index}>
                                <div>
                                    <div className="movie-thumbnail">
                                        <a>
                                            <img className="image" src={book.thumbnail} alt={book.title} />
                                        </a>
                                    </div>
                                    <div className="movie-title">
                                        <p className="movie-title-content">{book.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <img class="blur" src={blury} alt=""></img>

                <div class="footer">
        

        <div class="button-container">
            <p class="footer-title">There’s even more to read.</p>
            
            
            <p class="footer-description">LibraConnect has an extensive library of books across various genres, including fiction, non-fiction, biographies, self-help, and award-winning titles. Read as much as you want, anytime you want.</p>
                    <button class="footer-button">JOIN NOW</button>


        </div>
        <div className="h-10 w-full">

        </div>
    </div>
            </div>
        </SharedPage>
    );
}
