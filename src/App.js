import React, { useState } from 'react';
import About from './components/About';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from './components/Wrapper';




function App() {
  
  const [currentPage, setCurrentPage] = useState('About')

  const handleChange = (page) => setCurrentPage(page);
  
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
      return <About />
  };

  return (
    <div>
      <div>
        <Navigation
        handleChange={handleChange}
        currentPage={currentPage}
        ></Navigation>
        <Wrapper 
        renderPage={renderPage}
        ></Wrapper>
        <Footer></Footer>
      </div>
    </div>
  )};
  
  
  
  export default App;
  
  

