import React, { useState, useEffect } from "react";
import img from "../assets/user.png";

const UserForm = ({ onSubmit, userToEdit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");

  useEffect(() => {
    if (userToEdit) {
      setName(userToEdit.name);
      setEmail(userToEdit.email);
      setDob(userToEdit.dob);
    } else {
      setName("");
      setEmail("");
      setDob("");
    }
  }, [userToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, dob });
    if (!userToEdit) {
      setName("");
      setEmail("");
      setDob("");
    }
  };

  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
      <div className="bg-white flex items-center justify-center rounded-2xl shadow-2xl shadow-black p-6">
        <img src={img} className="h-auto max-w-full" alt="User" />
      </div>
      <div className="bg-white rounded-2xl shadow-2xl shadow-black p-6">
        <form onSubmit={handleSubmit} className="w-full">
          <h2 className="text-3xl md:text-4xl bg-neutral-900 p-4 rounded-2xl underline text-center font-bebas mb-6 text-white">
            {userToEdit ? "Update User" : "User Information"}
          </h2>
          <div className="mb-4">
            <label className="block text-gray-600 text-lg md:text-xl font-medium mb-2 font-source-sans">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 md:p-3 font-source-sans border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-lg md:text-xl font-medium mb-2 font-source-sans">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 md:p-3 font-source-sans border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600 text-lg md:text-xl font-medium mb-2 font-source-sans">
              Date of Birth
            </label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full p-2 md:p-3 font-source-sans border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 md:py-3 text-white bg-blue-500 hover:bg-blue-600 rounded font-semibold text-base md:text-lg transition duration-200 ease-in-out font-source-sans"
          >
            {userToEdit ? "Update" : "Add"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
