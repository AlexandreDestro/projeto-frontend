/*function ItemDetails(){
    return(
        <>
            <p>ItemDetails</p>
        </>
    );
}

export default ItemDetails;*/

import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails: React.FC = () => {
  const { id } = useParams(); // Obtém o ID do item da URL

  const donationDetails = {
    1: { title: 'Roupas de inverno', description: 'Descrição detalhada de roupas de inverno' },
    2: { title: 'Cesta básica', description: 'Descrição detalhada de cesta básica' },
    3: { title: 'Brinquedos', description: 'Descrição detalhada de brinquedos' },
    4: { title: 'Livros', description: 'Descrição detalhada de livros' },
    5: { title: 'Roupas infantis', description: 'Descrição detalhada de roupas infantis' },
    6: { title: 'Sofá', description: 'Descrição detalhada do sofá' },
  };

  const item = donationDetails[id];

  return (
    <div>
      <h1>{item?.title}</h1>
      <p>{item?.description}</p>
    </div>
  );
};

export default ItemDetails;
