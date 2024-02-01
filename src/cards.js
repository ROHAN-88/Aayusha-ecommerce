import React from "react";
// import detail from "./cards-details";
import "./cards.css";

const Cards = ({ item, handleClick }) => {
  const { image, price, title } = item;

  return (
    <div className="card ">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={image} />
      </div>

      <div>
        {" "}
        <h3>{title}</h3>
        {/* <h4>{author}</h4> */}
        <h4>${parseInt(price)}</h4>
        <button onClick={() => handleClick(item)}>Add Cart</button>
      </div>
    </div>
  );
};

export default Cards;
