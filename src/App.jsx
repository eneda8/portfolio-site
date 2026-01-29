import resumeData from "./resume_data.json";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About.jsx";
import Coursework from "./components/Coursework";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


export default function App() {
  return (
    <div>
      <Header basicInfo={resumeData.basic_info} />
      <About basicInfo={resumeData.basic_info} />
      <Projects projects={resumeData.projects} />
      <Skills skills={resumeData.skills} />
      {Array.isArray(resumeData.coursework) && resumeData.coursework.length > 0 && (
        <Coursework coursework={resumeData.coursework} />
      )}
      <Footer basicInfo={resumeData.basic_info} />
    </div>
  );
}