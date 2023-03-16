import React from "react";
import { Icon } from "@iconify/react";
import profilePic from "/images/myProfile.jpg";

export default function About(props) {
  const header = props.basicInfo.description_header;
  const bio = props.basicInfo.description;

  return (
    <section id="about">
      <div className="col-md-12">
        <h1 style={{ color: "black" }}>About</h1>
        <div className="row center mx-auto mb-5">
          <div className="col-md-4 mb-5 center">
            <div className="polaroid">
              <span style={{ cursor: "auto" }}>
                <img height="250px" src={profilePic} alt="Avatar placeholder"/>
                <Icon
                  icon="vscode-icons:file-type-node"
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                />
                <Icon
                  icon="vscode-icons:file-type-mongo"
                  style={{ fontSize: "500%", margin: "9% 5% 0 5%" }}
                />
                <Icon
                  icon="logos:react"
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                />
              </span>
            </div>
          </div>

          <div className="col-md-8 center">
            <div className="col-md-10">
              <div className="card">
                <div className="card-header">
                  <span
                    className="iconify"
                    data-icon="emojione:red-circle"
                    data-inline="false"
                  ></span>{" "}
                  &nbsp;{" "}
                  <span
                    className="iconify"
                    data-icon="twemoji:yellow-circle"
                    data-inline="false"
                  ></span>{" "}
                  &nbsp;{" "}
                  <span
                    className="iconify"
                    data-icon="twemoji:green-circle"
                    data-inline="false"
                  ></span>
                </div>
                <div
                  className="card-body font-trebuchet text-justify ml-3 mr-3"
                  style={{
                    height: "auto",
                    fontSize: "132%",
                    lineHeight: "200%",
                  }}
                >
                  <h2 className="wave">{header}</h2>
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

