import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";
import { nanoid } from "nanoid";

export default function Experience(props) {
  const timelineIcon = (<i className="fab fa-react experience-icon"></i>)
  const timelineIconStyle = ({ background: "#98b6b1", color: "#fff", textAlign: "center"})

  const experiences = props.experience.map(function(experience) {
    const techBadges = experience.technologies.map((tech) => {
      return (
        <Badge pill className="experience-badge mr-2 mb-2 text-black" bg={"#919191"} key={nanoid()}>
          {tech}
        </Badge>
      );
    });
    const mainTechBadges = experience.mainTech.map((tech) => {
      return (
        <Badge pill className="main-badge mr-2 mb-2" bg={"#919191"} key={nanoid()}>
          {tech}
        </Badge>
      );
    });
   
    return (
      <VerticalTimelineElement 
        date={experience.years} 
        iconStyle={timelineIconStyle} 
        icon={timelineIcon} key={nanoid()}
      >
        <div className="experience-info">{mainTechBadges}</div>
        <h3 className="experience-title">{experience.title}</h3>
        <h4 className="experience-subtitle">{experience.company}</h4>
        <div className="experience--badges-div">{techBadges}</div>
      </VerticalTimelineElement>
    );
  });
    
  return (
    <section id="resume">
      <div className="col-md-12 mx-auto">
        <div className="col-md-12">
          <h1 className="section-title text-center">Experience</h1>
        </div>
      </div>
      <div className="col-md-8 mx-auto">
        <VerticalTimeline>
          {experiences}
          <VerticalTimelineElement
            iconStyle={timelineIconStyle}
            icon={<i className="fas fa-hourglass-start mx-auto experience-icon"></i>}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
}

    
  


