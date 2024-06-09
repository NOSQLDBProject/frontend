import '../components/Table.css';
import React, { useState, useEffect } from 'react';
import search from '../assets/search.svg';
import delet from '../assets/delete.svg';
import edit from '../assets/edit.svg';
import check from '../assets/check.svg';
import { useNavigate } from 'react-router-dom';

export default function Table({ type }) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8000/${type}/all`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log(`${type}:`, data);
        setData(data);
      })
      .catch(error => {
        console.error(`Error fetching ${type}:`, error);
      });
  }, [type]);

  const deleteItem = (id) => {
    fetch(`http://localhost:8000/${type}/${id}`, {
      method: 'DELETE',
      mode: 'cors',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log(`${type.charAt(0).toUpperCase() + type.slice(1)} deleted successfully`);
        const newData = data.filter(item => item.id !== id);
        setData(newData);
      })
      .catch(error => {
        console.error(`Error deleting ${type}:`, error);
      });
  };

  return (
    <div>
      <div className="bare">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </div>
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <div className="left">
              <h2>{type.charAt(0).toUpperCase() + type.slice(1)}</h2>
            </div>
            <div className="right">
              <form className="d-flex">
                <div className="search-bar">
                  <img className="active-search" src={search} alt="search" />
                  <input className="form-control me-4" name="searchQuery" type="search" placeholder={`Search ${type}`} aria-label="Search" />
                  <input className="form-control me-4" name="searchDate" type="date" placeholder="Search by date" aria-label="Search by date" />
                  <button className="btn btn-outline-success" type="search">Search</button>
                  <button className="btn btn-outline-success" onClick={() => { navigate(`/${type}/add`) }} >Add {type.charAt(0).toUpperCase() + type.slice(1)}</button>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <table id="personalInfoTable">
        <thead>
          <tr>
            {type === 'adherents' ? (
              <>
                <th>First Name</th>
                <th>Last Name</th>
                <th>CIN</th>
                <th>Email</th>
                <th>Phone Number</th>
              </>
            ) : (
              <>
                <th>Book Title</th>
                <th>Borrower</th>
                <th>Loan Date</th>
                <th>Return Date</th>
              </>
            )}
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="tableBody">
          {data.map((item, index) => (
            <tr key={index}>
              {type === 'adherents' ? (
                <>
                  <td>{item.nom}</td>
                  <td>{item.prenom}</td>
                  <td>{item.cin}</td>
                  <td>{item.email}</td>
                  <td>{item.telephone}</td>
                  <td>
                    <img className="actm" onClick={() => deleteItem(item.id)} src={delet} alt="delete" />
                    <img className="actp" src={edit} alt="edit" />
                  </td>
                </>
              ) : (
                <>
                  <td>{item.bookTitle}</td>
                  <td>{item.borrower}</td>
                  <td>{item.loanDate}</td>
                  <td>{item.returnDate}</td>
                  <td>
                    <img className="actm"  src={check} alt="check" />
                  </td>
                </>
              )}
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
