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
      <Section className="bg-info" id="about-me" >
        <AboutMe />
      </Section>
      <Section className="bg-success" >
        <CharacterTraits />
      </Section>
      <Section className="bg-danger" >
        <ReactSkills />
      </Section>
      <Section className="bg-primary" >
        <PastProjects />
      </Section>
      {/* <Section className="bg-warning" ></Section>
      <Section className="bg-secondary" ></Section> */}
    </>
  );
}

export default App;
