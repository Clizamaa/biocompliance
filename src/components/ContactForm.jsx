'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Enviando...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('¡Mensaje enviado con éxito!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus(`Error: ${result.error || 'No se pudo enviar el mensaje.'}`);
      }
    } catch (error) {
      setStatus('Error: Hubo un problema al conectar con el servidor.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slateGray-700 mb-1">Nombre Completo</label>
          <Input id="name" type="text" value={formData.name} onChange={handleChange} className="w-full" placeholder="Tu nombre" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slateGray-700 mb-1">Correo Electrónico</label>
          <Input id="email" type="email" value={formData.email} onChange={handleChange} className="w-full" placeholder="tu@email.com" required />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-slateGray-700 mb-1">Asunto</label>
        <Input id="subject" type="text" value={formData.subject} onChange={handleChange} className="w-full" placeholder="¿Cómo podemos ayudarte?" required />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slateGray-700 mb-1">Mensaje</label>
        <Textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full"
          placeholder="Cuéntanos más sobre tu proyecto"
          required
        />
      </div>
      <div>
        <Button type="submit" className="w-full bg-robinEggBlue-300 hover:bg-robinEggBlue-400 transition-colors" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
        </Button>
      </div>
      {status && <p className="text-center text-sm mt-4">{status}</p>}
    </form>
  );
};

export default ContactForm;
