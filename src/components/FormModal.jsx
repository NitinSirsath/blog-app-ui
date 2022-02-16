import React from "react";
import "./formmodal.css";

const FormModal = ({ setModal }) => {
  return (
    <div className="modal_container">
      {/* <div className="bg-ligh">
        <h3 className="text-danger">hello guys im your host judo sloth</h3>
        <button className="btn btn-danger" onClick={() => setModal(false)}>
          close modal
        </button>
        <img src="./img/form.svg" height="500px" alt="" />
      </div> */}
      <div className="heading_box_form c-grid">
        <div className="h8 heading_form">
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now 🤘🏼
        </div>
      </div>
      <div className="wrapper_form d-flex">
        <div className="left_form">
          <div className="h2">Create Account</div>
          <div className="signup_form_wrapper">
            <div className="d-flex form_one">
              <input className="m-0 " placeholder="First Name" type="text" />
              <input className="m-0" placeholder="Last Name" type="text" />
            </div>
            <div className="d-flex form_two flex-column ">
              <input className="m-0" placeholder="Email" type="text" />
              <input className="m-0" placeholder="Password" type="text" />
              <input
                className="m-0"
                placeholder="Confirm Password"
                type="text"
              />
              <div>
                <button className="btn btn-primary">Create Account</button>
              </div>
            </div>
          </div>
        </div>
        <div className="right_form c-grid ">
          <img src="./img/form.svg" height="300px" alt="" />
        </div>
      </div>
    </div>
  );
};

export default FormModal;
