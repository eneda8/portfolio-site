import React from "react";
import { nanoid } from "nanoid";

export default function Skills(props) {
  const skills = props.skills.icons.map(function (skill) {  

    return (
      <div id={skill.name.slice(0,2)} className="text-center skills-tile" key={nanoid()}>
        <i className={skill.class}></i> 
        <p className="text-center">{skill.name}</p>
      </div>
    );
  });

  return (
    <section id="skills">
      <h1 className="section-title text-white">Skills</h1>
      <div className="skills-container">{skills}</div>
    </section>
  );
};

