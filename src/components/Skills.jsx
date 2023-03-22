import React from "react";
import { nanoid } from "nanoid";

export default function Skills(props) {
  const skills = props.skills.icons.map(function (skill) {  
    const handleHover = (e) => {
      const icon = e.target.querySelector("i");
      if(icon){icon.classList.toggle("colored")};
    };
    
    return (
      <li className="list-inline-item mx-3 " key={nanoid()}>
        <div 
          className="text-center skills-tile"
          onMouseEnter={handleHover} onMouseLeave={handleHover} 
          >
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

