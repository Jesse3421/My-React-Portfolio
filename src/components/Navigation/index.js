import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import '../../App.css'






function Navigation(props) { 

      const { 
              portfolioSelected,
              setPortfolioSelected,
              contactSelected,
              setContactSelected,
              resumeSelected,
              setResumeSelected
            } = props



    return (
      <Navbar sticky="top" className="color-nav" variant="light">
      <Container>
        <Navbar.Brand href="#home" className="name">Jesse Koon</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            
            <Nav.Link data-testid="about" href="#about" onClick={() => setContactSelected(false)}>About</Nav.Link>
            
            <Nav.Link data-testId="contact" href="#contact" className={`mx-2 ${contactSelected && 'navActive'}`}>
                 <span onClick={() => setContactSelected(true)}>
                   Contact   
                 </span>      
            </Nav.Link>
            <Nav.Link data-testId="portfolio" href="#portfolio" className={`mx-2 ${portfolioSelected && 'navActive'}`}>
                 <span onClick={() => setPortfolioSelected(true)}>
                   Portfolio   
                 </span>      
            </Nav.Link>
            
            <Nav.Link data-testId="resume" href="#resume" className={`mx-2 ${resumeSelected && 'navActive'}`}>
                 <span onClick={() => setResumeSelected(true)}>
                   Resume  
                 </span>      
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
          

          
          
          )};
          export default Navigation; 
