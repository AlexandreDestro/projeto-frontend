import React, { useState } from "react";
import "./DonationRegistration.css"; // Arquivo de estilo

function DonationRegistration() {
  const [formData, setFormData] = useState({
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.image) {
      const formDataObject = new FormData();
      formDataObject.append("name", formData.name);
      formDataObject.append("description", formData.description);
      formDataObject.append("category", formData.category);
      formDataObject.append("location", formData.location);
      formDataObject.append("image", formData.image);

      // Simulação de envio ao backend
      console.log("Doação cadastrada com:", {
        name: formData.name,
        description: formData.description,
        category: formData.category,
        location: formData.location,
        image: formData.image.name,
      });
    } else {
      alert("Por favor, anexe uma imagem!");
      return;
    }

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
