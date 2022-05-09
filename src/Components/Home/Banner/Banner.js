import React, { useState } from 'react';
import { Carousel } from "react-bootstrap";
import banner1 from '../../../Asset/images/banner-1.jpg'
import banner2 from '../../../Asset/images/banner-2.jpg'
import banner3 from '../../../Asset/images/banner-3.jpg'
import './Banner.css'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="front-page">
            <Carousel className="carousel" activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img className="d-block w-100 " src={banner1} alt="First slide" />
                    <Carousel.Caption className="caption">
                        <h2 className='text-yellow fs-1'>Welcome To Brite Express.</h2>
                        <p>Design Your Perfect Choice.</p>
                        <button className="btn btn-light  text-primary btn-lg px-5 py-3 rounded-3 fw-bolder sm-btn">Book Now
                        </button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={banner2} alt="Second slide" />

                    <Carousel.Caption className='caption'>
                        <h2 className='text-yellow fs-1'>The ultimate service</h2>
                        <p>Your next adventure is waiting for you.</p>
                        <button className="btn btn-light  text-primary btn-lg px-5 py-3 rounded-3 fw-bolder sm-btn">Book Now
                        </button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={banner3} alt="Third slide" />

                    <Carousel.Caption className="caption">
                        <h2 className='text-yellow fs-1'>Discover story-worthy .</h2>
                        <p>
                            the World Using the Power of Community.
                        </p>
                        <button className="btn btn-light  text-primary btn-lg px-5 py-3 rounded-3 fw-bolder sm-btn">Book Now
                        </button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;