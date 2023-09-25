import React, { useEffect, useState } from 'react';
import Form from '../components/Form_Loc'; // Import the Form component

// const containerStyle = {
//   width: '740px',
//   height: '400px'
// };

const center = {
  lat: -3.745,
  lng: -38.523
};

function MyComponent() {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (window.Microsoft) { // Check if Microsoft object is defined
      const mapOptions = {
        credentials: 'Au4NdWQQLnW3pjS4TSqCnmXGGl8i66jrUZvavdnBbtNGZLqCywVaDM4RxxoFRiT9', // Replace with your Bing Maps API key
        center: new window.Microsoft.Maps.Location(center.lat, center.lng),
        zoom: 10,
      };

      const map = new window.Microsoft.Maps.Map(document.getElementById('map'), mapOptions);

      setMap(map);
    }
  }, []);

  return (
    <div id="map" ></div>
  );
}

const Locate = () => {
  const [bingMapsLoaded, setBingMapsLoaded] = useState(false);

  useEffect(() => {
    // Load Bing Maps script dynamically
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.bing.com/api/maps/mapcontrol?callback=initializeBingMaps';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    // Define a global callback function for the Bing Maps script
    window.initializeBingMaps = () => {
      setBingMapsLoaded(true);
    };
  }, []);

  // height setting criteria
  const navbarHeight = 80; // 80px
  const largestDivHeight = `calc(100vh - ${navbarHeight}px)`;

  const [isMobile, setIsMobile] = useState(false)
 
//choose the screen size 
const handleResize = () => {
  if (window.innerWidth < 720) {
      setIsMobile(true)
  } else {
      setIsMobile(false)
  }
}

// create an event listener
useEffect(() => {
  window.addEventListener("resize", handleResize)
})

  return (
    <div className='bg-secondary text-stroke-dark ' style={{ height: !isMobile ? largestDivHeight : '100%' }} >
      <div className="flex flex-col md:flex-row items-center justify-center ">
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
              {bingMapsLoaded && <Form />} {/* Render the Form component here when Bing Maps is loaded */}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="rounded-lg bg-tertiary p-1 w-11/12 md:w-1/2 h-96 my-2">
          {bingMapsLoaded && <MyComponent />} 
          {/* Render MyComponent when Bing Maps is loaded */}

          {/* Additional content can go here */}
        </div>
      </div>
    </div>
  );
};

export default Locate;
