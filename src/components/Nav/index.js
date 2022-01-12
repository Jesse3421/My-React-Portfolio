import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";
// import coverImage from "";

function Nav(props) {
  const {
    projects = [],
    setCurrentProject,
    currentProject,
    contactSelected,
    setContactSelected
  } = props
  
  
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentProject.name);
  }, [currentProject]);

    return (
    <header className="flex-row px-1">
        <h1>Jesse Koon</h1>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>
              Contact   
            </span>
          </li>     
          {projects.map((projects) => {
                <li className={`mx-1 ${
                  currentProject.name === projects.name && !contactSelected && 'navActive'
          }`}
          key={projects.name} 
          >
                    <span 
                      onClick={() => { 
                        setCurrentProject(projects)
                        setContactSelected(false)
                      }}
                      >
                        {capitalizeFirstLetter(projects.name)}
                    </span>
                </li>   
              })}
        </ul>
      </nav>
    </header>
        );
    }
    //<img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />

export default Nav; 