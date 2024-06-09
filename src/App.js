import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './routes/HomePage';
import AdherentPage from './routes/AdherentPage';
import AddAdherentPage from './routes/AddAdherentPage';
import LivrePage from './routes/LivrePage';
import { useParams } from 'react-router-dom';
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import AddBookPage from './routes/AddBookPage';
import AddAuteurPage from './routes/AddAuteurPage';
import Book from './routes/Book';

function App() {


  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" render={() => (<Redirect to="/home" />)} /> */}
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<SignUp/>} />
        <Route path="/add/auteur" element={<AddAuteurPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/adherents">
          <Route index element={<AdherentPage/>} />
          <Route path="add" element={<AddAdherentPage/>} />
        </Route>
        <Route path='/loans' >
          <Route index element={<LoanPage />} />
          <Route path="add" element={<AddLoanPage />} />
        </Route>
        <Route path="/livre">
          <Route index element={<LivrePage/>} />
          <Route path="add" element={<AddBookPage/>} />
          <Route path="book/:bookId/:auteurId" element={<Book/>} />
        </Route>
      </Routes>
    </Router>
  );
}


export default App;
