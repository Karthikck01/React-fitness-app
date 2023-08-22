import React from "react";
import { Nav } from "react-bootstrap";

const Navlink = () => {
  return (
    <Nav variant="underline" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link  className="text-light" href="#home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-light" href="#career">Careers</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-light" href="#about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-light" href="#contact">Contact</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navlink;
