import React from "react";
import { nanoid } from "nanoid";

export default function Footer(props){
  const networks = props.basicInfo.social.map(function(network) {
    return (
      <span key={nanoid()} className="m-4">
        <a href={network.url} target="_blank" rel="noopener noreferrer">
          <i className={network.icon}></i>
        </a>
      </span>
    );
  });

  return (
    <footer>
      <div className="col-md-12">
        <div className="social-links">{networks}</div>
        <div className="copyright py-4 text-center">
          <div className="container">
            <small>Copyright &copy; {props.basicInfo.name}</small>
          </div>
        </div>
      </div>
    </footer>
  );
}

