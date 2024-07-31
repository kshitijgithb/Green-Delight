import React from 'react';
import organic from '../assets/organic.avif';
import apple from '../assets/apple.avif';
import vegetable from '../assets/vegetable.avif';

export default function Carousel() {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              style={{
                filter: "brightness(80%)",
                maxHeight: "500px",
                objectFit: "cover"
              }}
              src={organic}
              className="d-block w-100"
              alt="Vegetables"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Try Premium range of Organic Products</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={apple}
              style={{
                filter: "brightness(80%)",
                maxHeight: "500px",
                objectFit: "cover"
              }}
              className="d-block w-100"
              alt="Fruits"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Buy Organic and Fresh Products Online</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              style={{
                filter: "brightness(80%)",
                maxHeight: "500px",
                objectFit: "cover"
              }}
              src={vegetable}
              className="d-block w-100"
              alt="Rice"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Connect with your Trustable Farmer</h5>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
