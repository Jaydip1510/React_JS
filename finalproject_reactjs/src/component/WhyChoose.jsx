import React from 'react'
import truck from '../images/truck.svg'
import bag from '../images/bag.svg'
import support from '../images/support.svg'
import return_1 from '../images/return.svg'
import why_choose_us from '../images/why-choose-us-img.jpg'

export default function WhyChoose() {
     return (
          <div>
               <div className="why-choose-section">
                    <div className="container">
                         <div className="row justify-content-between">
                              <div className="col-lg-6">
                                   <h2 className="section-title">Why Choose Us</h2>
                                   <p>
                                        Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                                        Aliquam vulputate velit imperdiet dolor tempor tristique.
                                   </p>
                                   <div className="row my-5">
                                        <div className="col-6 col-md-6">
                                             <div className="feature">
                                                  <div className="icon">
                                                       <img src={truck} alt="Image" className="imf-fluid" />
                                                  </div>
                                                  <h3>Fast &amp; Free Shipping</h3>
                                                  <p>
                                                       Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                                                       velit. Aliquam vulputate.
                                                  </p>
                                             </div>
                                        </div>
                                        <div className="col-6 col-md-6">
                                             <div className="feature">
                                                  <div className="icon">
                                                       <img src={bag} alt="Image" className="imf-fluid" />
                                                  </div>
                                                  <h3>Easy to Shop</h3>
                                                  <p>
                                                       Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                                                       velit. Aliquam vulputate.
                                                  </p>
                                             </div>
                                        </div>
                                        <div className="col-6 col-md-6">
                                             <div className="feature">
                                                  <div className="icon">
                                                       <img src={support} alt="Image" className="imf-fluid" />
                                                  </div>
                                                  <h3>24/7 Support</h3>
                                                  <p>
                                                       Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                                                       velit. Aliquam vulputate.
                                                  </p>
                                             </div>
                                        </div>
                                        <div className="col-6 col-md-6">
                                             <div className="feature">
                                                  <div className="icon">
                                                       <img src={return_1} alt="Image" className="imf-fluid" />
                                                  </div>
                                                  <h3>Hassle Free Returns</h3>
                                                  <p>
                                                       Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                                                       velit. Aliquam vulputate.
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-lg-5">
                                   <div className="img-wrap">
                                        <img src={why_choose_us} alt="Image" className="img-fluid" />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

          </div>
     )
}
