import React from "react";
import test from "../photos/match.jpg";

const TicketCard = ({ ele }) => {
  return (
    <div className="card-merchandise">
      <p className="match-dt">{ele.date_time}</p>
      <img src={test} alt="merchandise" />
      <div>
        <div className="ct-mCard--details">
          <p>{ele.matchName}</p>
          <p>${ele.price}</p>
        </div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default TicketCard;
