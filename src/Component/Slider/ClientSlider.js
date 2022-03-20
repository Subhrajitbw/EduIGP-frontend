import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "./slider.css";

function ClientSlider() {
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    const fetch = async() => {
      const slide = await axios.get(`http://127.0.0.1:8080/client-slider/get`)
      setSlides(slide.data)
    }
    fetch();
  }, [])
  const useItems = slides.map((item) => {
    return(
      <div class="mt-4 d-flex justify-content-center">
         <img className="img-thumb banner-image" src={`data:image/png;charset=utf-8;base64,${(item.image.data)}`} />
          
        </div>
    )
  })
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container-fluid text-center banner-slider-main py-5 s-slider">
    <h2 className="slider-head">IGP Community Clients</h2>
      <Slider {...settings}>
        {slides && useItems}
      </Slider>
    </div>
  );
}
export default ClientSlider;
