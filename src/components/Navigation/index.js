import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import '../../App.css'






function Navigation({ currentPage, handleChange}) { 

    console.log(currentPage)


    return (
      <Navbar sticky="top" className="color-nav" variant="light">
      <Container>
        <Navbar.Brand href="#home" className="name">Jesse Koon</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            
            <Nav.Link  href="#about" onClick={() => handleChange('About')} className= {`mx-2 ${currentPage === 'About'} && 'navActive'`}>
              About
            </Nav.Link>
            
            <Nav.Link href="#contact" onClick={() => handleChange('Contact')} 
            className={`mx-2 ${currentPage === 'Contact'} && 'navActive'}`}>
              Contact                
            </Nav.Link>
            
            <Nav.Link  href="#portfolio" onClick={() => handleChange('Portfolio')} className={`mx-2 ${currentPage === 'Portfolio'} &&  
            'navActive'}`}>
               Portfolio                   
            </Nav.Link>
            
            <Nav.Link  href="#resume" onClick={() => handleChange('Resume')} className={`mx-2 ${currentPage === 'Resume'} && 'navActive'}`}>
              Resume    
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
          

          
          
    )};

  export default Navigation; 
