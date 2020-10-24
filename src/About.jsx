import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
import Common from "./Common";
import About_img from "../src/Images/businessladies.svg";

function About() {
  return (
    <>
      <Common
        name="Contact us"
        target="/contact"
        imgsrc={About_img}
        text="All about"
        def = "Crew Members:"
        members={
          <>
            <a className="members ml-5" target="_blank" href="https://www.linkedin.com/in/ayan-khan-664324192/">
              Ayan Khan
            </a>
            <a className="members ml-5" target="_blank" href="https://www.linkedin.com/in/yash-johri-61014717b/">
              Yash Johri
            </a>
            <a className="members ml-5" target="_blank" href="https://www.linkedin.com/in/sparsh03b/">
              Sparsh Bansal
            </a>
            <a className="members ml-5" target="_blank" href="https://www.linkedin.com/in/md-ruhulamin-khan-126a80184/">
              Ruhulamin Khan
            </a>
            <a className="members ml-5" target="_blank" href="https://www.linkedin.com/in/shahrukhjadara/">
              Shahrukh Jadara
            </a>
            <a className="members ml-5" target="_blank" href="https://www.linkedin.com/in/md-sahil-khan-412799179/">
              Sahil Khan
            </a>
          </>
        }
      />
    </>
  );
}

export default About;
