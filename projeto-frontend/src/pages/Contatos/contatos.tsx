import React from 'react';
import './Contatos.css';

const contacts = [
  {
    name: 'Alexandre Destro',
    image: 'https://avatars.githubusercontent.com/u/167926082?v=4',
    link: 'https://github.com/AlexandreDestro',
  },
  {
    name: 'Bianca Alves',
    image: 'https://avatars.githubusercontent.com/u/163940302?v=4',
    link: 'https://github.com/bianca-satc',
  },
  {
    name: 'Pedro Lucas',
    image: 'https://avatars.githubusercontent.com/u/107317759?v=4',
    link: 'https://github.com/Pedro-Luucas',
  },
  {
    name: 'William Mesquita',
    image: 'https://avatars.githubusercontent.com/u/107135388?v=4',
    link: 'https://github.com/AmonAmarth2003',
  },
];

const ContactPageMinimal: React.FC = () => {
    return (
      <div className="contact-page-minimal">
        <h1 className="title">Contatos</h1>
        <div className="contact-list">
          {contacts.map((contact, index) => (
            <div
              className="contact-card-link"
              key={index}
              onClick={() => window.open(contact.link, '_blank')}
              role="button"
              tabIndex={0}
            >
              <div className="contact-card">
                <img src={contact.image} alt={contact.name} className="contact-image" />
                <h2>{contact.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  
  export default ContactPageMinimal;
  