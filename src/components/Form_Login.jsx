import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    passwd: '',
    username: '', // Initialize the radius with the default value
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can implement form submission logic here, such as sending data to a server
    try {
      // Send a POST request with the form data
      const response = await axios.post('/login', formData); // Replace '/your-api-endpoint' with your actual API endpoint
      console.log('Form data submitted:', formData);
      console.log('Server response:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
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
      {/* Dropdown for Device Type */}
      <div className="mb-4 w-full center-input">
        <label className="block text-sm font-medium text-stroke-light">Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="ring-2 hover:ring-highlight p-2 rounded-md w-full narrow-input small-font "
          required
        />
      </div>
      {/* Input field for passwd */}
      <div className="mb-4 w-full center-input">
        <label className="block text-sm font-medium text-stroke-light">Password:</label>
        <input
          type="text"
          name="passwd"
          value={formData.passwd}
          onChange={handleChange}
          className="ring-2 hover:ring-highlight p-2 rounded-md w-full narrow-input small-font "
          required
        />
      </div>
      
      
      {/* Submit button */}
      <button
        type="submit" className='w-28 uppercase transition-all duration-500 border-white text-stroke-light border-b-4 ring-1 ring-secondary hover:border-0 hover:bg-secondary hover:text-stroke-dark px-3 py-2 rounded-md text-sm font-medium '
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
// className="bg-primary text-white px-4 py-3 rounded-md hover:bg-secondary w-full submit-button"