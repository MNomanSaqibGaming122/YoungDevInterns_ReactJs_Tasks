import './App.css';
import Header from './components/Header';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certificates';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Summary />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Certifications/>
    </div>
  );
}

export default App;