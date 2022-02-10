import React from "react";
import "./cardmenu.css";

const Cardmenu = () => {
  return (
    <>
      <div className="container border_menu">
        <nav className="navbar cardmenu_nav navbar-expand-lg navbar-light bg-light">
          <li className="navbar-brand">All post(32)</li>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active nav-link">Articles</li>
              <li className="nav-item nav-link">Event</li>
              <li className="nav-item dropdown">Education</li>
              <li className="nav-item">Job</li>
            </ul>
          </div>
          <div>
            <button type="button" className="btn cardmenu_btn btn-secondary">
              Write a Post &#x21e9;{" "}
            </button>
            <button type="button" className="btn cardmenu_btn btn-primary">
              <img
                className="join_png"
                src="https://cdn-icons-png.flaticon.com/512/456/456249.png"
                style={{ height: 15 }}
                alt=""
              />
              Join Group
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Cardmenu;
