import React from "react";
// import styled from 'styled-components'
import "./mainbg.css";

const Mainbg = () => {
  return (
    <div className="position-relative">
      <div className="mobile-navs">
        <button
          type="button"
          className="btn btn-outline-secondary text-white border-white"
        >
          {"<-"}
        </button>

        <button
          type="button"
          class="btn btn-outline-secondary text-white border-white"
        >
          Join Group
        </button>
      </div>
      <div className="wrapper">
        <div className="bottom-flex container">
          <p className="heading_mainbg">Computer Engineering</p>
          <p className="subheading_mainbg">
            142,765 Computer Engineers follow this
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mainbg;