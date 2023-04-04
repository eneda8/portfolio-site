import React from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import { nanoid } from "nanoid";
import Image from 'react-bootstrap/Image'

const defaultDetails = {
  title: "",
  startDate: "",
  description: "",
  images: [],
  git: "",
  url: "",
  technologies: []
}

export default function Projects(props) {
  const [modal, setModal] = React.useState({modalShow: false, modalDetails: defaultDetails});

  const handleClose = () => setModal({modalShow:false, modalDetails: defaultDetails});
  const handleShow = (data) => setModal({modalShow: true, modalDetails: data});
  
  const projects = props.projects.map((project) =>{
    return (
      <div className="col-sm-12 col-md-6 col-lg-4 h-100 mx-s-5" key={nanoid()}>
        <span className="portfolio-item d-block">
          <div className="foto" onClick={()=> handleShow(project)}  >
            <div>
              <Image fluid={true} src={project.images[0]} alt="projectImages"/>
              <span className="project-date">{project.startDate}</span>
              <p className="project-title-settings mt-3">{project.title}</p>
            </div>
          </div>
        </span>
      </div>
    );
  });
    
  return (
    <section id="portfolio">
      <div className="col-md-12">
        <h1 className="section-title" style={{"paddingBottom": "3%"}}>
          Projects
        </h1>
        <div className="col-md-12">
          <h2 className='subheading'>Full-Stack Apps</h2>
          <div className="full-stack row">{projects.slice(0,2)}</div>
          <h2 className='subheading'>Front-End Apps & Games</h2>
          <div className="front-end row">{projects.slice(2)}</div>
        </div>
        <ProjectDetailsModal
          show={modal.modalShow}
          onHide={handleClose}
          data={modal.modalDetails}
        />
      </div>
    </section>
  );
};

