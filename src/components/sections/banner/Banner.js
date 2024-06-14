import React from "react";
import "./Banner.css"
import carousel from "../../../images/images/Frame 1.jpg";

function Banner() {
  return (
    <section>
      <div className="container-fluid">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active c-item">
              <img src={carousel} className="d-block w-100 c-item" alt="Slide 1" />
              <div class="carousel-caption d-none d-md-block carousel-contents ">
                <h5>Value Built on Values</h5>
                <p>
                  We are Savola: the leading strategic investment holding group
                  for the food and retail sectors in the MENA(Middle East, North
                  Africa) region.
                </p>
              </div>
            </div>
            <div className="carousel-item c-item">
              <img src={carousel} className="d-block w-100 c-img" alt="Slide 2" />
              <div class="carousel-caption d-none d-md-block carousel-contents ">
                <h5>Value Built on Trust</h5>
                <p>
                  We are Savola: the leading strategic investment holding group
                  for the food and retail sectors in the MENA(Middle East, North
                  Africa) region.
                </p>
              </div>
            </div>
            <div className="carousel-item c-item">
              <img src={carousel} className="d-block w-100 c-img" alt="Slide 3" />
              <div class="carousel-caption d-none d-md-block carousel-contents ">
                <h5>Value Build on Dignity</h5>
                <p>
                  We are Savola: the leading strategic investment holding group
                  for the food and retail sectors in the MENA(Middle East, North
                  Africa) region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
