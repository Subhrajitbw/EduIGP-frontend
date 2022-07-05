import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "./slider.css";
import {Link} from "react-router-dom"
function BlogSlider() {
    const [slides, setSlides] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            const slide = await axios.get(`http://127.0.0.1:8080/blog/get`)
            setSlides(slide.data)
        }
        fetch();
    }, [])
    const useItems = slides.map((item) => {
        return (
            <div class="mt-4 d-flex justify-content-center">
                <img className="img-thumb" src={`data:image/png;charset=utf-8;base64,${(item.featuredimage.data)}`} />

            </div>
        )
    })
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
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

        <div className="container text-center banner-slider-main py-5">
            <Link className="btn btn-primary services-button" to="#" role="button">
                Blogs
            </Link>
            <Slider {...settings}>
                {slides && useItems}
            </Slider>
        </div>
    );
}
export default BlogSlider;
