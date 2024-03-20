import React from 'react'
import user from '../images/user.svg'
import cart from '../images/cart.svg'
import { Link, useLocation } from 'react-router-dom'

const Heder = () => {
     const location = useLocation();
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
                                   <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                                        <Link className="nav-link" to="/">
                                             Home
                                        </Link>
                                   </li>
                                   <li className={`nav-item ${location.pathname === '/shop' ? 'active' : ''}`}>
                                        <Link className="nav-link" to="/shop">
                                             Shop
                                        </Link>
                                   </li>
                                   <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
                                        <Link className="nav-link" to="/about">
                                             About us
                                        </Link>
                                   </li>
                                   <li className={`nav-item ${location.pathname === '/services' ? 'active' : ''}`}>
                                        <Link className="nav-link" to="/services">
                                             Services
                                        </Link>
                                   </li>
                                   <li className={`nav-item ${location.pathname === '/blog' ? 'active' : ''}`}>
                                        <Link className="nav-link" to="/blog">
                                             Blog
                                        </Link>
                                   </li>
                                   <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                                        <Link className="nav-link" to="/contact">
                                             Contact us
                                        </Link>
                                   </li>
                              </ul>
                              <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                                   <li>
                                        <Link className="nav-link" to="/login">
                                             <img src={user} />
                                        </Link>
                                   </li>
                                   <li>
                                        <Link className="nav-link" to="/cart">
                                             <img src={cart} />
                                        </Link>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </nav>
          </div>
     )
}

export default Heder
