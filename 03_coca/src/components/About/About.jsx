import React from "react";
import { Image_1 } from "../../assets";
import "./about.css";
import { about } from "../../constants";
const About = () => {
  return (
    <div
      className="app__about app__wrapper app__bg section__padding"
      id="about"
    >
      <div className="app__wrapper_img">
        <img src={Image_1} alt="About" />
      </div>
      <div className="app__wrapper_info">
        <h1 className="headtext">
          Make Your Website More User-Friendly for Search Engines
        </h1>
        <p className="p__inter">
          We'll match you with our team of expert strategists who will make sure
          your top-of-the-line strategies are always on target. Contact us today
          to get started!
        </p>
        <div className="app__about-data">
          {about.map((item, index) => {
            const { value, content } = item;
            return (
              <div key={index} className="app__about-info">
                <h3>{value}</h3>
                <p className="p__inter">{content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default About;
