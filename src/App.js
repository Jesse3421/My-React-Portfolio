import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  
  const [projects] = useState([
    { name: 'run-buddy', 
      description: 'Describe Application here' 
    },
    { name: 'progressive web application', 
      description: 'This progressive web application (PWA) is a budgeting tool that allows the user to keep track of their expenses and deposits when      using online or offline.' 
    },
    { name: 'work day scheduling app', 
      description: 'The Work Day Scheduler app allows the user to enter tasks into the time slots for that day and the user can save those tasks into the scheduler. The app also indicates if the task is in the past/present/future by changing colors depending on the time.'
    },
    { name: 'weather dashboard', 
      description: 'The weather dashboard allows the user to put in a city name and then receive the current day forecast as well as the five day forecast. It allows the user to save previous searches and lists then if the user would like to return and see the weather for previous searches.' 
    },
    { name: 'portfolio', 
      description: 'Fields, farmhouses, waterfalls, and the beauty of nature' 
    },
    { name: 'e-commerce project', 
      description: 'Fields, farmhouses, waterfalls, and the beauty of nature' 
    }
]);

  const [currentProject, setCurrentProject] = useState(projects[0]);


  return (
    <div>
      <Nav
        projects={projects}
        setCurrentProject={setCurrentProject}
        currentProject={currentProject}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
    <main>
      {!contactSelected ? (
        <> 
      <Portfolio currentProject={currentProject}></Portfolio>
      <About></About>
      </>
      ) : (
        <ContactForm></ContactForm>
      )}
    </main>
    <footer>
      <Footer></Footer>
    </footer>
    </div>
  );
}

export default App;
