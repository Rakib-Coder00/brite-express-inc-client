import React from 'react';
import person1 from '../../Asset/Reviews/person 2.png';
import person2 from '../../Asset/Reviews/person 5.jpg';
import person3 from '../../Asset/Reviews/person 3.png';

const Reviews = () => {
    return (
        <div className='review'>
            <div className="container">
            <div className="title text-center pt-3 pb-5">
                <h2 className="position-relative d-inline-block ms-4 fs-1 fw-bolder">Happy Clients!</h2>
            </div>
            <div id="carouselExampleCaptions" className="carousel slide py-5" data-bs-ride="carousel">

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={person3} className="w-100" alt="..."/>
                        <div className="carousel-caption d-block">
                            <h5>Jennifer Lawrence</h5>
                            <small>Actress @dC universe</small>
                            <p>First time coming to this convention.the interior is beautiful. very clean modern venue very courteous staff.</p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src={person1} className="w-100" alt="..."/>
                        <div className="carousel-caption d-block">
                            <h5>Jhon Wick</h5>
                            <small>Senior Actor @matrix</small>
                            <p>Very beautiful hall for weddings and other fun parties! The speaker systems were great and the staff were extremely nice and helpful! Congrats Buz!</p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src={person2} className="w-100" alt="..."/>
                        <div className="carousel-caption d-block">
                            <h5>Angela Yu</h5>
                            <small>Model @Marvel universe</small>
                            <p>Beautiful and elegant banquet hall for weddings and family gatherings. Food quality and taste is very good.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </div>
    );
};

export default Reviews;