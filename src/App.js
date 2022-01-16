import React, { useState } from 'react';
import About from './components/About';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
//import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
//import Resume from './components/Resume';
//import Project from './components/Projects';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  
  // const [projects] = useState([
  //     { name: 'wander',
  //       project: 'wander', 
  //       description: 'Using the NPS.Gov API, The user may input a two character state code (Example: NY) and return a list of National Parks, Trails, and Historic Sites in that state. Then, using the OpenWeather API, Loop through the parks Lat&Long to return the weather conditions for that park using the OpenWeather API Open Call API. The user may also elect to save their favorite parks to local storage, with an option to recall them at a later time.' 
  //     },
  //     { name: 'progressive web application', 
  //       project: 'pwa',
  //       description: 'This progressive web application (PWA) is a budgeting tool that allows the user to keep track of their expenses and deposits when      using online or offline.' 
  //     },
  //     { name: 'work day scheduling app', 
  //       project: 'workDaySchedule',
  //       description: 'The Work Day Scheduler app allows the user to enter tasks into the time slots for that day and the user can save those tasks into the scheduler. The app also indicates if the task is in the past/present/future by changing colors depending on the time.'
  //     },
  //     { name: 'weather dashboard', 
  //       project: 'weatherDashboard',
  //       description: 'The weather dashboard allows the user to put in a city name and then receive the current day forecast as well as the five day forecast. It allows the user to save previous searches and lists then if the user would like to return and see the weather for previous searches.' 
  //     },
  //     { name: 'social network api', 
  //       project: 'socialNetworkAPI',
  //       description: 'This social network api allows the user to create users and thoughts and then allows the user to add reactions and friends to the thoughts and users.' 
  //     },
  //     { name: 'e-commerce project', 
  //       project: 'eCommerce',
  //       description: 'This project is the back end portion for an e-commerce website that allows the user to utilize the website following proper CRUD procedures.' 
  //     }
  // ]);

  //usestate for projects
  //const [currentProject, setCurrentProject] = useState(projects[0]);

  //usestate for contact
  const [contactSelected, setContactSelected] = useState(false); 
  
  
  
  return (
    <><Navigation
        // projects={projects}
        // setCurrentProject={setCurrentProject}
        // currentProject={currentProject}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        >
      </Navigation>
    
    <main>
      {!contactSelected ? (
        <> 
      {/* <Portfolio currentProject={currentProject}></Portfolio> */}
      <About></About>
      {/* <Resume></Resume> */}
      </>
      ) : (
        <ContactForm></ContactForm>
        )}
    {/* <Portfolio></Portfolio>
    <Resume></Resume> */}
    </main>
    
    
    <footer>
      <Footer></Footer>
    </footer>
    </>
    
  )};

export default App;

