import React from "react";
import { NavLink } from "react-router-dom";

export default function MediaCard(props) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto ">
        <div className="card shade mycard">
          <img src={props.imgsrc} className="card-img-top set-res" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.content}</p>
            <div className="text-center mt-4">
              <a href={props.link} target="__blank" className="btn btn-info">
                Go to Course
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
