import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FoodMenu.css";
import pizza from "../../../assests/Homepage/pizza.png";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const FoodMenu = () => {
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <h1 className="font-bold py-3 pl-3">FOODS</h1>
        </div>
        <div className="row">
          {cards.map((card) => (
            <div key={card} className="col-xs-6 col-sm-3 mb-5">
              <div
                className="shadow text-center"
                style={{ borderRadius: "16px" }}
              >
                <img src={pizza} className="img-fluid" />
              </div>
              <h5 className="text-center mt-3">Pizza</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodMenu;
