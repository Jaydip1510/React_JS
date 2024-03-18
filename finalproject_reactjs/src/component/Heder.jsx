import React from 'react'
import user from '../images/user.svg'
import cart from '../images/cart.svg'
import { Link } from 'react-router-dom'

const Heder = () => {
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
                                        <Link className="nav-link" to="/">
                                             Home
                                        </Link>
                                   </li>
                                   <li>
                                        <Link className="nav-link" to="/shop">
                                             Shop
                                        </Link>
                                   </li>
                                   <li>
                                        <Link className="nav-link" to="/about">
                                             About us
                                        </Link>
                                   </li>
                                   <li>
                                        <Link className="nav-link" to="/services">
                                             Services
                                        </Link>
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
    </div>
  )
}

export default Heder
