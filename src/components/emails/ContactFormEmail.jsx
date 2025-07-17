import React from 'react';

const ContactFormEmail = ({ name, email, message }) => (
  <div>
    <h1>Nuevo mensaje de contacto</h1>
    <p><strong>Nombre:</strong> {name}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Mensaje:</strong></p>
    <p>{message}</p>
  </div>
);

export default ContactFormEmail;
