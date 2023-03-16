import resumeData from "./resume_data.json";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About.jsx";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


export default function App() {
  return (
    <div>
      <Header basicInfo={resumeData.basic_info} />
      <About basicInfo={resumeData.basic_info} />
      <Projects projects={resumeData.projects} />
      <Skills skills={resumeData.skills} />
      <Experience experience={resumeData.experience} />
      <Footer basicInfo={resumeData.basic_info} />
    </div>
  );
}