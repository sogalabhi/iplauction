import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const people = [
  { name: "Alice Johnson", image: "https://via.placeholder.com/150" },
  { name: "Bob Smith", image: "https://via.placeholder.com/150" },
  { name: "Catherine Lee", image: "https://via.placeholder.com/150" },
  { name: "David Brown", image: "https://via.placeholder.com/150" },
  { name: "Emily Davis", image: "https://via.placeholder.com/150" },
  { name: "Emily Davis", image: "https://via.placeholder.com/150" },
  { name: "Emily Davis", image: "https://via.placeholder.com/150" },
  { name: "Emily Davis", image: "https://via.placeholder.com/150" },
  { name: "Emily Davis", image: "https://via.placeholder.com/150" }
];

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false, 
    arrows: false,
  };

  return (
    <div
      className="relative mx-auto py-10"
      style={{
        width: "50%",
      }}
    >
      
      <div className="relative">
        <Slider {...settings}>
          {people.map((person, index) => (
            <div
              key={index}
              className="text-center px-2 fade-sponsor"
            >
              <div className="w-20 h-20 mx-auto mb-4">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover rounded-full border-4 border-gray-300 shadow-lg"
                />
              </div>
              
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
