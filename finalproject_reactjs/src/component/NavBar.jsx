import React from 'react'
import '../css/bootstrap.min.css'
import '../css/tiny-slider.css'
import '../css/style.css'
import user from '../images/user.svg'
import cart from '../images/cart.svg'
import couch from '../images/couch.png'

export default function NavBar() {
     return (
          <div>
               <nav
                    className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
                    arial-label="Furni navigation bar"
               >
                    <div className="container">
                         <a className="navbar-brand" href="index.html">
                              Furni<span>.</span>
                         </a>
                         <button
                              className="navbar-toggler"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#navbarsFurni"
                              aria-controls="navbarsFurni"
                              aria-expanded="false"
                              aria-label="Toggle navigation"
                         >
                              <span className="navbar-toggler-icon" />
                         </button>
                         <div className="collapse navbar-collapse" id="navbarsFurni">
                              <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                                   <li className="nav-item active">
                                        <a className="nav-link" href="index.html">
                                             Home
                                        </a>
                                   </li>
                                   <li>
                                        <a className="nav-link" href="Shop.html">
                                             Shop
                                        </a>
                                   </li>
                                   <li>
                                        <a className="nav-link" href="about.html">
                                             About us
                                        </a>
                                   </li>
                                   <li>
                                        <a className="nav-link" href="services.html">
                                             Services
                                        </a>
                                   </li>
                                   <li>
                                        <a className="nav-link" href="blog.html">
                                             Blog
                                        </a>
                                   </li>
                                   <li>
                                        <a className="nav-link" href="contact.html">
                                             Contact us
                                        </a>
                                   </li>
                              </ul>
                              <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                                   <li>
                                        <a className="nav-link" href="#">
                                             <img src={user} />
                                        </a>
                                   </li>
                                   <li>
                                        <a className="nav-link" href="cart.html">
                                             <img src={cart} />
                                        </a>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </nav>

               <div>
                    <div className="hero">
                         <div className="container">
                              <div className="row justify-content-between">
                                   <div className="col-lg-5">
                                        <div className="intro-excerpt">
                                             <h1>
                                                  Modern Interior <span clsas="d-block">Design Studio</span>
                                             </h1>
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
               </div>
          </div>
     )
}
