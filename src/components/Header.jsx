import React from "react";
import Switch from "react-switch";
import Typical from "react-typical";
import {nanoid} from "nanoid";
import Button from 'react-bootstrap/Button';


export default function Header(props) {
  const [theme, setTheme] = React.useState(false);

  const onThemeSwitchChange = () => {
    setTheme(prevTheme => !prevTheme);
    const dataThemeAttribute = "data-theme";
    const body = document.body;
    const newTheme = body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  };

  const fullName = props.basicInfo.name;
  const titles = props.basicInfo.titles.map(title => [ title.toUpperCase(), 1500 ] ).flat();
  
  const HeaderTitleTypeAnimation = React.memo(() => {
    return <Typical className="title-styles" steps={titles} loop={50}/>
  });

  const networks = props.basicInfo.social.slice(0, -1).map(function(network) {
    return (
      <Button key={nanoid()} size="lg" className="button" href={network.url} target="_blank" rel="noopener noreferrer">
        <i className={network.icon}></i> {network.name}
      </Button>
    );
  });

  return (
    <header id="home">
      <div className="aligner">
        <div className="col-md-12">
            <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
            <h1 className="mb-0">{[fullName]}</h1>
            <div className="title-container">
              <HeaderTitleTypeAnimation />
            </div>
            <Switch
              checked={theme}
              onChange={onThemeSwitchChange}
              offColor="#f5ebd4"
              onColor="#353535"
              className="react-switch mx-auto my-5"
              width={90}
              height={40}
              uncheckedIcon={
                <span
                  className="iconify twemoji"
                  data-icon="twemoji:owl"
                  data-inline="false"
                ></span>
              }
              checkedIcon={
                <span
                  className="iconify twemoji"
                  data-icon="noto-v1:sun-with-face"
                  data-inline="false"
                  style={{marginLeft: "10px"}}
                ></span>
              }
              id="icon-switch"
            />
            <div className="contact">{networks}</div>
        </div>
      </div>
    </header>
  );
};

