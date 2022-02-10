import React from "react";
import "./navbar.css";
// import styled from 'styled-components'

const Navbar = () => {
  return (
    <>
      {/* <div  class="d-flex justify-content-between">
    <div className='p-4'><span className='text-success'>ATG</span>.WORLD</div>
    <div>

<div class="input-group pb-4 pt-4">
  <input type="text" class="form-control w-100 rounded-pill" placeholder="Search your favourite group in ATG" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
</div>

    </div>
    <div className='p-4'><button >signup</button></div>
    </div> */}
      <div className="nav-bar vw-100">
        <div className="p-3 ps-5">
          <span className="text-success">ATG</span>.WORLD
        </div>

        {/* <div class="input-group p-2 ">
          <input type="text" className="form-control w-30  rounded-pill" placeholder="Search your favourite group in ATG" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
        </div> */}

        {/* <div className="input-group rounded-pill">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              &
            </span>
          </div>
          <input
            type="text"
            className="form-control "
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div> */}
        {/* <div className="input-group">
          <span className="input-group-prepend">
            <button className="btn rounded-pill border-0 ml-5" type="button">
              
            </button>
          </span>
          <input
            className="form-control py-2 rounded-pill mr-n1 pr-n5"
            placeholder="Search your favourite group in ATG"
            type="search"
            value=""
          />
        </div> */}
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
          Create account.<span className="text-primary">It's free</span>
          <span> &#8595;</span>
        </p>
      </div>
    </>
  );
};

export default Navbar;
