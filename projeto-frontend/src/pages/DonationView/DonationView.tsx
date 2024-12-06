import React from 'react';
import { Link } from 'react-router-dom'; 
import './DonationView.css';

const donations = [
  { id: '1', title: 'Roupas de inverno', location: 'Criciúma - SC', image: '/images/roupas.png' },
  { id: '2', title: 'Cesta básica', location: 'Criciúma - SC', image: '/images/cestabasica.png' },
  { id: '3', title: 'Brinquedos', location: 'Criciúma - SC', image: '/images/brinquedos.png' },
  { id: '4', title: 'Livros', location: 'Içara - SC', image: '/images/livros.jpg' },
  { id: '5', title: 'Roupas infantis', location: 'Içara - SC', image: '/images/roupainfantil.png' },
  { id: '6', title: 'Sofá', location: 'Içara - SC', image: '/images/sofa.jpg' },
];

const Donations: React.FC = () => {
  return (
    <div className="donations-container">
      <h2>DOAÇÕES DISPONÍVEIS</h2>
      <div className="donations-grid">
        {donations.map((donation) => (
          <div key={donation.id} className="donation-item">
            <Link to={`/ItemDetails/${donation.id}`}> {/* Link para a página de detalhes do item */}
              <img src={donation.image} alt={donation.title} />
            </Link>
            <h3>{donation.title}</h3>
            <p>{donation.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Donations;
