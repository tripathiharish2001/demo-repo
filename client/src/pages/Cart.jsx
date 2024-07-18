import React, { useEffect, useState } from "react";
import CartItemCard from "../components/CartItemCard";

const Cart = () => {
  const [arr, setArr] = useState([
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
    {
      type: "ticket",
      matchName: "X vs Y",
      date_time: "dd/mm/yy & xx:yy",
      price: 7,
      qnty: 1,
    },
    {
      type: "ticket",
      matchName: "X vs Y",
      date_time: "dd/mm/yy & xx:yy",
      price: 3,
      qnty: 1,
    },
    {
      type: "ticket",
      matchName: "X vs Y",
      date_time: "dd/mm/yy & xx:yy",
      price: 9,
      qnty: 1,
    },
  ]);

  const shippingPrice = 10;
  const taxAmount = 5;

  // seperate overall price
  const [totalMerchandisePrice, setTotalMerchandisePrice] = useState(0);
  const [totalTicketPrice, setTotalTicketPrice] = useState(0);

  // calculating price/after qnty change/
  const priceSet = () => {
    var dataM = 0;
    var dataT = 0;

    arr.forEach((ele) => {
      if (ele.type === "merchandise") {
        dataM += Number(ele.price) * Number(ele.qnty);
      } else {
        dataT += Number(ele.price) * Number(ele.qnty);
      }
    });

    setTotalMerchandisePrice(dataM);
    setTotalTicketPrice(dataT);
  };

  // handling the quantity change
  const handleQntyChange = async (idx, qnty) => {
    if (Number(qnty) === 0) {
      console.log("Zero Mila");
      const tempArr = [];
      arr.forEach((ele, i) => {
        if (i !== idx) tempArr.push(arr[i]);
      });
      setArr(tempArr);
      return;
    } else {
      console.log(qnty, idx);
      arr[idx].qnty = Number(qnty);
      priceSet();
    }
  };

  useEffect(() => {
    priceSet();
  }, [arr]);

  return (
    <div className="ct-cart">
      <div className="ct-cart--head">Shopping Cart</div>
      <div className="ct-cart--block">
        <div>
          {arr.map((item, i) => (
            <CartItemCard
              key={i}
              item={item}
              idx={i}
              handleQntyChange={handleQntyChange}
            />
          ))}
        </div>
        <div className="ct-cart--final">
          <div className="order-summary">
            <h2>Order Summary</h2>
            <table>
              <tbody>
                <tr>
                  <td>Merchandise</td>
                  <td>${totalMerchandisePrice}</td>
                </tr>
                <tr>
                  <td>Tickets</td>
                  <td>${totalTicketPrice}</td>
                </tr>
                <tr>
                  <td>Shipping & Handling</td>
                  <td>${shippingPrice}</td>
                </tr>
                <tr>
                  <td>Tax</td>
                  <td>${taxAmount}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Order Total</strong>
                  </td>
                  <td>
                    <strong>
                      $
                      {shippingPrice +
                        taxAmount +
                        totalMerchandisePrice +
                        totalTicketPrice}
                    </strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <button className="ct-cart--btn">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

// Item :

// 1. Merchandise
// type : Merchandise
// Product name
// Product price
// Qnty

// 2. Ticket
// type : ticket
// Match : a vs b
// Date / Time
// price
// qnty
