import React from "react";
import { Icon } from "@iconify/react";
import profilePic from "/images/myProfile.jpg";

export default function About(props) {
  const header = props.basicInfo.description_header;
  const bio = props.basicInfo.description;

  return (
    <section id="about">
      <div className="col-md-12">
        <h1 className="section-title" style={{color: "black"}}>About Me</h1>
        <div className="row center mx-auto mb-5">
          <div className="col-md-4 mb-5 center">
            <div className="polaroid">
              <span>
                <img height="250px" src={profilePic} alt="Avatar placeholder"/>
                <Icon className="about--icons" icon="vscode-icons:file-type-node"/>
                <Icon className="about--icons" icon="vscode-icons:file-type-mongo"/>
                <Icon className="about--icons" icon="logos:react"/>
              </span>
            </div>
          </div>

          <div className="col-md-8 center">
            <div className="col-md-10">
              <div className="card">
                <div className="card-header">
                  <span className="iconify" data-icon="emojione:red-circle" data-inline="false"></span>
                  <span className="iconify" data-icon="twemoji:yellow-circle" data-inline="false"></span>
                  <span className="iconify" data-icon="twemoji:green-circle" data-inline="false"></span>
                </div>
                <div className="card-body font-trebuchet text-justify ml-3 mr-3">
                  <h2 id="wave">{header}</h2>
                  <p>{bio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    );
}

