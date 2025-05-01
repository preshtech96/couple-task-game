import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    yourName: "",
    partnerName: "",
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleContinue = (e) => {
    e.preventDefault();
    console.log("User Info:", formData);
    navigate(`/Gameinstrution?yourName=${formData.yourName}&partnerName=${formData.partnerName}`);
 
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-2xl mt-10">
        <h1 className="text-pink-600 font-extrabold">Welcome to PreshTech task game for fun!!! enjoy now</h1>
      <h2 className="text-2xl font-bold mb-6 text-center">Get Started</h2>
      <form onSubmit={handleContinue} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Your Name</label>
          <input
            type="text"
            name="yourName"
            value={formData.yourName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Partner Name</label>
          <input
            type="text"
            name="partnerName"
            value={formData.partnerName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-xl cursor-pointer hover:bg-gray-800 transition"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default SignUp;
