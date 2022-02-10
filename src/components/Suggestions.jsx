import React from "react";
// import suggestion from "../assets/suggestion";
import "./suggestions.css";

const Suggestions = ({ suggestion }) => {
  return (
    <>
      <div className="d-flex my-4 justify-content-between align-items-center">
        <div className="d-flex gap-3 align-items-center">
          <div
            className="suggestion_logo"
            style={{
              backgroundImage: `url(${suggestion.img})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <p className="p-0 boldtext m-0">{suggestion.name}</p>
        </div>
        <div className="">
          <button className="btn btn-light btn-outline rounded-pill">
            {suggestion.follow ? "Follow" : "Follow"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Suggestions;
