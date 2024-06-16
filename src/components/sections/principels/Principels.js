import React from "react";
import "./Principels.css";
import Card from "../../cards/Card";

function Principels() {
  const cardData = [
    {
      title: "Balanced Approach",
      content:
        "We believe in doing business ‘The Balanced Way.’ This means measuring our success in terms of our positive impact on society – and not just through our profit margins. Over nearly four decades, we have made Corporate Social Responsibility and ethical principles the fundamental pillars of our business model. We do everything we can to create a fair and supportive workplace, encourage positive social change and protect the environment for the next generation.",
      CardID: 1,
      className : "card-1"
    },
    {
      title: "Adding Value to Investors & Stakeholders",
      content:
        "We believe in adding value for investors and shareholders. Our stakeholders trust Savola with their capital because of our strong track record of generating growth. From humble beginnings, we have grown into a multinational company with a presence in over 50 countries. We own a diverse and profitable portfolio including market-leading brands and Saudi Arabia’s leading supermarket chain.",
      CardID: 2,
      className : "card-2"
    },
    {
      title: "Value Built on Values",
      content:
        "We believe that the value we add should be built on values – the ethical principles on which Savola was founded. From the outset, we have promoted ethical values and behavior. We embrace these principles as a group, within our companies and even as individuals.",
      CardID: 3,
      className : "card-1"
    },
  ];
  return (
    <div className="container">
      <div className="principels-wrapper">
        <span>Principles</span>
        <h3>WHAT WE STAND FOR</h3>
        <div className="pricipels-card-wrapper">
        {cardData.map(data=>(
            <Card CID={data.CardID} title = {data.title} content={data.content} className={data.className}/>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Principels;
