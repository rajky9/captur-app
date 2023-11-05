"use client"
import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="contact" className="max-w-[800px] mx-auto py-8 mb-16">
      <h2 className="text-center font-bold text-2xl py-8">
        Contact me If you interest in.
      </h2>
      <form className="mx-2" onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-2 gap-2">
          <input
            className="p-3 border shadow-lg rounded-md"
            type="text"
            placeholder="Name"
          />

          <input
            className="p-3 border shadow-lg rounded-md"
            type="email"
            placeholder="Email"
          />
        </div>
        <input
          className="w-full p-3 my-2 border shadow-lg rounded-md"
          type="text"
          placeholder="Subject"
        />
        <textarea
          className="w-full my-2 border shadow-lg rounded-md p-3"
          placeholder="Message"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button className="w-full p-3 bg-gray-900 active:scale-[0.99] hover:bg-gray-800 duration-100 ease-out  text-white rounded-md shadow-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
