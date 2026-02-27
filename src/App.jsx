import React from "react";
import resumeData from "./resume_data.json";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About.jsx";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Nav from "./components/Nav";
import Contact from "./components/Contact";

function BackToTop() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      className={`back-to-top${visible ? " visible" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
    >
      <i className="fa-solid fa-chevron-up"></i>
    </button>
  );
}

export default function App() {
  return (
    <div>
      <a className="skip-link" href="#about">Skip to main content</a>
      <Nav />
      <Header basicInfo={resumeData.basic_info} />
      <About basicInfo={resumeData.basic_info} />
      <Projects projects={resumeData.projects} />
      <Skills skills={resumeData.skills} />
      <Contact basicInfo={resumeData.basic_info} />
      <Footer basicInfo={resumeData.basic_info} />
      <BackToTop />
    </div>
  );
}
