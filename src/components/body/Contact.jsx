import React, { useState } from "react";

export const Contact = ({ reference }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div
      ref={reference}
      className="flex flex-col  justify-around bg-project  p-4 md:p-28 text-white items-center"
    >
      <h2 className="uppercase font-bold text-emerald-500 text-xl md:text-3xl py-4 md:h-auto">
        Contact Me
      </h2>
      <div className="md:flex justify-center p-4">
        <form action="" className="flex flex-col w-[100%]">
          <label htmlFor="name">Your Name</label>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            className="text-sm text-emerald-700 px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-emerald-500"
          />
          <label htmlFor="email">Your Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="text-sm text-emerald-700 px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-emerald-500"
          />
          <label htmlFor="fullname">Your Message</label>
          <textarea
            placeholder="Type your message here..."
            name="message"
            type="text"
            value={form.message}
            onChange={handleChange}
            rows="10"
            className="text-sm text-emerald-700 px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-emerald-500"
          />
          <button
            type="submit"
            className="w-full flex justify-center bg-emerald-500 my-4 hover:bg-emerald-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500"
          >
            Send Message
          </button>
        </form>
        <img
          src="../Portafolio BG-Image.png"
          alt="Logo"
          className="h-[100%] md:w-[60%]"
        />
      </div>
    </div>
  );
};
