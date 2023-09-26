import React from 'react'
import { useState, useEffect } from 'react';
import Form from '../components/Form_Calc'; // Import the Form component
import RandomFactoid from '../components/Factoid'; // Import the Factoid component
import x from "../assets/Slider.jpg"
import Table from '../components/Table_Calc'; // Import the Table component

const Credit_Calc = () => {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    // Show the popup when the component mounts
    setShowPopup(true);
  }, []);
  return (
    <div className='bg-secondary text-stroke-dark min-h-screen'> {/* Change h-screen to min-h-screen */}
      <div className="flex flex-col md:flex-row items-center justify-center p-2 md:p-8">
        {/* Left Section */}
        <div className="flex-1 text-center md:text-6xl lg:text-8xl leading-normal mb-4 md:mb-0 p-8 ">
          <div className="flex flex-col h-full justify-center bg-primary rounded-xl py-6 px-2 ">
            {/* Top one-third for text */}
            <div className="h-1/3 ">
              <p className="text-4xl md:text-5xl text-stroke-heading">
                Credit <br></br>Calculator</p>
            </div>
            {/* Add 20 pixels of space */}
            <div style={{ height: '50px' }}></div>
            {/* Bottom two-thirds for the Form component */}
            <div className="h-2/3 ">
              <Form /> {/* Render the Form component here */}
            </div>
          </div>
        </div>
        {showPopup && <RandomFactoid />}
        {/* Right Section */}
        <div className="flex-1 text-center md:text-6xl lg:text-8xl leading-normal mb-4 md:mb-0 p-8 ">
          <div className="flex flex-col h-full justify-center bg-primary rounded-xl py-6 px-2 ">
            {/* Top one-third for text */}
            <div className="h-1/3 ">
              <p className="text-4xl md:text-5xl text-stroke-heading">
                Composition <br></br>Table</p>
            </div>
            {/* Add 20 pixels of space */}
            <div style={{ height: '50px' }}></div>
            {/* Bottom two-thirds for the Form component */}
            <div className="h-2/3 ">
              <Table /> {/* Render the Form component here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Credit_Calc