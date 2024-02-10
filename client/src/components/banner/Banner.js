import React from "react";
import firstImg from "../banner/firstImg.jpg";
import secondImg from "../banner/secondImg.jpg";
import thirdImg from "../banner/thirdImg.jpg";
import fourthImg from "../banner/fourthImg.jpg";
import img from "../banner/img.jpg";
import newImg from "../banner/amazon.jpg"

const Banner = () => {
  return (
    <>
      <div
        
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
         
          <div className="carousel-item" data-bs-interval={4000}>
            <img src={fourthImg} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval={6000}>
            <img src={thirdImg} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item active" data-bs-interval={2000}>
            <img src={img} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item active" data-bs-interval={2000}>
            <img src={newImg} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Banner;
