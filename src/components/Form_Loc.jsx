import React, { useState } from 'react';

const Form = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    City: '',
    pinCode: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the form data based on the input field that triggered the change
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement form submission logic here, such as sending data to a server
    console.log('Form data submitted:', formData);
  };

  return (
    // Form container with media query for responsive design
    <form onSubmit={handleSubmit} className="md:flex md:flex-wrap md:justify-center">
      <style>
        {`
          @media (min-width: 768px) {
            .narrow-input {
              width: calc(50% - 8px); /* 50% width with some spacing */
            }
            .small-font {
              font-size: 2rem; /* Half of the default font size */
            }
            .center-input {
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
            }
            .submit-button {
              width: calc(50% - 8px); /* Match input field width */
              font-size: 2rem; /* Match input field font size */
              margin-top: 10px; /* Add 10 pixels of margin-top */
            }
          }
        `}
      </style>
      {/* Input field for State */}
      <div className="mb-4 w-full center-input">
        <label className="block text-sm font-medium text-gray-700">Name:</label>
        <label className="block text-sm font-medium text-stroke-light">State:</label>
        <input
          type="text"
          name="State"
          value={formData.state}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md w-full narrow-input small-font"
          required
        />
      </div>
      {/* Input field for City */}
      <div className="mb-4 w-full center-input">
        <label className="block text-sm font-medium text-gray-700">City:</label>
        <input
          type="text"
          name="City"
          value={formData.city}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md w-full narrow-input small-font"
          required
        />
      </div>
      {/* Input field for Pin Code */}
      <div className="mb-4 w-full center-input">
        <label className="block text-sm font-medium text-gray-700">Pin Code:</label>
        <input
          type="text"
          name="pinCode"
          value={formData.pinCode}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md w-full narrow-input small-font"
          required
        />
      </div>
       {/* Dropdown for Find Nearest within */}
       <div className="mb-4 w-full center-input">
        <label className="block text-sm font-medium text-stroke-light">Find Nearest within:</label>
        <select
          name="radius"
          value={formData.radius}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-md w-full narrow-input small-font"
        >
          <option value="15km">15km</option>
          <option value="30km">30km</option>
          <option value="45km">45km</option>
          <option value="50km">50km</option>
          <option value="None">None</option>
        </select>
      </div>
      {/* Submit button */}
      <button
        type="submit"
        className="bg-primary text-white px-4 py-3 rounded-md hover:bg-secondary w-full submit-button"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
