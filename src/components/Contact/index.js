import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { Form, Button, Container, Col } from 'react-bootstrap';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
    
    function handleSubmit(e) {
        e.preventDefault();
        if(!errorMessage){ 
        console.log('Submit Form', formState);
    }};

    function handleChange(e){
        if(e.target.name === 'email'){
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if(isValid){
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('')
            }
        } else {
            if(!e.target.value.length){
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }
        if(!errorMessage){
            setFormState({...formState, [e.target.name]: e.target.value})
            console.log('Handle Form', formState);
        }
    };
    

    return(
        <Container className="flex">
            <Form controlId="contact-form" onSubmit={handleSubmit} className="mt-3">
            <Form.Group className="mb-3 px-5" controlId="formName">
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control type="text" name="name" defaultValue={name} onBlur={handleChange} placeholder="Enter Name" />
            </Form.Group>
            
            <Form.Group className="mb-3 px-5" controlId="formBasicEmail">
                <Form.Label htmlFor="email">Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter Email" defaultValue={email} onBlur={handleChange} />
            </Form.Group>
            
            <Form.Group className="mb-3 px-5" controlId="formMessage">
                <Form.Label htmlFor="message">Message</Form.Label>
                <Form.Control  as="textarea" name="message" placeholder="Enter Message" rows={5} defaultValue={message} onBlur={handleChange}/>
            </Form.Group>
                {errorMessage && (
                    <div>
                    <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            <Button className="mb-3 px-5" variant="light" type="submit" data-testid="button">
                Submit
            </Button>
            
            </Form>
        </Container>
    )}
//     )}
//         <section className="">
//             <h1>Contact Me</h1>
//             <form id="contact-form" className="" onSubmit={handleSubmit}>
//                 <div>
//                 <label htmlFor="name">Name:</label>
//                 <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
//                 </div>
//                
//                   <div>
//                 <label htmlFor="email">Email Address:</label>
//                 <input type="email" defaultValue={email} name="email" onBlur={handleChange}/>
//                 </div>
//                 
                    //<div>
//                 <label htmlFor="message">Message:</label>
//                 <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5"/>
//                 </div>
//                 <button data-testid="button" type="submit">Submit</button>
//             </form>
//         </section>
//     )
// }


    export default Contact;