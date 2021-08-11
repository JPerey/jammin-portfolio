import { React, useState } from "react";
import './App.css';
import { Route, Switch } from "react-router-dom";

//components
import AboutPage from "./components/AboutPage/AboutPage";
import ArtPage from "./components/ArtPage/ArtPage";
import HomePage from "./components/HomePage/HomePage";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import SkillsPage from "./components/SkillsPage/SkillsPage";
import SideBar from "./components/SideBar/SideBar";
import BackgroundImage from './components/images/background2.jpg';

function App() {
  // Add arrow functions here for webpage functionality
  const bioChoice = [0,1,2];
  const picChoice = [0,1,2];

  const [selBioChoice, setBioChoice] = useState(0);
  const [selPicChoice, setPicChoice] = useState(0);


  return (
    <div className="App" >

      <header className="Header">
        <SideBar/>
        <p>powered by sleepless nights</p>
      </header>
        <main className="Main" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        
        <Switch >
          <Route exact path="/about" render ={() => <AboutPage 
          bioChoice={bioChoice} selBioChoice={selBioChoice} setBioChoice={setBioChoice} 
          picChoice={picChoice} selPicChoice={selPicChoice} setPicChoice={setPicChoice}/> } />
          <Route exact path="/art" render ={() => <ArtPage/> }/>
          <Route exact path="/" render ={() => <HomePage/> }/>
          <Route exact path="/projects" render ={() => <ProjectsPage/> }/>
          <Route exact path="/skills" render ={() => <SkillsPage/> }/>
        </Switch>
      </main>
      <footer className="Footer">
      </footer>
    </div>
  );
}

export default App;
