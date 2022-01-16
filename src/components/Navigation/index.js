import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import '../../App.css'






function Navigation(props) { //props needs to be in the ()

       const { 
      //            projects =[],
      //         setCurrentProject,
      //         currentProject,
              contactSelected,
              setContactSelected
            } = props

      //       useEffect(()=> {
      //         document.title =capitalizeFirstLetter(currentProject.names);
      //       }, [currentProject]);

    return (
      <Navbar sticky="top" className="color-nav" variant="light">
      <Container>
        <Navbar.Brand href="#home" className="name">Jesse Koon</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link href="#About">About</Nav.Link>
            <NavDropdown title="Portfolio" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Wander App</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Progressive Web Application</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Work Day Scheduler</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Weather Dashboard</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Social Network Api</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">E-commerce App</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Contact" className={`mx-2 ${contactSelected && 'navActive'}`}>
                 <span onClick={() => setContactSelected(true)}>
                   Contact   
                 </span>      
            </Nav.Link>
            <Nav.Link href="#Resume">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
          
            // <header className="flex-row px-1">
            //   <h1>Jesse Koon</h1>
            //   <nav>
            //   <ul className='flex-row px-1'>
            //         <li className="mx-2">
            //           <a data-testid="about" href="#about" 
            //           onClick={() => setContactSelected(false)}
            //           >
            //             About me
            //           </a>
            //         </li>
      
            //         <li className="mx-2">Portfolio</li>
            //         <li className="mx-2">Resume</li>

        //             {/* {projects.map((projects) => {
        //             <li className={`mx-1 ${
        //               currentProject.name === projects.name && !contactSelected && 'navActive'
        //                 }`}
        //               key={projects.name} 
        //             >                           
        //               <span 
        //                 onClick={() => { 
        //                 setCurrentProject(projects)
        //                 setContactSelected(false)
        //                   }}
        //                 >
        //                 {capitalizeFirstLetter(projects.name)}
        //               </span>
        //               </li>   
        //              })}  */}
        //     //   </ul>
        //     //   </nav>
        //     // </header>
        // )};
        
    )};
        export default Navigation; 
        
        //       //<img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
