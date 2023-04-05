import React from "react";
import { nanoid } from "nanoid";

export default function Skills(props) {
  const skills = props.skills.icons.map(function (skill) {  

    return (
      <li className="list-inline-item mx-lg-3 " key={nanoid()}>
        <div id={skill.name.slice(0,2)} className="text-center skills-tile">
           <i className={skill.class}></i> 
          <p className="text-center">{skill.name}</p>
        </div>
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

