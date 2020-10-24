import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";


function Common(props) {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.text}
                    <strong className="brand-name"> TheCodeCrew </strong>
                  </h1>
                  <h2 className="my-3">
                    {props.def}
                  </h2>
                  {props.members}
                  <div className="mt-4">
                    <NavLink to={props.target} className="btn-get-started">
                      {props.name}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={props.imgsrc} className="img-fluid animated resolve" alt="home img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common;
