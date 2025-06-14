// src/App.jsx
import React from "react";
import Header from "./components/Header";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import './App.css'

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <SkillsSection />
      <ProjectsSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

