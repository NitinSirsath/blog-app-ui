import React from "react";
// import Cardmenu from "./Cardmenu";
import "./card.css";

const Card = ({ props }) => {
  return (
    <>
      {/* <Cardmenu /> */}
      <div className="container ">
        <div className="card  card_custom my-3">
          {props.img ? (
            <div
              className="card_hero_img"
              style={{ backgroundImage: `url(${props.img})` }}
            ></div>
          ) : (
            <> </>
          )}
          <div className="card-body ">
            <h6 className="card-text  card_tag">{props.tag}</h6>
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="card-title">{props.title}</h5>

              <div>
                <div className="dropdown dropstart">
                  <button
                    className="btn shadow-none"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    •••
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item">Edit</a>
                    </li>
                    <li>
                      <a className="dropdown-item">Report</a>
                    </li>
                    <li>
                      <a className="dropdown-item">Option 3</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column">
              {props.date || props.location ? (
                <div className="d-flex gap-5 w-70">
                  <p className="p-0 boldtext m-0 ">{props.date}</p>
                  <p className="p-0 boldtext m-0 ">
                    <img
                      src="https://cdn-icons.flaticon.com/png/512/2838/premium/2838912.png?token=exp=1644491954~hmac=ef2714466f228be685f4104f08231c3c"
                      style={{ height: 15, paddingRight: 5 }}
                      alt=""
                    />
                    {props.location}
                  </p>
                </div>
              ) : (
                <> </>
              )}
              {props.btnText ? (
                <button
                  className="btn custom_color btn-outline-secondary"
                  style={{ color: props.btnColor }}
                  type="button"
                >
                  {props.btnText}
                </button>
              ) : (
                <> </>
              )}
            </div>

            <p className="card-text">{props.desc}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex gap-2 align-items-center">
                <div
                  className="user_pfp"
                  style={{
                    backgroundImage: `url(${props.pfp})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <p className="p-0 boldtext m-0">{props.user}</p>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <p className="p-0 m-0">
                  <img
                    src="https://cdn-icons.flaticon.com/png/512/2874/premium/2874780.png?token=exp=1644482225~hmac=25c5483add4c69a6965723651db7d9bb"
                    style={{ height: 15 }}
                    alt=""
                  />
                  {props.views}
                </p>
                <button className="btn btn-custom">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/929/929539.png"
                    style={{ height: 15 }}
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Card;
