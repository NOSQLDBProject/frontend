import '../components/Table.css'
import React, { useState, useEffect } from 'react';
import search from '../assets/search.svg';
import delet from '../assets/delete.svg';
import edit from '../assets/edit.svg';

export default function Table() {
  const [data, setData] = useState([]);

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
        })
        .catch(error => {
            console.error('Error fetching adherents:', error);
        });
    };

  }, []);

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
                  <button className="btn btn-outline-success" type="submit" routerLink="/ai">Add Subscriber</button>
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
            <th>Age</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="tableBody">
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.cin}</td>
              <td>{item.age}</td>
              <td>{item.phoneNumber}</td>
              <td>
                <img className="actm" src={delet} alt="delete" />
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