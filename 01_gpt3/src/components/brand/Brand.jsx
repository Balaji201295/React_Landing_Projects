import React from "react";
import "./brand.css";
import { Google, Slack, Atlassian, DropBox, Shopify } from "../../assets";
const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={Google} alt="Google" />
      </div>
      <div>
        <img src={Slack} alt="Slack" />
      </div>
      <div>
        <img src={Atlassian} alt="Atlassian" />
      </div>
      <div>
        <img src={DropBox} alt="DropBox" />
      </div>
      <div>
        <img src={Shopify} alt="Shopify" />
      </div>
    </div>
  );
};
export default Brand;
