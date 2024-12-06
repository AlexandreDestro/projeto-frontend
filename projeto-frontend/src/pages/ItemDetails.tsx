import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails: React.FC = () => {
  const { donationId } = useParams<{ donationId: string }>(); // Garante que donationId é uma string

  const existingDonations = JSON.parse(localStorage.getItem("donations") || "[]");

  // Verifica se donationId existe e converte para número
  const itemIndex = donationId ? parseInt(donationId, 10) : NaN;


  // Verifica se itemIndex é válido e acessa o item
  const item = !isNaN(itemIndex) ? existingDonations[itemIndex] : null;

  if (!item) {
    return <p>Doação não encontrada!</p>;
  }

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>{item.location}</p>
      <img src={item.image} alt={item.name} />
    </div>
  );
};

export default ItemDetails;
