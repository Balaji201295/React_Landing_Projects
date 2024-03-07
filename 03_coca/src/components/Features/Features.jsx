import React from "react";
import { features } from "../../constants";
import "./features.css";
const Features = () => {
  return (
    <div className="app__features flex__center section__padding" id="features">
      <h1 className="headtext">Awesome Features Optimizing Your Website</h1>
      <div className="app__features_container flex__center">
        {features.map((feature, index) => {
          const { icon, title, content } = feature;
          const IconImg = icon;
          return (
            <div className="app__features-card" key={index}>
              <div className="card__icon">
                <IconImg />
              </div>
              <h3>{title}</h3>
              <p className="p__inter">{content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Features;
