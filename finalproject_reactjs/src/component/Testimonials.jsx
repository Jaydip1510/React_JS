import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import person_1 from '../images/person-1.jpg';

export default function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="testimonial-section">
            <div className="container">
                <h2 className="section-title">Testimonials</h2>
                <Slider {...settings}>
                    <div>
                        <div className="testimonial-item">
                            <img src={person_1} alt="Person" />
                            <h3>Testimonial 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div>
                        <div className="testimonial-item">
                            <img src={person_1} alt="Person" />
                            <h3>Testimonial 2</h3>
                            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div>
                        <div className="testimonial-item">
                            <img src={person_1} alt="Person" />
                            <h3>Testimonial 3</h3>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}