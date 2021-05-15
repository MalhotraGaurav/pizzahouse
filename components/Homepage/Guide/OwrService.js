import React from "react";
import food from "../../../assests/Homepage/food.png";
import store from "../../../assests/Homepage/store.png";
import party from "../../../assests/Homepage/party.png";
import catering from "../../../assests/Homepage/catering.png";
import "../../../styles/style.css";

const OwrService = () => {
  return (
    <div className="container my-5">
      <h1 className="font-bold">Explore More</h1>
      <div className="row align-items-center justify-content-between mt-5">
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 text-center mb-3">
          <div className="owr-service-card shadow text-center p-4 owr-menu">
            <img src={food} className="img-fluid" />
            <h4 className="mt-3">Owr Menu</h4>
            <p>Explore our range of delicious foods in 30 minutes!</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 text-center mb-3">
          <div className="owr-service-card shadow text-center nearby p-4">
            <img src={store} className="img-fluid" />
            <h4 className="mt-4">Nearby Store</h4>
            <p>Find a Pizza House restaurant near you</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 text-center mb-3">
          <div className="owr-service-card shadow text-center party p-4">
            <img src={party} className="img-fluid" />
            <h4 className="mt-3">Birthday party</h4>
            <p>Celebrate the joy of birthday with fresh & hot food</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 text-center mb-3">
          <div className="owr-service-card shadow text-center catering p-4">
            <img src={catering} className="img-fluid" />
            <h4 className="mt-4">Catering</h4>
            <p>Live Pizza House for wedding/ corporate events</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwrService;
