// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';

const Contact = ({ name, phone, email, photo }) => {
    return (
        <div className='contact'>
            <div className='foto'>
                <img src={photo} alt={name} />
            </div>
            <div className='data'>
                <h2>{name}</h2>
                <h3>{phone}</h3>
                <h4>{email}</h4>
            </div>
        </div>
    )
}

export default Contact;