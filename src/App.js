import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { UserProvider } from './contex/user.context';
import HomePage from './routes/HomePage';
import AdherentPage from './routes/AdherentPage';
import AddAdherentPage from './routes/AddAdherentPage';
import LivrePage from './routes/LivrePage';
import { useParams } from 'react-router-dom';
import Login from './routes/Login';
import AddBookPage from './routes/AddBookPage';
import AddAuteurPage from './routes/AddAuteurPage';
import Book from './routes/Book';
import AddLoanPage from './routes/addLoanPage';
import LoanPage from './routes/LoanPage';
import Auteur from './routes/Auteur';
import useUserContext from './contex/useUserContex';


function App() {

  const { currentUser, setCurrentUser } = useUserContext();


  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/add/auteur" element={<AddAuteurPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/adherents">
            <Route index element={<AdherentPage />} />
            <Route path="add" element={<AddAdherentPage />} />
          </Route>
          <Route path='/prets'>
            <Route index element={<LoanPage />} />
            <Route path="add" element={<AddLoanPage />} />
          </Route>
          <Route path="/livre">
            <Route index element={<LivrePage />} />
            <Route path="add" element={<AddBookPage />} />
            <Route path="book/:bookId/:auteurId" element={<Book />} />
            <Route path="auteur/:auteurId" element={<Auteur />} />
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  );
}


export default App;
