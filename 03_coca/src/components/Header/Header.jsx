import React from "react";
import { Banner } from "../../assets";
import "./header.css";
const Header = () => {
  return (
    <header className="app__wrapper flex__center section__padding">
      <div className="app__wrapper_info">
        <h1 className="app__header-h1">
          Growing your business comes down to 1- thing
        </h1>
        <p className="p__inter">
          That's where we come in. We make it easy for you to boost your online
          search results and grow your business online. Contact us today to get
          started!
        </p>
        <button type="button" className="custom__button">
          Get Started Free
        </button>
      </div>
      <div className="app__wrapper_img">
        <img src={Banner} alt="Banner" />
      </div>
    </header>
  );
};
export default Header;
