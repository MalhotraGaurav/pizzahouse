import { Container, Typography, Card, CardMedia } from "@material-ui/core";
import React from "react";
// import Swiper from "react-id-swiper";

// import Swiper core and required modules
// import SwiperCore, { Navigation } from "swiper";

// Import Swiper styles
// import "swiper/swiper.scss";
// import "swiper/components/navigation/navigation.scss";

// install Swiper modules
// SwiperCore.use([Navigation]);

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const TodaysOfferSection = () => {
  const params = {
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
    },
    mousewheel: true,
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  };
  return (
    <div className="container p-3">
      <div className="row pl-3">
        <h1 className="font-bold">TODAY'S OFFER</h1>
      </div>
      <div className="overflow-auto">
        <div style={{ width: "1200px" }}>
          <div className="row py-3">
            <div className="col-12 d-flex justify-content-between">
              {cards.map((card) => (
                <div
                  key={card}
                  className="col-xs-6 col-sm-3"
                  style={{ marginRight: "20px" }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    className="mr-4"
                    image="https://picsum.photos/200"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodaysOfferSection;
