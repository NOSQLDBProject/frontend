import '../components/Table.css'
import React, { useState, useEffect } from 'react';
import search from '../assets/search.svg';
import delet from '../assets/delete.svg';
import edit from '../assets/edit.svg';

export default function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Replace with actual data fetching logic
    const fetchData = async () => {
      // Simulating data fetching
      const mockData = [
        { firstName: 'John', lastName: 'Doe', cin: '123456', age: 28, phoneNumber: '123-456-7890' },
        { firstName: 'Jane', lastName: 'Smith', cin: '654321', age: 34, phoneNumber: '987-654-3210' },
        { firstName: 'John', lastName: 'Doe', cin: '123456', age: 28, phoneNumber: '123-456-7890' },
        { firstName: 'Jane', lastName: 'Smith', cin: '654321', age: 34, phoneNumber: '987-654-3210' },
        { firstName: 'John', lastName: 'Doe', cin: '123456', age: 28, phoneNumber: '123-456-7890' },
        { firstName: 'Jane', lastName: 'Smith', cin: '654321', age: 34, phoneNumber: '987-654-3210' },
        { firstName: 'John', lastName: 'Doe', cin: '123456', age: 28, phoneNumber: '123-456-7890' },
        { firstName: 'Jane', lastName: 'Smith', cin: '654321', age: 34, phoneNumber: '987-654-3210' },
        { firstName: 'John', lastName: 'Doe', cin: '123456', age: 28, phoneNumber: '123-456-7890' },
        { firstName: 'Jane', lastName: 'Smith', cin: '654321', age: 34, phoneNumber: '987-654-3210' },
        { firstName: 'John', lastName: 'Doe', cin: '123456', age: 28, phoneNumber: '123-456-7890' },
        { firstName: 'Jane', lastName: 'Smith', cin: '654321', age: 34, phoneNumber: '987-654-3210' },
        { firstName: 'John', lastName: 'Doe', cin: '123456', age: 28, phoneNumber: '123-456-7890' },
        { firstName: 'Jane', lastName: 'Smith', cin: '654321', age: 34, phoneNumber: '987-654-3210' },
        // Add more data as needed
      ];
      setData(mockData);
    };

    fetchData();
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
