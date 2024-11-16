import React from "react";
import "./App.css"; // For global styles
import Header from "./components/Header";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import AwardsCertificates from "./components/AwardsCertificates";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <About />
        <WorkExperience />
        <Skills />
        <AwardsCertificates />
      </main>
    </div>
  );
}

export default App;
