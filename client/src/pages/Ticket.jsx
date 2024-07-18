import React from "react";
import TicketCard from "../components/TicketCard";
import Footer from "../components/Footer";

const Ticket = () => {
  const arr = [
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
  ];
  return (
    <div className="ct-ticket">
      <h3>Ticket</h3>
      <div className="ct-shop--item">
        {arr.map((ele, i) => {
          return <TicketCard key={i} idx={i} ele={ele} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Ticket;
