import Navbar from "./components/NavBar/navbar.js";
import About from "./components/About/about.js";
import Skills from "./components/Skills/skills.js";
import Projects from "./components/Projects/projects.js";
import Contact from "./components/Contact/contact.js";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
