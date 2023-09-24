import React from 'react'
import Form from '../components/Form_Calc'; // Import the Form component

const Credit_Calc = () => {
  return (
    <div className='bg-secondary text-stroke-dark min-h-screen'> {/* Change h-screen to min-h-screen */}
      <div className="flex flex-col md:flex-row items-center justify-center p-2 md:p-8">
        {/* Left Section */}
        <div className="flex-1 text-center md:text-6xl lg:text-8xl leading-normal mb-4 md:mb-0 p-8 ">
          <div className="flex flex-col h-full justify-center bg-primary rounded-xl py-6 px-2 ">
            {/* Top one-third for text */}
            <div className="h-1/3 ">
              <p className="text-4xl md:text-5xl text-stroke-heading">
                Locate <br></br> Nearest Facility</p>
            </div>
            {/* Add 20 pixels of space */}
            <div style={{ height: '50px' }}></div>
            {/* Bottom two-thirds for the Form component */}
            <div className="h-2/3 ">
              <Form /> {/* Render the Form component here */}
            </div>
          </div>
        </div>
        
        {/* Right Section */}
        <div className="flex-1 flex flex-col items-center justify-center bg-gray-200 rounded-lg p-4 md:max-w-3xl">
          <div className="w-full h-full">
            {/* Image */}
            <img
              src="https://media.istockphoto.com/id/1193323373/vector/a-colorful-trendy-card-design-vector-illustration.jpg?s=2048x2048&w=is&k=20&c=GIXth_77-RX3EPEGzVMo7P3LL64w8y_-xBtoHNRiBHY="
              alt="Random"
              className="w-full h-full object-cover rounded-lg mb-4"
            />
          </div>
          {/* Additional content can go here */}
        </div>
      </div>
    </div>
  );
}

export default Credit_Calc