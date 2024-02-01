import React from "react";
import "./bootstrap/css/bootstrap.min.css";
import "./navbar.css";
import { FaCartArrowDown } from "react-icons/fa6";

function Navbar({ size, setShow }) {
  return (
    <nav className="d-flex justify-content-between px-5 fixed-item">
      <div onClick={() => setShow(true)}>
        <h1>Hermes.Com</h1>
      </div>

      <div onClick={() => setShow(false)}>
        <FaCartArrowDown style={{ fontSize: "40px" }} />
        <span>{size} </span>
      </div>
    </nav>
  );
}

export default Navbar;
