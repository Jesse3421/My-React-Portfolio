import React, { useState } from 'react';
import ProjectList from '../ProjectList';
// import { capitalizeFirstLetter } from "../../utils/helpers";
// import { Card } from 'react-bootstrap';



function Portfolio() {
    

    const [projects] = useState([
        { name: 'wander',
        description: 'Using the NPS.Gov API, The user may input a two character state code (Example: NY) and return a list of National Parks, Trails, and Historic Sites in that state. Then, using the OpenWeather API, Loop through the parks Lat&Long to return the weather conditions for that park using the OpenWeather API Open Call API. The user may also elect to save their favorite parks to local storage, with an option to recall them at a later time.',
        githubRepo: 'https://github.com/Jesse3421/Wander',
        deployedApp:'https://jesse3421.github.io/Wander/',
        image:'wander/0.jpg'
        },
        { name: 'progressive web application', 
        description: 'This progressive web application (PWA) is a budgeting tool that allows the user to keep track of their expenses and deposits when using online or offline.', 
        githubRepo: 'https://github.com/Jesse3421/Wander',
        deployedApp:'https://github.com/Jesse3421/Progressive-Web-Application',
        image:'pwa/0.png'
        },
        { name: 'work day scheduling app', 
        description: 'The Work Day Scheduler app allows the user to enter tasks into the time slots for that day and the user can save those tasks into the scheduler. The app also indicates if the task is in the past/present/future by changing colors depending on the time.',
        githubRepo: 'https://github.com/Jesse3421/Work-Day-Scheduling-App',
        deployedApp:'https://jesse3421.github.io/Work-Day-Scheduling-App/',
        image:'workDaySchedule/0.png'
        },
        { name: 'weather dashboard', 
        description: 'The weather dashboard allows the user to put in a city name and then receive the current day forecast as well as the five day forecast. It allows the user to save previous searches and lists then if the user would like to return and see the weather for previous searches.', 
        githubRepo: 'https://github.com/Jesse3421/Weather-Dashboard',
        deployedApp:'https://jesse3421.github.io/Weather-Dashboard/',
        image:'weatherDashboard/0.png'
        },
        { name: 'social network api', 
        description: 'This social network api allows the user to create users and thoughts and then allows the user to add reactions and friends to the thoughts and users.', 
        githubRepo: 'https://github.com/Jesse3421/Social-Network-API',
        deployedApp:'https://watch.screencastify.com/v/TWZfA2kuGiGKHMA5Xbq6',
        image:'socialNetworkAPI/0.png'
        },
        { name: 'e-commerce project', 
        description: 'This project is the back end portion for an e-commerce website that allows the user to utilize the website following proper CRUD procedures.', 
        githubRepo: 'https://github.com/Jesse3421/E-commerce-Project',
        deployedApp:'https://watch.screencastify.com/v/kBloNbD6W4Q6kQWvPcuw',
        image:'eCommerce/0.png'
        }
        ]);
    

  
  return(
 
      <section className="container-fluid d-flex justify-content-around ">
        <div className="row">

          {projects.map((projectx, idx) => (
              <ProjectList
              projectx = {projectx}
              key={idx}
              />
              ))}
        </div>
       </section>
    );
}   
    
export default Portfolio;





        //         <section className="flex">
        //             <div className="w-50 mx-auto">
        //                 <img 
        //                 src={require(`../../assets/projectPhoto/eCommerce/0.png`)}
        //                 alt='ecommerce project photo'
        //                 width="400"
        //                 height="500"
        //                 key='ecommercePhoto'
        //                 />
        //             </div>
        
        //             <div className="w-50 mx-auto">
        //                 <img 
        //                 src={require(`../../assets/projectPhoto/pwa/0.png`)}
        //                 alt='pwa photo'
        //                 width="400"
        //                 height="500"
        //                 key='pwaPhoto'
        //                 />
        //             </div>
                    
        //             <div className="w-50 mx-auto">
        //                 <img 
        //                 src={require(`../../assets/projectPhoto/socialNetworkAPI/0.png`)}
        //                 alt='social network api photo'
        //                 width="400"
        //                 height="500"
        //                 key='apiPhoto'
        //                 />
        //             </div>
        
        //             <div className="w-50 mx-auto">
        //                 <img 
        //                 src={require(`../../assets/projectPhoto/wander/0.jpg`)}
        //                 alt='wander project photo'
        //                 width="400"
        //                 height="500"
        //                 key='wanderPhoto'
        //                 />
        //             </div>
                    
        //             <div className="w-50 mx-auto">
        //                 <img 
        //                 src={require(`../../assets/projectPhoto/weatherDashboard/0.png`)}
        //                 alt='weather dashboard photo'
        //                 width="400"
        //                 height="500"
        //                 key='weatherDashboard'
        //                 />
        //             </div>
                    
        //             <div className="w-50 mx-auto">
        //                 <img 
        //                 src={require(`../../assets/projectPhoto/workDaySchedule/0.png`)}
        //                 alt='work day schedule photo'
        //                 width="400"
        //                 height="500"
        //                 key='workDay'
        //                 />
        //             </div>
        //         </section>
        //     );
        // }