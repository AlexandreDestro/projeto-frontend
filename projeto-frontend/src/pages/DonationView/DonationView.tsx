import React from 'react';
import { Link } from 'react-router-dom'; 
import './DonationView.css';



const Donations: React.FC = () => {

  // Pega todas as doacões do localstorage
  const donations = JSON.parse(localStorage.getItem("donations") || "[]");
  console.log("DOACOES", donations)

  return (
    <div className="donations-container">
      <h2>DOAÇÕES DISPONÍVEIS</h2>
      <div className="donations-grid">
        {donations.map((donation, index) => ( // Usando o Index como ID
          <div key={index} className="donation-item">
            <Link to={`/ItemDetails/${index}`}>
              <img src={donation.image} alt={donation.name} />
            </Link>
            <h3>{donation.name}</h3>
            <p>{donation.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Donations;
