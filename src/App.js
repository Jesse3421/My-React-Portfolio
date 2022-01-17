import React, { useState } from 'react';
import About from './components/About';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'




function App() {
  
  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
  <div>
    <div>
      <Navigation
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Navigation>
      
      <main>
        {!contactSelected && !portfolioSelected && !resumeSelected? (
          <>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
          )}
        {!portfolioSelected ? (
          <>
            <About></About>
          </>
        ) : (
          <Portfolio></Portfolio>
        )}
        {!resumeSelected ? (
          <>
            <About></About>
          </>
        ) : (
          <Resume></Resume>
        )}
          
      </main>
      <Footer></Footer>
    </div>
  </div>
  )}
    
 
    export default App;
