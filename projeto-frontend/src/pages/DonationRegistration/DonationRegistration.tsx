import React, { useState } from "react";
import "./DonationRegistration.css"; // Arquivo de estilo

interface donation  {
 name: string,
 description: string,
 category: string,
 location: string,
 image: string | ArrayBuffer | null
}

function DonationRegistration() {
  const [formData, setFormData] = useState<donation>({
    name: "",
    description: "",
    category: "",
    location: "",
    image: null, // Armazena a imagem
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prevData) => ({
          ...prevData,
          image: reader.result, // Agora é compatível com o tipo definido
        }));
      };
      reader.readAsDataURL(file); // Converte o arquivo em uma URL de dados
    }
  };
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const { name, description, category, location, image } = formData;
    if (!name || !description || !category || !location || !image) {
      alert("Por favor, preencha todos os campos antes de enviar!");
      return;
    }
  
    const existingDonations = JSON.parse(localStorage.getItem("donations") || "[]");
    const newDonation = {
      name,
      description,
      category,
      location,
      image, // Salva a URL de dados da imagem
    };
  
    localStorage.setItem("donations", JSON.stringify([...existingDonations, newDonation]));
  
    alert("Doação cadastrada com sucesso!");
    setFormData({
      name: "",
      description: "",
      category: "",
      location: "",
      image: null,
    });
  };
  


  return (
    <div className="register-donation-container">
      <h1 className="title">REGISTRO DE DOAÇÕES</h1>
      <form onSubmit={handleSubmit} className="donation-form">
        <div className="form-group">
          <label htmlFor="name">Nome do Item:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ex: Cesta básica"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Descrição: </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Detalhes sobre o item"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="category">Categoria: </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Selecione uma categoria
            </option>
            <option value="alimentos">Alimentos</option>
            <option value="roupas">Roupas</option>
            <option value="moveis">Móveis</option>
            <option value="outros">Outros</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="location">Localização: </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Cidade ou endereço"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Imagem do Item: </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Cadastrar Doação
        </button>
      </form>
    </div>
  );
}

export default DonationRegistration;
