import React from "react";
import "./strategies.css";
import { strategies } from "../../constants";
const Strategies = () => {
  return (
    <div className="app__strategy flex__center section__padding">
      <h1 className="headtext">
        Qualities & Customizable Website Optimization Strategies
      </h1>
      <div className="app__strategy_container">
        {strategies.map((item, index) => {
          const { title, content } = item;
          return (
            <div className="app__strategy_item" key={index}>
              <h3>{title}</h3>
              <p>{content}</p>
            </div>
          );
        })}
      </div>
      <div className="app__strategy_button">
        <button type="button" className="custom__button">
          Explore All Strategies
        </button>
      </div>
    </div>
  );
};
export default Strategies;
