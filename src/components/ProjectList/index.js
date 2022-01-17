import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
//import Modal from '../Modal';
import { Card } from 'react-bootstrap';


const ProjectList = (projects) => {
    console.log(projects)

    const {name, description, githupRepo, deployedApp, image}

    const currentProject = useState(projects);

    
    return (
        <div>
        {currentProject.map((project) => { 
            const name = project.name;
            const description = project.description;
            const repo = project.githubRepo;
            const deployedApp = project.deployedApp;
            const image = project.image;
            
     return (
        <Card className="bg-dark text-white">
          <Card.Img src={require(`../../assets/projectPhoto/${image}/100px270`)} alt="Card image" />
          <Card.ImgOverlay>
          <Card.Title>{capitalizeFirstLetter(name)}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Link href={deployedApp}>Click to View the {name} App </Card.Link>
          <Card.Link href={repo}>Click to View the Github Repo</Card.Link>
          </Card.ImgOverlay>
        </Card>
        );
        })}
    </div>
    
        );
}

        

export default ProjectList;
        
        
        
        
        //const currentProjectSlide = projectSlides.filter(projectSlide => projectSlides.projects === projects);


        //       //const [isModalOpen, setIsModalOpen] = useState(false);
          
        //   const toggleModal = (image, i) => {
        //       setCurrentProjectSlide({...image, index: i })
        //       setIsModalOpen(!isModalOpen)
        //     }
            
    //     <div>
    //     {isModalOpen && (
    //         <Modal onClose={toggleModal} currentProjectSlide={currentProjectSlide} />
    //         )}
    //     <div className="flex-row">
    //         {currentProjectSlide.map((image, i) => (
    //             <img 
    //             src={require(`../../assets/projectPhoto/${project}/${i}.png`).default}
    //             alt={image.name}
    //             className="img-thumbnail mx-1"
    //             onClick={() => toggleModal(image, i)}
    //             key={image.name}
    //             />
    //             ))}
    //     </div>
    // </div>


// const [projectSlides] = useState([
//     { name: 'wander',
//       project: 'wander', 
//       description: 'Using the NPS.Gov API, The user may input a two character state code (Example: NY) and return a list of National Parks, Trails, and Historic Sites in that state. Then, using the OpenWeather API, Loop through the parks Lat&Long to return the weather conditions for that park using the OpenWeather API Open Call API. The user may also elect to save their favorite parks to local storage, with an option to recall them at a later time.',
//       githubRepo: 'https://github.com/Jesse3421/Wander',
//       deployedApp:'https://jesse3421.github.io/Wander/'
//     },
//     { name: 'progressive web application', 
//     project: 'pwa',
//     description: 'This progressive web application (PWA) is a budgeting tool that allows the user to keep track of their expenses and deposits when using online or offline.', 
//     githubRepo: 'https://github.com/Jesse3421/Wander',
//     deployedApp:'https://github.com/Jesse3421/Progressive-Web-Application'
//     },
//     { name: 'work day scheduling app', 
//     project: 'workDaySchedule',
//     description: 'The Work Day Scheduler app allows the user to enter tasks into the time slots for that day and the user can save those tasks into the scheduler. The app also indicates if the task is in the past/present/future by changing colors depending on the time.',
//     githubRepo: 'https://github.com/Jesse3421/Work-Day-Scheduling-App',
//     deployedApp:'https://jesse3421.github.io/Work-Day-Scheduling-App/'
//     },
//     { name: 'weather dashboard', 
//     project: 'weatherDashboard',
//     description: 'The weather dashboard allows the user to put in a city name and then receive the current day forecast as well as the five day forecast. It allows the user to save previous searches and lists then if the user would like to return and see the weather for previous searches.', 
//     githubRepo: 'https://github.com/Jesse3421/Weather-Dashboard',
//     deployedApp:'https://jesse3421.github.io/Weather-Dashboard/'
//     },
//     { name: 'social network api', 
//     project: 'socialNetworkAPI',
//     description: 'This social network api allows the user to create users and thoughts and then allows the user to add reactions and friends to the thoughts and users.', 
//     githubRepo: 'https://github.com/Jesse3421/Social-Network-API',
//     deployedApp:'https://watch.screencastify.com/v/TWZfA2kuGiGKHMA5Xbq6'
//     },
//     { name: 'e-commerce project', 
//     project: 'eCommerce',
//     description: 'This project is the back end portion for an e-commerce website that allows the user to utilize the website following proper CRUD procedures.', 
//     githubRepo: 'https://github.com/Jesse3421/E-commerce-Project',
//     deployedApp:'https://watch.screencastify.com/v/kBloNbD6W4Q6kQWvPcuw'
//     }
// ]);