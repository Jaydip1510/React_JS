import React from 'react';
import Slider from 'react-slick';
// import '../../src/css/tiny-slider.css';
import person_1 from '../images/person-1.png';

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
                <div className="row">
                    <div className="col-lg-7 mx-auto text-center">
                        <h2 className="section-title">Testimonials</h2>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="testimonial-slider-wrap text-center">

                            <div id="testimonial-nav">
                                <span className="prev" data-controls="prev"><span className="fa fa-chevron-left"></span></span>
                                <span className="next" data-controls="next"><span className="fa fa-chevron-right"></span></span>
                            </div>

                            <Slider {...settings} className="testimonial-slider">
                                <div className="item">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8 mx-auto">

                                            <div className="testimonial-block text-center">
                                                <blockquote className="mb-5">
                                                    <p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
                                                </blockquote>

                                                <div className="author-info">
                                                    <div className="author-pic">
                                                        <img src={person_1} alt="Maria Jones" className="img-fluid" />
                                                    </div>
                                                    <h3 className="font-weight-bold">Maria Jones</h3>
                                                    <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {/* END item */}

                                {/* Repeat the above code for each testimonial item */}
                            </Slider>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}