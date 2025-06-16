import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppBarComponents from "./components/HeaderComponents/AppBarComponents";
import Header from "./components/Header";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import CalculatorPage from "./Projects/CalculatorPage";
import './App.css'

function Home() {
  return (
    <>
      <AppBarComponents />
      <Header />
      <SkillsSection />
      <ProjectsSection />
      <ContactForm />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/calculator" component={CalculatorPage} />
      </Switch>
    </Router>
  );
}

export default App;
