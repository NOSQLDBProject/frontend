import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import HomePage from './routes/HomePage';
import AdherentPage from './routes/AdherentPage';
import AddAdherentPage from './routes/AddAdherentPage';
import LivrePage from './routes/LivrePage';
import { useParams } from 'react-router-dom';
import Login from './routes/Login';
import LoanPage from './routes/LoanPage';
import AddBookPage from './routes/AddBookPage';
import AddLoanPage from './routes/addLoanPage';


function App() {

  const [sidebarVisible, setSidebarVisible] = useState(true);


  const params = useParams();

  console.log(params);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/adherents">
          <Route index element={<AdherentPage />} />
          <Route path="add" element={<AddAdherentPage />} />
        </Route>

        <Route path='/loans' >
          <Route index element={<LoanPage />} />
          <Route path="add" element={<AddLoanPage />} />
        </Route>

        <Route path="/livre">
          <Route index element={<LivrePage />} />
          <Route path="add" element={<AddBookPage />} />
        </Route>
      </Routes>
    </Router>
  );
}


export default App;
