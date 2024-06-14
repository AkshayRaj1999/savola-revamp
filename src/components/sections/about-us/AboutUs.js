import React from "react";
import "./AboutUs.css";
import ceo from "../../../images/images/ceo.png";
import signature from "../../../images/images/signature.png.png";

function AboutUs() {
  return (
    <section>
      <div className="container">
        <div className="about-content-wrapper">
          <div className="about-left-text-content">
            <span>ABOUT US</span>
            <h3>MESSAGE FROM THE CEO</h3>
            <p>
              Whether you are an investor in our company, a consumer of our
              products, a member of our team, or an interested reader, I am
              pleased to welcome you to the Savola Group website. We are
              confident that this website is rich in information regarding our
              diverse business operations in the Middle East and North Africa
              region. Our website pages will reveal details about our
              investments in the food and retail sectors, as well as clarify our
              vision for the future and the wisdom behind choosing the slogan "
              Value Built on Values " as our goal. Savola was established in
              1979, and over the past four decades, we have witnessed growth and
              expansion in all our activities and investments. Savola Food
              Company produces various food products, including cooking oils,
              sugar, pasta, and ghee. Currently, the company markets its
              products in more than 50 different countries.  Additionally, our
              retail sector manages a significant number of retail stores under
              the Panda brand. Our experts are also committed to investing in
              other companies to achieve additional returns for our
              shareholders.
            </p>
            <div className="signature-wrapper">
              <div className="signature-img">
              <img src={signature} alt="" />
              </div>
              <div className="signature-text">
                <h6>Waleed Khalid Fatan</h6>
                <p>Group CEO</p>
              </div>
            </div>
          </div>
          <div className="about-right-img-content">
            <img src={ceo} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
