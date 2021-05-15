import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import User from "../../../assests/header/user.png";
import Track from "../../../assests/header/track.png";
import Cart from "../../../assests/header/cart.png";

const Header = () => {
  return (
    <div className="container-fluid px-5">
      <div className="row mt-4">
        <div className="col-xl-4 col-lg-4 col-md-4">
          <h1 className="font-bold">Pizza House</h1>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4">
          <input
            type="text"
            className="form-control shadow"
            placeholder="Enter your location"
          />
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 d-flex justify-content-end mt-3 mt-md-0">
          <button
            className="btn btn-light font-bold"
            style={{ fontSize: "18px" }}
          >
            <img src={User} style={{ width: "20px" }} /> Login
          </button>
          <button
            className="btn btn-light font-bold"
            style={{ fontSize: "18px" }}
          >
            <img src={Track} style={{ width: "24px", marginLeft: "20px" }} />{" "}
            Track Order
          </button>
          <button
            className="btn btn-light font-bold"
            style={{ fontSize: "18px" }}
          >
            <img src={Cart} style={{ width: "20px", marginLeft: "20px" }} />{" "}
            Cart
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
