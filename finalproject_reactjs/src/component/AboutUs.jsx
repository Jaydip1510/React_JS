import React from 'react'
import '../css/bootstrap.min.css'
import '../css/tiny-slider.css'
import '../css/style.css'
import couch from '../images/couch.png'
import Heder from './Heder'
import i1 from '../images/person_1.jpg'
import i2 from '../images/person_2.jpg'
import i3 from '../images/person_3.jpg'
import i4 from '../images/person_4.jpg'
import WhyChoose from './WhyChoose'
import Testimonials from './Testimonials'
import Footer from './Footer'
const AboutUs = () => {
    return (
        <div>
            <Heder />
            {/* start Hero Section */}
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>About Us</h1>
                                <p className="mb-4">
                                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                                    velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                                </p>
                                <p>
                                    <a href="" className="btn btn-secondary me-2">
                                        Shop Now
                                    </a>
                                    <a href="#" className="btn btn-white-outline">
                                        Explore
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="hero-img-wrap">
                                <img src={couch} className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Hero Section */}
            <WhyChoose />
            {/* Start Team Section  */}
            <div className="untree_co-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-5 mx-auto text-center">
                            <h2 className="section-title">Our Team</h2>
                        </div>
                    </div>
                    <div className="row">
                        {/* Start Column 1 */}
                        <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
                            <img src={i1} className="img-fluid mb-5" />
                            <h3 clas="">
                                <a href="#">
                                    <span className="">Lawson</span> Arnold
                                </a>
                            </h3>
                            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
                            <p>
                                Separated they live in. Separated they live in Bookmarksgrove right at
                                the coast of the Semantics, a large language ocean.
                            </p>
                            <p className="mb-0">
                                <a href="#" className="more dark">
                                    Learn More <span className="icon-arrow_forward" />
                                </a>
                            </p>
                        </div>
                        {/* End Column 1 */}
                        {/* Start Column 2 */}
                        <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
                            <img src={i2} className="img-fluid mb-5" />
                            <h3 clas="">
                                <a href="#">
                                    <span className="">Jeremy</span> Walker
                                </a>
                            </h3>
                            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
                            <p>
                                Separated they live in. Separated they live in Bookmarksgrove right at
                                the coast of the Semantics, a large language ocean.
                            </p>
                            <p className="mb-0">
                                <a href="#" className="more dark">
                                    Learn More <span className="icon-arrow_forward" />
                                </a>
                            </p>
                        </div>
                        {/* End Column 2 */}
                        {/* Start Column 3 */}
                        <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
                            <img src={i3} className="img-fluid mb-5" />
                            <h3 clas="">
                                <a href="#">
                                    <span className="">Patrik</span> White
                                </a>
                            </h3>
                            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
                            <p>
                                Separated they live in. Separated they live in Bookmarksgrove right at
                                the coast of the Semantics, a large language ocean.
                            </p>
                            <p className="mb-0">
                                <a href="#" className="more dark">
                                    Learn More <span className="icon-arrow_forward" />
                                </a>
                            </p>
                        </div>
                        {/* End Column 3 */}
                        {/* Start Column 4 */}
                        <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
                            <img src={i4} className="img-fluid mb-5" />
                            <h3 clas="">
                                <a href="#">
                                    <span className="">Kathryn</span> Ryan
                                </a>
                            </h3>
                            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
                            <p>
                                Separated they live in. Separated they live in Bookmarksgrove right at
                                the coast of the Semantics, a large language ocean.
                            </p>
                            <p className="mb-0">
                                <a href="#" className="more dark">
                                    Learn More <span className="icon-arrow_forward" />
                                </a>
                            </p>
                        </div>
                        {/* End Column 4 */}
                    </div>
                </div>
            </div>

            {/* End Team Section */}
            <Testimonials/>
            <Footer/>
        </div>
    )
}

export default AboutUs