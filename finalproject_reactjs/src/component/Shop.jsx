import React from 'react'
import Footer from './Footer'
import img1 from '../images/product-3.png';
import img2 from '../images/product-1.png'
import img3 from '../images/product-2.png';
import img4 from '../images/cross.svg'
import Heder from './Heder';


const Shop = () => {
  return (
    <>
    <Heder/>
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
                src={img1}
                className="img-fluid product-thumbnail"
              />
              <h3 className="product-title">Nordic Chair</h3>
              <strong className="product-price">$50.00</strong>
              <span className="icon-cross">
                <img src={img4} className="img-fluid" />
              </span>
            </a>
          </div>
          {/* End Column 1 */}
          {/* Start Column 2 */}
          <div className="col-12 col-md-4 col-lg-3 mb-5">
            <a className="product-item" href="#">
              <img
                src={img2}
                className="img-fluid product-thumbnail"
              />
              <h3 className="product-title">Nordic Chair</h3>
              <strong className="product-price">$50.00</strong>
              <span className="icon-cross">
                <img src={img4} className="img-fluid" />
              </span>
            </a>
          </div>
          {/* End Column 2 */}
          {/* Start Column 3 */}
          <div className="col-12 col-md-4 col-lg-3 mb-5">
            <a className="product-item" href="#">
              <img
                src={img3}
                className="img-fluid product-thumbnail"
              />
              <h3 className="product-title">Kruzo Aero Chair</h3>
              <strong className="product-price">$78.00</strong>
              <span className="icon-cross">
                <img src={img4} className="img-fluid" />
              </span>
            </a>
          </div>
          {/* End Column 3 */}
          {/* Start Column 4 */}
          <div className="col-12 col-md-4 col-lg-3 mb-5">
            <a className="product-item" href="#">
              <img
                src={img1}
                className="img-fluid product-thumbnail"
              />
              <h3 className="product-title">Ergonomic Chair</h3>
              <strong className="product-price">$43.00</strong>
              <span className="icon-cross">
                <img src={img4} className="img-fluid" />
              </span>
            </a>
          </div>
          {/* End Column 4 */}
          {/* Start Column 1 */}
          <div className="col-12 col-md-4 col-lg-3 mb-5">
            <a className="product-item" href="#">
              <img
                src={img1}
                className="img-fluid product-thumbnail"
              />
              <h3 className="product-title">Nordic Chair</h3>
              <strong className="product-price">$50.00</strong>
              <span className="icon-cross">
                <img src={img4} className="img-fluid" />
              </span>
            </a>
          </div>
          {/* End Column 1 */}
          {/* Start Column 2 */}
          <div className="col-12 col-md-4 col-lg-3 mb-5">
            <a className="product-item" href="#">
              <img
                src={img2}
                className="img-fluid product-thumbnail"
              />
              <h3 className="product-title">Nordic Chair</h3>
              <strong className="product-price">$50.00</strong>
              <span className="icon-cross">
                <img src={img4} className="img-fluid" />
              </span>
            </a>
          </div>
          {/* End Column 2 */}
          {/* Start Column 3 */}
          <div className="col-12 col-md-4 col-lg-3 mb-5">
            <a className="product-item" href="#">
              <img
                src={img3}
                className="img-fluid product-thumbnail"
              />
              <h3 className="product-title">Kruzo Aero Chair</h3>
              <strong className="product-price">$78.00</strong>
              <span className="icon-cross">
                <img src={img4} className="img-fluid" />
              </span>
            </a>
          </div>
          {/* End Column 3 */}
          {/* Start Column 4 */}
          <div className="col-12 col-md-4 col-lg-3 mb-5">
            <a className="product-item" href="#">
              <img
                src={img1}
                className="img-fluid product-thumbnail"
              />
              <h3 className="product-title">Ergonomic Chair</h3>
              <strong className="product-price">$43.00</strong>
              <span className="icon-cross">
                <img src={img4} className="img-fluid" />
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