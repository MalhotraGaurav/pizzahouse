import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HeaderMenu = () => {
  return (
    <div className="container-fluid px-5">
      <div className="overflow-auto">
        <div style={{ width: "1200px" }}>
          <div className="row p-3">
            <div className="col-12 d-flex justify-content-between">
              <h4 className="font-bold">PIZZA</h4>
              <h4 className="font-bold">BURGER</h4>
              <h4 className="font-bold">WRAPS</h4>
              <h4 className="font-bold">SANDWICH</h4>
              <h4 className="font-bold">PASTA</h4>
              <h4 className="font-bold">FRIES</h4>
              <h4 className="font-bold">CHOCOLAVA</h4>
              <h4 className="font-bold">BIRYANI</h4>
              <h4 className="font-bold">GARLICBREAD</h4>
              <h4 className="font-bold">Drinks</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
