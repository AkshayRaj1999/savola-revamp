import React from "react";
import "./Investment.css";
import investCardImage1 from "../../../images/icons/carrot-icon.png";
import investCardImage2 from "../../../images/icons/milk-icon.png";
import investCardImage3 from "../../../images/icons/card-icon.png";
import Card from "../../cards/Card";

function Investment() {
  const investmentCard = [
    {
      investmentCardID: 1,
      investmentCardImage: investCardImage1,
      investmentCardTitle: "RETAIL INVESTMENTS",
      investmentCardPara:
        "Our food products include investments in operations and products with distinctive and well-known brand names throughout the Middle East and North Africa.",
      className: "investmentCard-1",
      RedirectLink : "https://www.savola.com/en"
    },
    {
      investmentCardID: 2,
      investmentCardImage: investCardImage2,
      investmentCardTitle: "FOOD INVESTMENTS",
      investmentCardPara:
        "Savola Group strategically focuses its investments on two main sectors - food and retail.",
      className: "investmentCard-2",
      RedirectLink : "https://www.savola.com/en"
    },
    {
      investmentCardID: 3,
      investmentCardImage: investCardImage3,
      investmentCardTitle: "OTHER INVESTMENTS",
      investmentCardPara:
        "Aside from our managed investments in the food and retail sectors, we also pursue capital growth through our portfolio of non-managed investments.",
      className: "investmentCard-1",
      RedirectLink : "https://www.savola.com/en"
    },
  ];
  return (
    <section>
    <div className="container">
      <div className="investment-wrapper">
        <div className="investment-top-content-wrapper">
          <span>Investment</span>
          <h3>At Savola, strategic investment is our specialty</h3>
          <p>
            we know that expertise and experience are what counts. We invest in
            our core sectors and region (food and retail in the Middle East,
            North Africa) on the basis of a track record dating back to 1979.
            This specialized approach means that we can invest our capital
            effectively and generate maximum profits for investors and
            shareholders.
          </p>
        </div>
        <div className="investment-cards-wrapper">
          {investmentCard.map((card) => (
            <Card
              key={card.investmentCardID}
              className={card.className}
              image={card.investmentCardImage}
              title={card.investmentCardTitle}
              content={card.investmentCardPara}
              redirection={card.RedirectLink}
            />
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}

export default Investment;
