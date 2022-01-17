import React from 'react';
import coverImage from "../../assets/img/photo (3).png";
import { Container, Row, Col} from 'react-bootstrap';

function About() {
    return (
        <Container className="fluid mt-5 ">
            <h1 className="mx-3" id="about" >About Me:</h1>
            <Container className="fluid my-3" >
            <Row flex>
                <Col md={4}>
                    <img src={coverImage} className="my-2" style={{ width: "50%" }} alt="cover" />
                </Col>
                <Col md={8}>
                    <p>
                    For the past 12 years I have been working as a sign language interpreter throughout the midwest. I am passionate about providing access to both the Deaf community and a variety of different settings. I am pursuing a career as a Full Stack Engineer to ensure access for the Deaf community as well as equitiable access to other individuals with disabilities.
                    </p>
                </Col>
            </Row>
            </Container>
            
        </Container>
    );
}

export default About; 