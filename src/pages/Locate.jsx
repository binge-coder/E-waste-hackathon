import React, { useLayoutEffect, useEffect, useState } from 'react';
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
 
  const handleResize = () => {
    setIsMobile(window.innerWidth < 720);
  };

  useLayoutEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.bing.com/api/maps/mapcontrol?callback=initializeBingMaps';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    window.initializeBingMaps = () => {
      setBingMapsLoaded(true);
    };

    // Set initial value of isMobile and add an event listener for window resize
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className='bg-secondary md:flex md:items:center text-stroke-dark ' style={{ height: !isMobile ? largestDivHeight : '100%' }} >
      <div className="flex flex-col md:flex-row items-center justify-center p-3 ">
        {/* Left Section */}
        <div className="flex-1 text-center md:text-6xl lg:text-8xl leading-normal mb-4 md:mb-0 p-2">
          <div className="flex flex-col h-full justify-center bg-primary rounded-xl py-6 px-3 ring-2 ring-highlight">
            <div >
              <p className="text-4xl md:text-5xl text-stroke-heading pb-6">
                Locate <br/> Nearest Facility</p>
            </div>
            {/* Bottom two-thirds for the Form component */}
            <div>
              <Form />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="rounded-lg bg-tertiary p-2 w-11/12 md:w-1/2 h-[574px] my-2">
          {bingMapsLoaded && <MyComponent />} 
          {/* Render MyComponent when Bing Maps is loaded */}

          {/* Additional content can go here */}
        </div>
      </div>
    </div>
  );
};

export default Locate;
