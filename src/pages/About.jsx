import React from "react";
import { Container,Row ,Col } from "react-bootstrap";
const About = () => {
  return( 
    <Container fluid className="content" id="about">
    <Row>
      <Col
        className="bg-light w-100 h-100 d-flex justify-content-center align-items-center text-center flex-column py-5"
        style={{ minHeight: innerHeight }}
      >
        <div className="display-5 fw-bold my-4">Welcome to About Page</div>
        <div className="text-secondary lh-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Fuga, itaque!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
          tenetur! Accusamus modi laboriosam quaerat unde itaque est
          distinctio ullam sed, Ex numquam ducimus repellat cum accusantium
          officiis aliquam aperiam.
        </div>
        <div className="btn btn-danger my-5">Click here</div>
      </Col>
      <Col className="about-bg-image">
        {/* <img src="/aboutimg.png" alt="" /> */}
</Col>
    </Row>
  </Container>
  );
};

export default About;
