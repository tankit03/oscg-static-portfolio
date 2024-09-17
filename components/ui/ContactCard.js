'use client'; // Mark this component as a client-side component
import { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS

export default function ContactCard() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS template params
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    // Sending email using EmailJS
    emailjs
      .send(
        'service_a4ivl0l', // Replace with your actual EmailJS service ID
        'template_j1bxaja', // Replace with your actual EmailJS template ID
        templateParams,
        'oqaOPHqFzWdeyIGJu' // Replace with your actual EmailJS user ID
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent successfully!');
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert(
          'There was an issue sending your message. Please try again later.'
        );
      });

    // Clear the form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-card text-card-foreground rounded-lg shadow-lg">
      <h2 className="text-2xl font-satoshiBold mb-6 text-left text-primary">
        Get in Touch
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex space-x-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-1/2 px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-1/2 px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
            required
          />
        </div>
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows="4"
            className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-primary text-primary-foreground font-satoshiBold px-6 py-2 rounded-md hover:bg-primaryOrange hover:scale-110 transition-transform transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-ring"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
