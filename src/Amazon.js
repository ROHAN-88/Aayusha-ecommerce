import React, { useEffect, useState } from "react";
import { details } from "./cards-details";
import "./bootstrap/css/bootstrap.min.css";

import Cards from "./cards";

function Amazon({ handleClick }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const details = async () => {
      const apis = await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setData(json));
    };
    details();
  }, []);
  console.log(data);
  return (
    <div>
      <section className="d-flex flex-wrap justify-content-center">
        {data?.map((item) => (
          <Cards item={item} key={item.id} handleClick={handleClick} />
        ))}
      </section>
    </div>
  );
}

export default Amazon;
