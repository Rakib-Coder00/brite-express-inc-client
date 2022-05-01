import React, { useState } from 'react';
import { Carousel } from "react-bootstrap";
import banner1 from  '../../../Asset/images/37205707024_4ffc8f9d2f_b.jpg'
import banner2 from  '../../../Asset/images/Co-Store-memphis-hero-2.jpg'
import banner3 from  '../../../Asset/images/usahomepic2018.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <Carousel className="carousel" activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img className="d-block w-100" src={banner1} alt="First slide" />
                <Carousel.Caption>
                    <h3>Welcome To Brite Express.</h3>
                    <p>Design Your Perfect Choice.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={banner2} alt="Second slide" />

                <Carousel.Caption>
                    <h3>The ultimate service</h3>
                    <p>Your next adventure is waiting for you.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={banner3} alt="Third slide" />

                <Carousel.Caption>
                    <h3>Discover story-worthy .</h3>
                    <p>
                         the World Using the Power of Community.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;