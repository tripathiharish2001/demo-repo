import React from "react";
import test from "../photos/test.png";
import Merchandise from "../components/Merchandise";
import Footer from "../components/Footer";

const Shop = () => {
  const arr = [
    {
      type: "merchandise",
      name: "T-Shirt",
      price: 2,
      qnty: 1,
    },
    {
      type: "merchandise",
      name: "T-Shirt",
      price: 2,
      qnty: 1,
    },
    {
      type: "merchandise",
      name: "T-Shirt",
      price: 2,
      qnty: 1,
    },
    {
      type: "merchandise",
      name: "T-Shirt",
      price: 2,
      qnty: 1,
    },
    {
      type: "merchandise",
      name: "T-Shirt",
      price: 2,
      qnty: 1,
    },
    {
      type: "merchandise",
      name: "T-Shirt",
      price: 2,
      qnty: 1,
    },
    {
      type: "merchandise",
      name: "T-Shirt",
      price: 2,
      qnty: 1,
    },
    {
      type: "merchandise",
      name: "T-Shirt",
      price: 2,
      qnty: 1,
    },
    {
      type: "merchandise",
      name: "T-Shirt",
      price: 4,
      qnty: 1,
    },
    {
      type: "merchandise",
      name: "T-Shirt",
      price: 6,
      qnty: 1,
    },
  ];

  return (
    <div className="ct-shop">
      <h3>Shop Items</h3>
      <div className="ct-shop--item">
        {arr.map((ele, i) => {
          return <Merchandise key={i} idx={i} ele={ele} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
