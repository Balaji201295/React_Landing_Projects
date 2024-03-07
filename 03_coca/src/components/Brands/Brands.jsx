import React from "react";
import { brands } from "../../constants";
import "./brands.css";
const Brands = () => {
  return (
    <div className="app__brands flex__center section__padding">
      {brands.map((item, index) => (
        <div className="app__brands-logo flex__center" key={index}>
          <img src={item.imgUrl} alt="Logo" />
        </div>
      ))}
    </div>
  );
};
export default Brands;
