import '../components/Table.css'
import React, { useState, useEffect } from 'react';
import search from '../assets/search.svg';
import delet from '../assets/delete.svg';
import edit from '../assets/edit.svg';
import { useNavigate } from 'react-router-dom';

export default function Table() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch('http://localhost:8000/adherents/all')
        .then(response => {

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Adherents:', data);
            setData(data);
        })
        .catch(error => {
            console.error('Error fetching adherents:', error);
        });
  }, []);

  const deleteAdherent = (id) => {
    fetch(`http://localhost:8000/adherents/${id}`, {
        method: 'DELETE',
        mode: 'cors',
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log('Adherent deleted successfully');
        const newData = data.filter(item => item.id !== id);
        setData(newData);
    })
    .catch(error => {
        console.error('Error deleting adherent:', error);
    });
}

  return (
    <div>
      <div className="bare">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      </div>
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <div className="left">
              <h2></h2>
            </div>
            <div className="right">
              <form className="d-flex">
                <div className="search-bar">
                  <img className="active-search" src={search} alt="search" />
                  <input className="form-control me-4" name="searchQuery" type="search" placeholder="Search Subscriber" aria-label="Search" />
                  <input className="form-control me-4" name="searchDate" type="date" placeholder="Search by date" aria-label="Search by date" />
                  <button className="btn btn-outline-success" type="search">Search</button>
                  <button className="btn btn-outline-success" onClick={()=>{navigate("/adherents/add")}} >Add Subscriber</button>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <table id="personalInfoTable">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>CIN</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Loaned Book</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="tableBody">
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.nom}</td>
              <td>{item.prenom}</td>
              <td>{item.cin}</td>
              <td>{item.email}</td>
              <td>{item.telephone}</td>
              <td></td>
              <td>
                <img className="actm" onClick={() => deleteAdherent(item.id)} src={delet} alt="delete" />
                <img className="actp" src={edit} alt="edit" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-controls">
        <button className="pagination-button">Previous</button>
        <span></span>
        <button className="pagination-button">Next</button>
      </div>
    </div>
  );
}