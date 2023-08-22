import React from "react";
import { Container,Row,Col,Form,Button } from "react-bootstrap";
const Contact = () => {
  return (
    <Container fluid className="content custom-bg-dark" id="contact">
    <Row>
    <Col
        className="custom-bg-dark w-100 h-100 d-flex justify-content-center align-items-center text-center flex-column px-5 p-5"
        style={{ minHeight: innerHeight }}
      >
        <div className="display-5 fw-bold my-4 text-light">Welcome to Contact Page</div>
        <div className="text-secondary lh-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Fuga, itaque!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
          tenetur! Accusamus modi laboriosam quaerat unde itaque est
          distinctio ullam sed, Ex numquam ducimus repellat cum accusantium
          officiis aliquam aperiam.
        </div>
        
      </Col>
      <Col
        className=" w-100 h-100 d-flex justify-content-center flex-column p-5 px-5 "
        style={{ minHeight: innerHeight }}
      >
         <Form className="mx-3 p-3 text-light border py-5 rounded bg-dark">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="email@example.com"   className="text-bg-dark text-secondary"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Write your messege</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Write your Messege" className="text-bg-dark text-secondary"/>
      </Form.Group>
      <div className="d-flex justify-content-end mt-5">
      <Button variant="danger">Send your messege</Button>
      </div>
    </Form>
      </Col>
    </Row>
  </Container>
    );
};

export default Contact;
