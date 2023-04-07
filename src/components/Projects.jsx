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
      <div className="col-xs-12 col-sm-4 col-md-3 mx-s-5 foto" key={nanoid()} onClick={()=> handleShow(project)}>
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
      <h2 className="subheading mb-4">Full-Stack Apps</h2>
      <div id="full-stack" className="mb-0">{projects.slice(0,2)}</div>
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
          <h2 className="subheading mb-4 mt-1">Front-End Apps & Games</h2>
          <div id="front-end" className="row">{projects.slice(2)}</div>
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

