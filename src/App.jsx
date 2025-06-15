import React from "react";
import AppBarComponents from "./components/HeaderComponents/AppBarComponents";
import Header from './components/Header';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <AppBarComponents />
      <Header />
      <SkillsSection />
      <ProjectsSection />
      <ContactForm />
      <Footer/>
    </>
  );
}

export default App;
