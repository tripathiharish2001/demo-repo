import React from "react";
import test from "../photos/shop.png";

const Merchandise = ({ ele }) => {
  return (
    <div className="card-merchandise">
      <img src={test} alt="merchandise" />
      <div>
        <div className="ct-mCard--details">
          <p>{ele.name}</p>
          <p>${ele.price}</p>
        </div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Merchandise;
