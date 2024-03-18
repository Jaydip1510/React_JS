import React from 'react'
import Footer from './Footer'
import user from '../images/user.svg'
import cart from '../images/cart.svg'
import { Link } from 'react-router-dom'


const Shop = () => {
  return (
    <>
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
    {/* Start Hero Section */}
    <div className="hero">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="intro-excerpt">
              <h1>Shop</h1>
            </div>
          </div>
          <div className="col-lg-7"></div>
        </div>
      </div>
    </div>
    {/* End Hero Section */}
    <div className="untree_co-section product-section before-footer-section">
      <div className="container">
        <div className="row">
          {/* Start Column 1 */}
          <div className="col-12 col-md-4 col-lg-3 mb-5">
            <a className="product-item" href="#">
              <img
                src="../images/product3.png"
                className="img-fluid product-thumbnail"
              />
              <h3 className="product-title">Nordic Chair</h3>
              <strong className="product-price">$50.00</strong>
              <span className="icon-cross">
                <img src="images/cross.svg" className="img-fluid" />
              </span>
            </a>
          </div>
          {/* End Column 1 */}
          {/* Start Column 2 */}
          <div className="col-12 col-md-4 col-lg-3 mb-5">
            <a className="product-item" href="#">
              <img
                src="images/product-1.png"
                className="img-fluid product-thumbnail"
              />
              <h3 className="product-title">Nordic Chair</h3>
              <strong className="product-price">$50.00</strong>
              <span className="icon-cross">
                <img src="images/cross.svg" className="img-fluid" />
              </span>
            </a>
          </div>
          {/* End Column 2 */}
          {/* Start Column 3 */}
          <div className="col-12 col-md-4 col-lg-3 mb-5">
            <a className="product-item" href="#">
              <img
                src="images/product-2.png"
                className="img-fluid product-thumbnail"
              />
              <h3 className="product-title">Kruzo Aero Chair</h3>
              <strong className="product-price">$78.00</strong>
              <span className="icon-cross">
                <img src="images/cross.svg" className="img-fluid" />
              </span>
            </a>
          </div>
          {/* End Column 3 */}
          {/* Start Column 4 */}
          <div className="col-12 col-md-4 col-lg-3 mb-5">
            <a className="product-item" href="#">
              <img
                src="images/product-3.png"
                className="img-fluid product-thumbnail"
              />
              <h3 className="product-title">Ergonomic Chair</h3>
              <strong className="product-price">$43.00</strong>
              <span className="icon-cross">
                <img src="images/cross.svg" className="img-fluid" />
              </span>
            </a>
          </div>
          {/* End Column 4 */}
          {/* Start Column 1 */}
          <div className="col-12 col-md-4 col-lg-3 mb-5">
            <a className="product-item" href="#">
              <img
                src="images/product-3.png"
                className="img-fluid product-thumbnail"
              />
              <h3 className="product-title">Nordic Chair</h3>
              <strong className="product-price">$50.00</strong>
              <span className="icon-cross">
                <img src="images/cross.svg" className="img-fluid" />
              </span>
            </a>
          </div>
          {/* End Column 1 */}
          {/* Start Column 2 */}
          <div className="col-12 col-md-4 col-lg-3 mb-5">
            <a className="product-item" href="#">
              <img
                src="images/product-1.png"
                className="img-fluid product-thumbnail"
              />
              <h3 className="product-title">Nordic Chair</h3>
              <strong className="product-price">$50.00</strong>
              <span className="icon-cross">
                <img src="images/cross.svg" className="img-fluid" />
              </span>
            </a>
          </div>
          {/* End Column 2 */}
          {/* Start Column 3 */}
          <div className="col-12 col-md-4 col-lg-3 mb-5">
            <a className="product-item" href="#">
              <img
                src="images/product-2.png"
                className="img-fluid product-thumbnail"
              />
              <h3 className="product-title">Kruzo Aero Chair</h3>
              <strong className="product-price">$78.00</strong>
              <span className="icon-cross">
                <img src="images/cross.svg" className="img-fluid" />
              </span>
            </a>
          </div>
          {/* End Column 3 */}
          {/* Start Column 4 */}
          <div className="col-12 col-md-4 col-lg-3 mb-5">
            <a className="product-item" href="#">
              <img
                src="images/product-3.png"
                className="img-fluid product-thumbnail"
              />
              <h3 className="product-title">Ergonomic Chair</h3>
              <strong className="product-price">$43.00</strong>
              <span className="icon-cross">
                <img src="images/cross.svg" className="img-fluid" />
              </span>
            </a>
          </div>
          {/* End Column 4 */}
        </div>
      </div>
    </div>
    <Footer/>
  </>
  
  )
}

export default Shop