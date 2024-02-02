'use client';

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // EmailJS service parameters
    const serviceId = 'service_xig2r9g'; // Your EmailJS service ID
    const templateId = 'template_whk4jdg';
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message
    };
    const publicKey = 'kkYNXQRrZkQTw_tOV'; // Your EmailJS public key


    try {
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      if (response.status === 200) {
        console.log('Email sent successfully');
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Additional success handling
      } else {
        console.error('Email sending failed');
        // Additional error handling
      }
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div>
      <h2 className="text-3xl text-customWhite font-semibold">Want to get in touch?</h2>
      <p className="text-xl text-mediumGray mt-4 mb-8">Let's build something amazing together.</p>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input 
            className="bg-darkGray border-shadowGray border text-customWhite py-3 px-4 rounded-md focus:border-focus focus:border focus:outline-none focus:ring-0" 
            placeholder="Your Name" 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
          />
          <input 
            className="bg-darkGray border-shadowGray border text-customWhite py-3 px-4 rounded-md focus:border-focus focus:border focus:outline-none focus:ring-0" 
            placeholder="Your Email" 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
        </div>
        <textarea 
          className="bg-darkGray border-shadowGray border text-customWhite py-3 px-4 mb-4 w-full rounded-md focus:border-focus focus:border focus:outline-none focus:ring-0" 
          placeholder="Your Message" 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
        ></textarea>
        <input 
          className="bg-darkGray border-shadowGray border text-customWhite py-3 px-4 mb-8 w-full rounded-md focus:border-focus focus:border focus:outline-none focus:ring-0" 
          placeholder="Your Subject" 
          type="text" 
          name="subject" 
          value={formData.subject} 
          onChange={handleChange} 
        />
           <button type="submit" className="bg-customWhite text-darkGray py-3 px-6 flex justify-center items-center w-full rounded-md">
          <PlaneIcon className="mr-2 text-darkGray" />
          Send Me an Email
        </button>
      </form>
    </div>
  );
}

function PlaneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  )
}
