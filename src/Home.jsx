import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
import Common from "./Common";
import Home_img from "../src/Images/programmer.svg"

function Home() {
  return (
    <>
      <Common name="Get Started" target="/service" imgsrc = {Home_img} text="Learn Development with" def="A team of skilled Application Developers"  />
    </>
  );
}

export default Home;
