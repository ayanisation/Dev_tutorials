import React from "react";
import "./App.css";
import MediaCard from "./MediaCard";
import Courses from "./Courses";

function Service() {
  return (
    <>
      <div className="my-5 container">
        <h1 className="text-center">Our Courses</h1>
        <hr/>
      </div>
      <div className="container mt-3 mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Courses.map((element, index) => {
                return (
                  <MediaCard
                    key={index}
                    title={element.title}
                    imgsrc={element.imgsrc}
                    content={element.content}
                    link={element.link}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
