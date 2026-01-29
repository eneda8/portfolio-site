import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";
import { nanoid } from "nanoid";

export default function Experience(props) {
  const timelineIcon = (<i className="fa-solid fa-code experience-icon"></i>)
  const timelineIconStyle = ({ background: "#98b6b1", color: "#fff", textAlign: "center", paddingBottom: "42px"})

  const coursework = Array.isArray(props.coursework) ? props.coursework : [];
  const courses = coursework.map(function(course) {
    const topicBadges = course.topics.map((topic) => {
      return (
        <Badge pill className="topic-badge mr-2 mb-2 text-black" key={nanoid()}>
          {topic}
        </Badge>
      );
    });
    const projectsBadges = course.projects.map((project) => {
      return (
        <Badge pill className="project-badge mb-2" key={nanoid()}>
          {project}
        </Badge>
      );
    });
   
    return (
      <VerticalTimelineElement 
        date={course.dates} 
        iconStyle={timelineIconStyle} 
        icon={timelineIcon} key={nanoid()}
      >
        <div className="projects-info">{projectsBadges}</div>
        <h4 className="course-title">{course.title}</h4>
        <h5 className="course-subtitle">{course.company}</h5>         
        <p className="d-inline course-length">Course Length: {course.hours}</p>
        {course.certificate && (() => {
          const isExternal = course.certificate.startsWith('http');
          const href = isExternal ? course.certificate : encodeURI(`/${course.certificate}`);
          return (
            <span>
              {' '}
              |{' '}
              <a
                className="d-inline text-decoration-none"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                {...(!isExternal ? { download: true } : {})}
              >
                Certificate
              </a>
            </span>
          );
        })()}
        {course.description && <p>{course.description}</p>}
        <div className="topics--badges-div">{topicBadges}</div>
      </VerticalTimelineElement>
    );
  });
    
  return (
    <section id="resume">
      <div className="col-md-12 mx-auto">
        <div className="col-md-12">
          <h1 className="section-title text-center">Courses</h1>
        </div>
      </div>
      <div className="col-md-8 mx-auto">
        <VerticalTimeline>
          {courses}
          <VerticalTimelineElement
            iconStyle={timelineIconStyle}
            icon={<i className="fas fa-hourglass-start mx-auto experience-icon"></i>}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
}

    
  


