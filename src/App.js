import React from "react";
import Hero from "./components/Hero/Hero";
import Biography from "./components/Biography/Biography";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Hobbies from "./components/Hobbies/Hobbies";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div>
      <Hero />
      <Biography/>
      <Services/>
      <Projects/>
      <Hobbies/>
      <Contact/>
    </div>
  );
}

export default App;
