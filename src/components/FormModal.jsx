import React, { useState } from "react";
import AuthForm from "./AuthForm";
import "./formmodal.css";

const FormModal = ({ setModal }) => {
  const [formType, setFormType] = useState("SignUp");

  return (
    <>
      <div className="close_modal" onClick={() => setModal(false)}>
        X
      </div>
      <div className="modal_container">
        {/* <div className="bg-ligh">
        <h3 className="text-danger">hello guys im your host judo sloth</h3>
        <button className="btn btn-danger" onClick={() => setModal(false)}>
          close modal
        </button>
        <img src="./img/form.svg" height="500px" alt="" />
      </div> */}
        <div className="laptop-only">
          <div className="heading_box_form c-grid">
            <div className="h8 heading_form">
              Let's learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </div>
          </div>
        </div>
        <div>
          <AuthForm type={formType} setFormType={setFormType} />
        </div>
      </div>
    </>
  );
};

export default FormModal;
