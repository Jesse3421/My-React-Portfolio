import React from 'react';
import coverImage from "../../assets/img/photo (3).png";

function About() {
    return (
        <section className="flex my-5">
            <h1 id="about" >About Me:</h1>
            <div >
            <img src={coverImage} className="my-2" style={{ width: "20%" }} alt="cover" />
            <p>
            For the past 12 years I have been working as a sign language interpreter throughout the midwest. I am passionate about providing access to both the Deaf community and a variety of different settings. I am pursuing a career as a Full Stack Engineer to ensure access for the Deaf community as well as equitiable access to other individuals with disabilities.
            </p>
            </div>
            
        </section>
    );
}

export default About; 