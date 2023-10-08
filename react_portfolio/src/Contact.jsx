import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './components/Page.css';

function Contact() {
  return (
    <div className='page contact-container'>
      <h1 style={{color: "#003249"}}>Contact Me!</h1>
      
    <Form className="custom-form" >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label >Name</Form.Label>
        <Form.Control className='outline'type="" placeholder="name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control className='outline' type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control className='outline' as="textarea" rows={3} />
      </Form.Group>
      <Button className="btn" type="submit">
        Submit
      </Button>
      
    </Form>
    </div>
  );
}

export default Contact;