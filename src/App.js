import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import HomePage from './routes/HomePage';
import AdherentPage from './routes/AdherentPage';
import AddAdherentPage from './routes/AddAdherentPage';
import LivrePage from './routes/LivrePage';
import { useParams } from 'react-router-dom';
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import LoanPage from './routes/LoanPage';

function App() {

  const [sidebarVisible, setSidebarVisible] = useState(true);


  const params = useParams();

  console.log(params);

  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" render={() => (<Redirect to="/home" />)} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />

        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/adherents">
          <Route index element={<AdherentPage />} />
          <Route path="add" element={<AddAdherentPage />} />
        </Route>
        <Route path="/livre" element={<LivrePage />} />

        <Route path='/loan' element={<LoanPage />} />
      </Routes>
    </Router>
  );
}


export default App;
