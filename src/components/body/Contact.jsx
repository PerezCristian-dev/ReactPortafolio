import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { SubmitedMessage } from "../SubmitedMessage";

export const Contact = ({ reference }) => {

  const [submited, setSubmited] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };


  const newform = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rx6yp75', 'template_quptqrp', newform.current, 'j1aIwyxn4IGORSgLX')
      .then((result) => {

        if(result.text === "OK"){
          setSubmited(true);
        }
          console.log(result.text);

      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div
      ref={reference}
      className="flex flex-col  justify-around bg-project  p-4 xl:p-28 text-white items-center"
    >
      <h2 className="uppercase font-bold text-emerald-500 text-xl xl:text-3xl py-4 xl:h-auto">
        Contact Me
      </h2>
      <div className="xl:flex justify-center items-center p-4">
        {!submited?
        <form ref={newform} action="submit" onSubmit={sendEmail} className="flex flex-col w-[100%]">
          <label htmlFor="name">Your Name</label>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            className="text-sm text-emerald-700 px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-emerald-500 xl:mb-4"
          />
          <label htmlFor="email">Your Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="text-sm text-emerald-700 px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-emerald-500 xl:mb-4"
          />
          <label htmlFor="fullname">Your Message</label>
          <textarea
            placeholder="Type your message here..."
            name="message"
            type="text"
            value={form.message}
            onChange={handleChange}
            rows="10"
            className="h-24 xl:h-[40%] text-sm text-emerald-700 px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-emerald-500 xl:mb-4"
          />
          <button
            type="submit"
            className="w-full flex justify-center bg-emerald-500 my-4 hover:bg-emerald-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500"
          >
            Send Message
          </button>
        </form>
        : <SubmitedMessage />}
        <img
          src="../Portafolio BG-Image.png"
          alt="Logo"
          className="h-[100%] xl:w-[60%]"
        />
      </div>
    </div>
  );
};
