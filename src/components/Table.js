import '../components/Table.css';
import React, { useState, useEffect } from 'react';
import search from '../assets/search.svg';
import delet from '../assets/delete.svg';
import edit from '../assets/edit.svg';
import check from '../assets/check.png';
import { useNavigate } from 'react-router-dom';

export default function Table({ type }) {
  const [data1, setData] = useState([]);


  const navigate = useNavigate();

  const [listBooks, setListBooks] = useState([]);
  const [listAdherents, setListAdherents] = useState([]);

  const [updated, setUpdated] = useState(false);





  useEffect(() => {
    (async () => {
      const response = await fetch(`http://10.72.177.197:8000/${type}/all`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(`${type}:`, data);



      if (type === 'loans') {

        const updatedData = [];

        for (let item of data) {
          console.log("item", item)
          const book = await fetchBook(item.livreId);
          console.log("book1231234", book)
          const adherent = await fetchAdherent(item.adherentId);

          const updatedItem = {
            ...item,
            bookTitle: book.titre,
            borrower: `${adherent.prenom} ${adherent.nom}`,
          };

          updatedData.push(updatedItem);

          setListBooks(prevBooks => [...prevBooks, book]);
          setListAdherents(prevAdherents => [...prevAdherents, adherent]);

          console.log("updatedItem", updatedItem);
        }

        setData(updatedData);
        console.log("data1", data1);
      }
      else {
        setData(data);
      }
    })().catch(error => {
      console.error(`Error fetching ${type}:`, error);
    });
  }, [type, updated]);


  const fetchBook = async (id) => {
    return fetch(`http://10.72.177.197:8000/livres/mongo/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Books:', data);
        return data;
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }

  const fetchAdherent = async (id) => {
    return fetch(`http://10.72.177.197:8000/adherents/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Adherents:', data);
        return data;
      })
      .catch(error => {
        console.error('Error fetching adherents:', error);
      });
  }

  const updateLoan = (id) => {

    fetch(`http://10.72.177.197:8000/loans/update/${id}`, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log(`${type.charAt(0).toUpperCase() + type.slice(1)} updated successfully`);
        fetchData();
      })
      .catch(error => {
        console.error(`Error updating ${type}:`, error);
      });
  };

  const fetchData = async () => {
    setUpdated(!updated);
    setUpdated(!updated);
  };


  const deleteItem = (id, adherent) => {
    if (adherent.livreLoaned == []) {
      if (window.confirm("Are you sure you want to delete this adherent?")) {
        fetch(`http://10.72.177.197:8000/${type}/${id}`, {
          method: 'DELETE',
          mode: 'cors',
        })
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
  
            console.log(`${type.charAt(0).toUpperCase() + type.slice(1)} deleted successfully`);
            const newData = data1.filter(item => item.id !== id);
            setData(newData);
          })
          .catch(error => {
            console.error(`Error deleting ${type}:`, error);
          });
      }
    }
    else {
      alert(`You can't delete this adherent because he has borrowed books`)
    }
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
                <button className="btn btn-outline-success" onClick={() => { }} type="search">Search</button>
                <button className="btn btn-outline-success" onClick={() => { if (type != "loans") { navigate(`/${type}/add`) } else { navigate("/prets/add") } }} >Add {type.charAt(0).toUpperCase() + type.slice(1)}</button>
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
        {data1.map((item, index) => (
          <tr key={index}>
            {type === 'adherents' ? (
              <>
                <td>{item.nom}</td>
                <td>{item.prenom}</td>
                <td>{item.cin}</td>
                <td>{item.email}</td>
                <td>{item.telephone}</td>
                <td>
                  <img className="actm" onClick={() => deleteItem(item.id, item)} src={delet} alt="delete" />
                  <img className="actp" src={edit} alt="edit" />
                </td>
              </>
            ) : (
              <>
                <td>{item.bookTitle}</td>

                <td>{item.borrower}</td>
                <td>{item.loandate}</td>
                <td className={item.returnDate ? "text-green-600 font-bold p-2" : "text-red-500 italic font-bold p-2"}>
                  {item.returnDate ? item.returnDate : "Not yet returned"}
                </td>
                <td>
                  {!item.returnDate && <img className="actm" src={check} alt="check" onClick={() => { updateLoan(item.id) }} />}
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
