import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css"; 

function App() {
  return (
    <div className="App">
      <Navbar />

      <main className="main-container"
        style={{ 
          width: "100%",
          maxWidth: "70%",
          margin: "0 auto",
          textAlign:"center",
          alignItems: "center",
          paddingTop: "5rem"
           }}
        >
        <Hero   />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
