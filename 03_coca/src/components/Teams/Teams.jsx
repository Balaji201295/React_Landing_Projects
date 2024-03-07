import React from "react";
import "./teams.css";
import { teams } from "../../constants";
const Teams = () => {
  return (
    <div className="app__team section__padding" id="team">
      <div className="app__team_heading">
        <h1 className="headtext">Get to know our mastah & super keren</h1>
        <p className="p__inter">
          We provide SEO services to help your website rank higher on search
          engines like Google.
        </p>
      </div>
      <div className="app__team_container">
        {teams.map((person, index) => {
          const { imgUrl, name, position } = person;
          return (
            <div className="app__team_member" key={index}>
              <img src={imgUrl} alt={name} />
              <h3>{name}</h3>
              <p className="p__inter">{position}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Teams;
