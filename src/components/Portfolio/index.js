import React from 'react';
import Projects from '../Projects';
import { capitalizeFirstLetter } from "../../utils/helpers";


function Portfolio(props) {
   const { currentProject } = props;

    return(
     <section>
         <h1 data-testid="h1tag">
             {capitalizeFirstLetter(currentProject.name)}
         </h1>
         <p>{currentProject.description}</p>
         <Projects projectCat={currentProject.name}/>
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