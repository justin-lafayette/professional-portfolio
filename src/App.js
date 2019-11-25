import React, { useReducer } from 'react';
import './App.css';

// Components
import Header from './components/Header';
import Section from './components/Section';

const App = ()=> {
  return (
    <>
      <Header />
      <Section className="bg-info" ></Section>
      <Section className="bg-success" ></Section>
      <Section className="bg-danger" ></Section>
      <Section className="bg-primary" ></Section>
      <Section className="bg-warning" ></Section>
      <Section className="bg-secondary" ></Section>
    </>
  );
}

export default App;
