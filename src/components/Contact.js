// src/components/Contact.js
import React,{useRef} from 'react';
import Fade from 'react-reveal/Fade';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form  = useRef();
  const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_vbylhw2', 'template_6aagxuw', form.current, {
        publicKey: 'WWxMuBG_3e0KwBxmj',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }
  return (
    <Fade>
    <section id="contact" className="p-8 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
        <form ref = {form} className="max-w-xl mx-auto space-y-6" onSubmit={sendEmail}>
          <div>
            <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="from_name"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="from_email"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
            <textarea
              id="message"
              rows="4"
              name="message"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-green-500 text-white font-bold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              value="Send">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
    </Fade>
  );
};

export default Contact;
