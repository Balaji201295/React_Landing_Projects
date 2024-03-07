import React from "react";
import { Image_2 } from "../../assets";
import "./cta.css";
const CTA = () => {
  return (
    <div className="app__cta section__margin">
      <div className="app__cta_content">
        <h1 className="headtext">
          Contact us today and let us know what you need
        </h1>
        <p className="p__inter">
          When does a mere internet 'SEO' company grow into a trusted partner
          that stays in front of the latest industry trends? When it's time to
          partner with Mocer, that's when.
        </p>
        <button type="button" className="custom__button">
          Contact With Us
        </button>
      </div>
      <div className="app__cta_img">
        <img src={Image_2} alt="" />
      </div>
    </div>
  );
};
export default CTA;
