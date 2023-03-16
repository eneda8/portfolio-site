import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";
import { nanoid } from "nanoid";

export default function Experience(props) {
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
        className="vertical-timeline-element--work"
        date={experience.years}
        iconStyle={{
          background: "#AE944F",
          color: "#fff",
          textAlign: "center",
        }}
        icon={<i className="fab fa-angular experience-icon"></i>}
        key={nanoid()}
      >
        <div style={{ textAlign: "left", marginBottom: "4px" }}>
          {mainTechBadges}
        </div>
        <h3 className="vertical-timeline-element-title" style={{ textAlign: "left" }}>
          {experience.title}
        </h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ textAlign: "left" }}>
          {experience.company}
        </h4>
        <div style={{ textAlign: "left", marginTop: "15px" }}>
          {techBadges}
        </div>
      </VerticalTimelineElement>
    );
  });
    
  return (
    <section id="resume" className="pb-5">
      <div className="col-md-12 mx-auto">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span className="text-black" style={{ textAlign: "center" }}>Experience</span>
          </h1>
        </div>
      </div>
      <div className="col-md-8 mx-auto">
        <VerticalTimeline>
          {experiences}
          <VerticalTimelineElement
            iconStyle={{
              background: "#AE944F",
              color: "#fff",
              textAlign: "center",
            }}
            icon={
              <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
            }
          />
        </VerticalTimeline>
      </div>
    </section>
  );
}

    
  


