import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Light4 from "../assets/g402.jpg";
import Light2 from "../assets/z2.png";
import Light3 from "../assets/joyroom.jpg";
import Light1 from "../assets/r50i.jpg";

const Header = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop of slides
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one image at a time
    slidesToScroll: 1, // Scroll one image at a time
    autoplay: true, // Automatically slide images
    autoplaySpeed: 1500, // Autoplay interval in milliseconds
    arrows: true, // Show next/prev arrows
  };

  const images = [Light1, Light2, Light3, Light4];

  return (
    <header className="relative mx-auto bg-white">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className="flex justify-center items-center w-full h-[calc(100vw*9/16)] lg:h-[500px]"
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </Slider>
    </header>
  );
};

export default Header;
