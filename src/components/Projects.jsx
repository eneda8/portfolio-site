import React from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import { nanoid } from "nanoid";

const defaultDetails = {
  title: "",
  startDate: "",
  description: "",
  images: [],
  url: "",
  technologies: []
}

export default function Projects(props) {
  const [modal, setModal] = React.useState({modalShow: false, modalDetails: defaultDetails});

  const handleClose = () => setModal({modalShow:false, modalDetails: defaultDetails});
  const handleShow = (data) => setModal({modalShow: true, modalDetails: data});
  
  const projects = props.projects.map((project) =>{
    return (
      <div
        className="col-sm-12 col-md-6 col-lg-4"
        key={nanoid()}
        style={{ cursor: "pointer" }}
      >
        <span className="portfolio-item d-block">
          <div className="foto" onClick={()=> handleShow(project)}  >
            <div>
              <img src={project.images[0]} alt="projectImages"/>
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
        <h1 className="section-title">
          Projects
        </h1>
        <div className="col-md-12 mx-auto">
          <div className="row mx-auto">{projects}</div>
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

