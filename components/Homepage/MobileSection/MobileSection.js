import React from "react";
import mobile from "../../../assests/Homepage/mobile.jpg";
import AppStore from "../../../assests/Homepage/AppStore.png";
import GoogleStore from "../../../assests/Homepage/GooglePlay.png";
import "../../../styles/style.css";

const MobileSection = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12">
          <h1 className="font-bold large-text">
            RESTAURANTS IN <br /> YOUR POCKET
          </h1>
          <h5 className="med-text">
            Order from your favourite restaurants & track on the go, with the
            all-new Pizza House Application.
          </h5>
          <div className="mt-4 d-flex">
            <img src={AppStore} className="mr-3 img-fluid" />
            <img src={GoogleStore} className="img-fluid" />
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
          <img className="img-fluid" src={mobile} alt="mobile" />
        </div>
      </div>
    </div>
  );
};

export default MobileSection;
