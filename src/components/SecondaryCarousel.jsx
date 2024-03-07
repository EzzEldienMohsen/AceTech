/* eslint-disable react/prop-types */

import React from 'react';
import './autoplaycarousel.css';
const SecondaryCarousel = ({ component }) => {
  const hide = component.length === 0;
  const auto = React.useRef(null);
  auto.current = false;

  return (
    <div
      id="sample"
      className={`carousel-container h-48 lg:h-80 ${
        hide ? 'hidden' : 'carousel'
      } xs:${(auto.current = true)} sm:${(auto.current = true)}  md:${(auto.current = true)} lg:${(auto.current = true)} my-5 md:ml-16 w-4/5 lg:w-4/5 ml-0 lg:ml-0 p-4 lg:carousel-center md:w-[86vw] space-x-8 border-2 border-accent rounded-box overflow-hidden`}
    >
      <div className="carousel-track">
        <div className="flex carousel-card">
          {component.map((product) => (
            <img
              className="w-full h-full object-cover mr-2 transition-opacity duration-500 ease-in-out"
              key={product.id}
              src={product.img}
              alt="image"
            />
          ))}
        </div>
        <div className="flex carousel-card">
          {component.map((product) => (
            <img
              className="w-full h-full object-cover mr-2 transition-opacity duration-500 ease-in-out"
              key={product.id}
              src={product.img}
              alt="image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondaryCarousel;
