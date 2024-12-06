
import React from 'react';
import './Dashboard.css';

const Dashboard: React.FC = () => {


  return (
    <div className="dashboard-container">
      <div className="text-section">
        <h1>Doações transformam o mundo</h1>
        <p>Faça parte e ajude a tornar o mundo um lugar melhor.</p>
      </div>
      <div className="image-section">
        <img 
          src="https://i2.wp.com/classeasaude.com.br/wp-content/uploads/2020/03/shutterstock_645682759.jpg?fit=1920%2C1080&ssl=1" 
          alt="Donation" 
          className="donation-image"
        />
      </div>
    </div>
  );
};

export default Dashboard;

