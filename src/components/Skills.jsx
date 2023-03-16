import React from "react";
import { nanoid } from "nanoid";

export default function Skills(props) {
 
  const skills = props.skills.icons.map(function (skill) {
    return (
      <li className="list-inline-item mx-3" key={nanoid()}>
        <span>
          <div className="text-center skills-tile">
            <i className={skill.class} style={{ fontSize: "220%" }}>
              <p className="text-center" style={{ fontSize: "30%", marginTop: "4px" }}>
                {skill.name}
              </p>
            </i>
          </div>
        </span>
      </li>
    );
  });

  return (
    <section id="skills">
      <div className="col-md-12">
        <div className="col-md-12">
          <h1 className="section-title text-white">Skills</h1>
        </div>
        <div className="col-md-12 text-center">
          <ul className="list-inline mx-auto skill-icon">{skills}</ul>
        </div>
      </div>
    </section>
  );
};

