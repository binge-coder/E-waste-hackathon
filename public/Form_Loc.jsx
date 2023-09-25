import React, { useState } from 'react';

const Form = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    state: '',
    city: '',
    pinCode: '',
    radius: '15km', // Initialize the radius with the default value
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
        <label className="block text-sm font-medium text-stroke-light">State:</label>
        <input
          type="text"
          name="state" 
          value={formData.state}
          onChange={handleChange}
          className="ring-2 hover:ring-highlight p-2 rounded-md w-full narrow-input small-font "
          required
        />
      </div>
      {/* Input field for City */}
      <div className="mb-4 w-full center-input">
        <label className="block text-sm font-medium text-stroke-light">City:</label>
        <input
          type="text"
          name="city" 
          value={formData.city}
          onChange={handleChange}
          className="ring-2 hover:ring-highlight p-2 rounded-md w-full narrow-input small-font "
          required
        />
      </div>
      {/* Input field for Pin Code */}
      <div className="mb-4 w-full center-input">
        <label className="block text-sm font-medium text-stroke-light">Pin Code:</label>
        <input
          type="text"
          name="pinCode"
          value={formData.pinCode}
          onChange={handleChange}
          className="ring-2 hover:ring-highlight p-2 rounded-md w-full narrow-input small-font "
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
          className="ring-2 hover:ring-highlight p-2 rounded-md w-full narrow-input small-font "
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
        type="submit" className='w-28 uppercase transition-all duration-500 border-white text-stroke-light border-b-4 ring-1 ring-secondary hover:border-0 hover:bg-secondary hover:text-stroke-dark px-3 py-2 rounded-md text-sm font-medium '
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
