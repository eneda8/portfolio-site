import React from "react";
import Switch from "react-switch";
import Typical from "react-typical";

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
    return <Typical className="title-styles" steps={titles} loop={50} />
  });

  return (
    <header id="home" style={{ height: window.innerHeight - 140, display: 'block' }}>
      <div className="row aligner" style={{height: '100%'}}>
        <div className="col-md-12">
          <div>
            <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
            <h1 className="mb-0">{[fullName]}</h1>
            <div className="title-container">
              <HeaderTitleTypeAnimation />
            </div>
            <Switch
              checked={theme}
              onChange={onThemeSwitchChange}
              offColor="#baaa80"
              onColor="#353535"
              className="react-switch mx-auto"
              width={90}
              height={40}
              uncheckedIcon={
                <span
                  className="iconify"
                  data-icon="twemoji:owl"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "20px",
                    color: "#353239",
                  }}
                ></span>
              }
              checkedIcon={
                <span
                  className="iconify"
                  data-icon="noto-v1:sun-with-face"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "10px",
                    color: "#353239",
                  }}
                ></span>
              }
              id="icon-switch"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

