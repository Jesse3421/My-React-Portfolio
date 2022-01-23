import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
//import Modal from '../Modal';
import { Card, Col, Footer } from 'react-bootstrap';


function ProjectList({projectx}) {
    console.log({projectx})

    const {name, description, githubRepo, deployedApp, image} = projectx


    
    return (
        
            
            <Card className="col-12 col-md-6 col-lg-4 bg-light text-white projectCard" key={name}>  
            <Card.Img variant="top" src={require(`../../assets/projectPhoto/${image}`)} alt="Card image" className="card-image"/>
            <Card.Body>
            <Card.Text>
            <Card.Title className="text-center">{capitalizeFirstLetter(name)}</Card.Title>
            <Card.Text className="text-center">{description}</Card.Text>
            </Card.Text>
            <Card.Footer variant="bottom" className="text-center ">
            <Card.Link  href={deployedApp}>Click to View the App </Card.Link>
            <Card.Link  href={githubRepo}>Click to View the Github Repo</Card.Link>
            </Card.Footer>
            </Card.Body>
            </Card>
            
        
        
        );
}

        

export default ProjectList;
        
        
       