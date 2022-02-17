import React from "react";
import "./sidetab.css";
import suggestion from "../assets/suggestion";
import Suggestions from "./Suggestions";

const SideTab = () => {
  return (
    <>
      <div className="d-flex justify-content-between sideinput p-2 mt-5">
        <div className="">
          <img
            className="mx-2"
            src="https://cdn-icons.flaticon.com/png/512/2838/premium/2838912.png?token=exp=1644491954~hmac=ef2714466f228be685f4104f08231c3c"
            style={{ height: 15 }}
            alt=""
          />
          <span>Noida, India</span>
        </div>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/61/61456.png"
            style={{ height: 20 }}
            alt=""
          />
        </div>
      </div>
      <div className="m-3 d-flex  gap-2">
        <img
          className="mt-1"
          src="https://cdn-icons-png.flaticon.com/512/545/545684.png"
          style={{ height: 20 }}
          alt=""
        />
        <div className="text-secondary">
          Your location will help us serve better and extend a personalised
          experience
        </div>
      </div>
      <div>
        <div className="d-flex gap-2 mt-5 aligh-item-center">
          <img
            src="https://cdn-icons.flaticon.com/png/512/4052/premium/4052096.png?token=exp=1644494379~hmac=4932b73eaa65c39a6a560e09031961a3"
            style={{ height: 25 }}
            alt=""
          />
          <h4>RECOMMENDED GROUP</h4>
        </div>
        {suggestion.map((sug) => {
          return <Suggestions key={sug.name} suggestion={sug} />;
        })}
      </div>
    </>
  );
};

export default SideTab;
