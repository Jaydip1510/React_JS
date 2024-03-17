import React from 'react'
import cross from '../images/cross.svg'
import product_1 from '../images/product-1.png'
import product_2 from '../images/product-2.png'
import product_3 from '../images/product-3.png'


export default function ProductSession() {
     return (
          <div>

               <div className="product-section">
                    <div className="container">
                         <div className="row">
                              <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                                   <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
                                   <p className="mb-4">
                                        Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                                        Aliquam vulputate velit imperdiet dolor tempor tristique.{" "}
                                   </p>
                                   <p>
                                        <a href="shop.html" className="btn">
                                             Explore
                                        </a>
                                   </p>
                              </div>
                              <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                                   <a className="product-item" href="cart.html">
                                        <img src={product_1} className="img-fluid product-thumbnail" />
                                        <h3 className="product-title">Nordic Chair</h3>
                                        <strong className="product-price">$50.00</strong>
                                        <span className="icon-cross">
                                             <img src={cross} className="img-fluid" />
                                        </span>
                                   </a>
                              </div>

                              <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                                   <a className="product-item" href="cart.html">
                                        <img src={product_2} className="img-fluid product-thumbnail" />
                                        <h3 className="product-title">Kruzo Aero Chair</h3>
                                        <strong className="product-price">$78.00</strong>
                                        <span className="icon-cross">
                                             <img src={cross} className="img-fluid" />
                                        </span>
                                   </a>
                              </div>

                              <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                                   <a className="product-item" href="cart.html">
                                        <img src={product_3} className="img-fluid product-thumbnail" />
                                        <h3 className="product-title">Ergonomic Chair</h3>
                                        <strong className="product-price">$43.00</strong>
                                        <span className="icon-cross">
                                             <img src={cross} className="img-fluid" />
                                        </span>
                                   </a>
                              </div>
                         </div>
                    </div>
               </div>
          </div>

     )
}
