import React from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import { nanoid } from "nanoid";
import Image from 'react-bootstrap/Image'
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

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
  
  const [open, setOpen] = React.useState(false);

  const projects = props.projects.map((project) =>{
    return (
      <div className="col-sm-4 col-md-3 foto mx-3" key={nanoid()} onClick={()=> handleShow(project)}>
        <Image fluid={true} src={project.images[0]} alt="projectImages"/>
        <span className="project-date">{project.startDate}</span>
        <p className="project-title-settings mt-3">{project.title}</p>
      </div>
    );
  });
    
  return (
    <section id="portfolio">
      <h1 className="section-title mb-0 pb-4">
        Projects
      </h1>
      <h3 className="subheading mb-4">Full-Stack Apps</h3>
      <div className="m-0 p-0">
        <div id="full-stack" className="row mb-0 w-100 mx-0 px-0">{projects.slice(0,2)}</div>
      </div>
      <Button 
        className="button mb-4" 
        onClick={() => setOpen(!open)} 
        aria-controls="collapse" 
        aria-expanded={open}
        >
        Show {!open? 'more' : 'less'}
      </Button>
      <Collapse in={open} timeout={"500"}>
        <div id="collapse m-0 p-0">
          <h3 className="subheading mb-4 mt-1">Front-End Apps & Games</h3>
          <div id="front-end" className="row w-100 mx-0 px-0">{projects.slice(2)}</div>
        </div>
      </Collapse>
      <ProjectDetailsModal
      show={modal.modalShow}
      onHide={handleClose}
      data={modal.modalDetails}
      />
    </section>
  );
};

