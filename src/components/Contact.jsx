import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_wzxcjze',
        'template_4728mjc',
        form.current,
        'DpmIZwVSWUnOsfq0j'
      )
      .then(
        () => {
          alert('✅ Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('❌ Failed to send message. Please try again later.');
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="py-16 px-4 bg-[#1a1a1a] ">
      <h2 className="text-3xl text-white font-bold ml-[21rem] -mt-4">Let’s Build Something Great Together!</h2>
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-4xl p-6 md:p-10 flex flex-col md:flex-row gap-10 mt-8">
        {/* Left Side - Contact Info */}
        <div className="md:w-1/2 space-y-6">
          
          <p className="text-gray-600">I am always ready to help you at any time, let’s talk together.</p>

          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-2xl text-black mt-1" />
            <div>
              <h4 className="font-semibold">Contact With Me</h4>
              <p className="text-gray-600">Cell Number: +92 320-1002502</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-2xl text-black mt-1" />
            <div>
              <h4 className="font-semibold">Located</h4>
              <p className="text-gray-600">Lahore, Pakistan</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaEnvelope className="text-2xl text-black mt-1" />
            <div>
              <h4 className="font-semibold">Email Address</h4>
              <p className="text-gray-600">anas.siddiqui7707@gmail.com</p>
            </div>
          </div>

         
        </div>

        {/* Right Side - Form */}
        <form ref={form} onSubmit={sendEmail} className="md:w-1/2 space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              name="name"
              placeholder="*Full Name"
              required
              className="w-1/2 border border-gray-300 px-4 py-2 rounded outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="*Email Address"
              required
              className="w-1/2 border border-gray-300 px-4 py-2 rounded outline-none"
            />
          </div>
          <input
            type="tel"
            name="phone"
            placeholder="*Phone Number"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded outline-none"
          />
          <textarea
            name="message"
            placeholder="Message...."
            rows="5"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded outline-none"
          />
          <button
            type="submit"
            className="bg-black text-white px-8 py-2 rounded-md hover:bg-gray-800 transition-all cursor-pointer"
          >
            Submit Require →
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
