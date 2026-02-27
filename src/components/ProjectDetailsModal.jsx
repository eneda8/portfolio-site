import React from "react";
import Modal from "react-bootstrap/Modal";
import AwesomeSlider from "react-awesome-slider";
import lightSlider from "../scss/light-slider.scss?inline";
import darkSlider from "../scss/dark-slider.scss?inline";
import {InnerImageZoom} from 'react-inner-image-zoom';

export default function ProjectDetailsModal(props) {
    const {images, title, description, url, git, technologies} = props.data;
    const tech = technologies.map((icons, i) => {
      return (
        <li className="list-inline-item mx-3" key={i}>
          <span>
            <div className="text-center">
              <i className={icons.class} style={{ fontSize: "300%" }}>
                <p className="text-center" style={{ fontSize: "30%" }}>
                  {icons.name}
                </p>
              </i>
            </div>
          </span>
        </li>
      );
    });
    const img = images.map((elem) => {
      return <div className="d-block w-100" key={elem}><InnerImageZoom src={elem} /></div>;
    });
    
    return (
      <Modal
        show={props.show}
        onHide={props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-inside"
      >
        <span onClick={props.onHide} className="modal-close">
          <i className="fa-solid fa-xmark fa-2xl"></i>
        </span>

        <div className="col-md-12">
          <div className="col-md-10 mx-auto" style={{ paddingBottom: "50px" }}>
            <div className="slider-tab">
              <span className="iconify slider-iconify" data-icon="emojione:red-circle" data-inline="false" 
              ></span>
              <span className="iconify slider-iconify" data-icon="twemoji:yellow-circle" data-inline="false"></span>
              <span className="iconify slider-iconify" data-icon="twemoji:green-circle" data-inline="false"></span>
            </div>
            {img.length > 1 &&
             <AwesomeSlider cssModule={[lightSlider, darkSlider]} animation="scaleOutAnimation" className="slider-image">
              {img}
            </AwesomeSlider> 
            }
            {img.length == 1 && img}
          </div>
          <div className="col-md-10 mx-auto">
            <h3 className="modal--title">{title} 
            </h3>
            {url && 
              <a href={url} target="_blank" rel="noopener noreferrer" className="link-href">
                Project<i className="fas fa-external-link-alt"></i>
              </a>
              } 
              {git && 
              <a href={git} target="_blank" rel="noopener noreferrer" className="link-href">
                Repo<i className="fa-brands fa-square-github fa-lg"></i>
              </a>
              } 
              <hr className="pl-5" />
            <p id="desc" className="modal-description" dangerouslySetInnerHTML={{__html: description}}></p>
            <div className="col-md-12 text-center">
              {props.data.technologies && <ul className="list-inline mx-auto">{tech}</ul>}
            </div>
          </div>
        </div>
      </Modal>
    );
  
}

