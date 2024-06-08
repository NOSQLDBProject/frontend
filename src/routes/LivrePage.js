import React, { useState, useEffect } from "react";
import SharedPage from "./SharedPage";
import './LivrePage.css';
import blury from '../assets/blurybooks.png';

export default function LivrePage() {

    const [personalDevBooks, setPersonalDevBooks] = useState([]);
    const [actionBooks, setActionBooks] = useState([]);
    const [fictionBooks, setFictionBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const PersonalDevelopementBooksList = [
                { title: 'Atomic Habits', thumbnail: 'https://booksondemand.ma/cdn/shop/products/Atomichabits-min.jpg?v=1631701304&width=990' },
                { title: 'Psychology of Money', thumbnail: 'https://booksondemand.ma/cdn/shop/products/81Lb75rUhLL_1.jpg?v=1631701531&width=990' },
                { title: '48 Laws of Power', thumbnail: 'https://booksondemand.ma/cdn/shop/products/71951W96oWL.jpg?v=1631701478&width=990' },
                { title: 'Ikigai', thumbnail: 'https://booksondemand.ma/cdn/shop/products/IKIGAI1.jpg?v=1609449282&width=990' },
                { title: 'The Compound Effect', thumbnail: 'https://booksondemand.ma/cdn/shop/files/71nAPgrH3aL._AC_UF1000_1000_QL80.jpg?v=1702835701&width=990' },
                { title: 'The Subtle Art', thumbnail: 'https://booksondemand.ma/cdn/shop/products/subtleart.jpg?v=1631701540&width=990' },
                { title: 'Rich Dad Poor Dad', thumbnail: 'https://booksondemand.ma/cdn/shop/products/RichDad_PoorDadbyRobertT.Kiyosaki-books.jpg?v=1609441318&width=990' },
                { title: 'Coming soon !', thumbnail: require('../assets/soon1.png') },
            ];

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

            setPersonalDevBooks(PersonalDevelopementBooksList);
            setActionBooks(ActionBooksList);
            setFictionBooks(FictionBooksList);
        };

        fetchBooks();
    }, []);

    return (
        <SharedPage path="/livre">
            <div className="p-10 max-h-screen overflow-y-auto">
            <p className="title">Books</p>
    <p className="description">Books transport us to new worlds, offering thrilling, humorous, and insightful experiences. With countless titles and genres, there's always an adventure waiting. Explore our catalog and discover your next great read.</p>
                <p className="slider-title">Personal Development</p>
                <div className="scroll-wrapper">
                    <div className="movies-container">
                        {personalDevBooks.map((book, index) => (
                            <div className="movie" key={index}>
                                <div>
                                    <div className="movie-thumbnail">
                                        <a>
                                            <img className="image" src={book.thumbnail} alt={book.thumbnail} />
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
            <p class="footer-title">There’s even more to watch.</p>
            
            
            <p class="footer-description">Emiflix has an extensive library of feature films, documentaries, TV shows, anime,
                award-winning Emiflix originals, and
                more. Watch as much as you want, anytime you want.</p>
                    <button class="footer-button">JOIN NOW</button>


        </div>
    </div>
            </div>
        </SharedPage>
    );
}
