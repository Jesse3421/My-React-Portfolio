import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";
// import coverImage from "";

function Nav() {
    const  projects = [
        { name: 'run-buddy', description: 'Describe Application here' },
        { name: 'progressive web application', description: '' },
        { name: 'work day scheduling app', description: 'Delicious delicacies' },
        { name: 'weather dashboard', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
        { name: 'portfolio', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
        { name: 'e-commerce project', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' }
      ];

      const handleClick = () => {
          console.log("click handled")
      }

    return (
<header data-testid = "header" className="flex-row px-1">
  <nav>
    <h1>Jesse Koon</h1>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          About me
        </a>
      </li>
      {
          projects.map((projects) => {
            <li className="mx-1" key={projects.name} >
                <span onClick={() => { handleClick(); }}>
                    {capitalizeFirstLetter(projects.name)};
                </span>
            </li>   
            })
        }
      <li className="mx-2">
        <a href="contact">
            Contact
        </a>
      </li>
      <li className="mx-2">
         <a href="#resume">
          Resume   
        </a>
      </li>
        
    </ul>
  </nav>
</header>
    );
}
//<img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />

export default Nav; 