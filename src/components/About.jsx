import React from "react";
import { Icon } from "@iconify/react";
import profilePic from "/images/myProfile.png";

export default function About(props) {
  const header = props.basicInfo.description_header;
  const bio = props.basicInfo.description;

  return (
    <section id="about">
      <h1 className="section-title">About Me</h1>
      <div className="col-md-12 centered pb-5">
        <div className="row pb-5 centered ">
          <div className="col-md-4 mb-5 mr-5 centered">
            <div className="polaroid" >
                <img height="250px" src={profilePic} alt="Avatar placeholder"/>
                <div className="polaroid--icons">
                  <Icon className="polaroid--icon" icon="vscode-icons:file-type-mongo"/>
                  <Icon className="polaroid--icon" icon="simple-icons:express" />
                  <Icon className="polaroid--icon" icon="logos:react"/>
                  <Icon className="polaroid--icon" icon="vscode-icons:file-type-node"/>
                </div>
            </div>   
          </div>
  
          <div className="col mb-5 centered">
            <div className="card px-0">
              <div className="card-header">
                <span className="iconify" data-icon="emojione:red-circle" data-inline="false"></span>
                <span className="iconify" data-icon="twemoji:yellow-circle" data-inline="false"></span>
                <span className="iconify" data-icon="twemoji:green-circle" data-inline="false"></span>
              </div>
              <div className="mini-page">
                <div className="mini-nav">
                  <span className="mini-logo">ex</span>
                  <i className="fa-solid fa-bars"></i>
                </div>
                <div className="row overflow-hidden">
                  <div className="col-1 p-0"></div>
                  <div className="mini-main card-body col-10" >
                    <h2 id="wave">{header}</h2>
                    <p className="bio" style={{whiteSpace: "pre-wrap"}}>{bio}</p>
                  </div>
                  <div className="col-1 p-0"></div>
                  <div className="mini-footer"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

