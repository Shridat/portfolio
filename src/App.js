import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Header from './components/Header';
import Projects from './components/Project';
import Skills from './components/Skills';
import Contact from './components/Contact';
import React from 'react';
import Education from './components/Education';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <main className="container mx-auto p-4">
        <About/>
        <Education/>
        <Experience/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
