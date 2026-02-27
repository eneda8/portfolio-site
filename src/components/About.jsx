import React from "react";
import { Icon } from "@iconify/react";
import profilePic from "/images/profilePic.webp";
import Image from 'react-bootstrap/Image'

export default function About(props) {
  const header = props.basicInfo.description_header;
  const bio = props.basicInfo.description;

  return (
    <section id="about">
      <h1 className="section-title">About Me</h1>
      <div className="col-lg-12 centered pb-md-5">
        <div className="row pb-lg-5 centered ">
          <div className="col-lg-4 mb-md-5 mr-5 centered">
            <div className="polaroid" >
                <Image className="profilePic" fluid={true} height="250px" src={profilePic} alt="Eneda Xhambazi"/>
                <div className="polaroid--icons">
                  <Icon className="polaroid--icon" icon="logos:react"/>
                  <Icon className="polaroid--icon" icon="logos:typescript-icon"/>
                  <Icon className="polaroid--icon" icon="logos:nextjs-icon"/>
                  <Icon className="polaroid--icon" icon="logos:tailwindcss-icon"/>
                </div>
            </div>   
          </div>
  
          <div className="col mb-5 pt-5 pt-lg-0 centered">
            <div className="card px-0">
              <div className="card-header">
                <span className="iconify" data-icon="emojione:red-circle" data-inline="false"></span>
                <span className="iconify" data-icon="twemoji:yellow-circle" data-inline="false"></span>
                <span className="iconify" data-icon="twemoji:green-circle" data-inline="false"></span>
              </div>
              <div className="mini-page">
                <div className="mini-nav">
                  <span className="mini-logo">EX</span>
                  <i className="fa-solid fa-bars"></i>
                </div>
                <div className="row overflow-hidden">
                  <div className="col-1 p-0"></div>
                  <div className="mini-main card-body col-sm-10 px-5" >
                    <h2 id="wave">{header}</h2>
                    <p className="bio" style={{whiteSpace: "pre-wrap"}}  dangerouslySetInnerHTML={{__html: bio}}></p>
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

