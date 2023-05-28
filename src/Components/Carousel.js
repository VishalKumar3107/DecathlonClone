import React, { useState } from 'react'
import "../allCss/Carousel.css"

function Carousel({images}) {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
      };
      
      const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
      };
      
  
    return (
      <div className="carousel">
        <button className="prev-button" onClick={prevSlide}>
        &#8678;
        </button>
        <button className="next-button" onClick={nextSlide}>
        &#8680;
        </button>
        <div className="carousel-images">
          {images.map((image, index) => (
            <img
              key={index}
              className={`carousel-image ${index === currentSlide ? 'active' : ''}`}
              src={images[currentSlide]}
              alt={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  }
  
  export default Carousel;