import React from "react";
import couch from "../images/couch.png";
import "../css/bootstrap.min.css";
import "../css/tiny-slider.css";
import "../css/style.css";
const HeroSecssion = () => {
  return (
    <div>
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>
                  Modern Interior <span className="d-block">Design Studio</span>
                </h1>
                <p className="mb-4">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate velit imperdiet dolor tempor
                  tristique.
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
            <div className="col-lg-7 col-md-12">
              <div className="hero-img-wrap">
                <img
                  src={couch}
                  className="img-fluid"
                  alt="Couch"
                  style={{
                    maxWidth: "100%", // Ensure the image never exceeds its parent container width
                    height: "auto", // Maintain the aspect ratio of the image
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSecssion;
