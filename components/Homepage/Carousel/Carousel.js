import React from "react";
import "jquery";
import "bootstrap/js/dist/carousel";
import CarouselImg from "../../../assests/Homepage/background.png";

const Carousel = () => {
  return (
    <div className="container-fluid p-0">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src={CarouselImg}
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={CarouselImg}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={CarouselImg}
              alt="Third slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>
    </div>
  );
};

export default Carousel;
