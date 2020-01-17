import React, { useReducer } from 'react';
import './App.css';

// Components
import Header from './components/Header';
import Section from './components/Section';
import AboutMe from './components/AboutMe';
import CharacterTraits from './components/CharacterTraits';
import PastProjects from './components/PastProjects';
import ReactSkills from './components/ReactSkills';

const App = ()=> {
  return (
    <>
      <Header />
      <Section className="first" id="about-me" >
        <AboutMe />
      </Section>
      <Section className="bg-success" id="character-traits" >
        <CharacterTraits />
      </Section>
      <Section className="bg-danger" id="react-skills" >
        <ReactSkills />
      </Section>
      <Section className="bg-primary" id="past-projects" >
        <PastProjects />
      </Section>
      {/* <Section className="bg-warning" ></Section>
      <Section className="bg-secondary" ></Section> */}
    </>
  );
}

export default App;
