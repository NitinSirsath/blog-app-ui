import React from "react";
import "./navbar.css";
import Modal from "react-modal";
import { useState } from "react";
import FormModal from "./FormModal";
// import styled from 'styled-components'

const Navbar = () => {
  const [modal, setModal] = useState(false);

  let customStyles;
  if (window.outerWidth > 768) {
    customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
      },
    };
  } else {
    customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -30%)",
        borderRadius: "16px 16px 0 0",
      },
    };
  }

  return (
    <>
      <div className="nav-bar vw-100">
        <div className="p-3 ps-5">
          <span className="text-success">ATG</span>.WORLD
        </div>

        <div className="form-group  has-search">
          <span className=" form-control-feedback">
            <img
              src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-1024.png"
              style={{ height: 25 }}
              alt=""
            />
          </span>
          <input
            type="text"
            className="form-control rounded-pill"
            placeholder="Search your favourite group in ATG"
          />
        </div>
        <p className="m-0 pe-4 grid-item p-0">
          Create account.
          <span onClick={() => setModal(true)} className="text-primary signing">
            It's free
          </span>
          <span> &#8595;</span>
        </p>

        <Modal style={customStyles} isOpen={modal}>
          <FormModal className="modal" setModal={setModal} />
        </Modal>
      </div>
    </>
  );
};

export default Navbar;
