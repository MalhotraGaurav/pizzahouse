import React from "react";
import food from "../../../assests/Homepage/food.png";
import card from "../../../assests/Homepage/card.png";
import dilevery from "../../../assests/Homepage/dilevery.png";
import dilevered from "../../../assests/Homepage/dilevered.png";
import steps from "../../../assests/Homepage/Steps.png";
// import '../../../styles/style.css'

const Guide = () => {
  return (
    <div className="container my-5">
      <h1 className="font-bold">FOLLOW 4 STEPS</h1>
      <h3>At Pizza House we have some simple steps to follow your food</h3>
      <div className="row align-items-center justify-content-between mt-5">
        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 text-center">
          <div className="four-steps-card shadow text-center">
            <img src={food} />
          </div>
          <h4 className="mt-3">Choose your Favourite</h4>
        </div>
        <div
          className="col-xl-1 col-lg-1 col-md-1 col-sm-12 rotate"
          style={{ marginTop: "-70px" }}
        >
          <img src={steps} />
        </div>
        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 text-center">
          <div className="four-steps-card shadow text-center">
            <img src={card} />
          </div>
          <h4 className="mt-3">Pay Online</h4>
        </div>
        <div
          className="col-xl-1 col-lg-1 col-md-1 col-sm-12  rotate"
          style={{ marginTop: "-70px" }}
        >
          <img src={steps} />
        </div>
        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 text-center">
          <div className="four-steps-card shadow text-center">
            <img src={dilevery} />
          </div>
          <h4 className="mt-3">We Deliver Your Meals</h4>
        </div>
        <div
          className="col-xl-1 col-lg-1 col-md-1 col-sm-12 rotate"
          style={{ marginTop: "-70px" }}
        >
          <img src={steps} />
        </div>
        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 text-center">
          <div className="four-steps-card shadow text-center">
            <img src={dilevered} />
          </div>
          <h4 className="mt-3">Eat and Enjoy</h4>
        </div>
      </div>
    </div>
  );
};

export default Guide;
