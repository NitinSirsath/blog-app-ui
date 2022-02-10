import React from "react";
import "./cardmenu.css";

const Cardmenu = () => {
  return (
    <>
      <div className="container border_menu">
        <nav className="navbar cardmenu_nav navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            All post(32)
          </a>
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
              <li className="nav-item dropdown">
                <a
                  className="nav-link "
                  href=""
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="">
                  Job
                </a>
              </li>
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
