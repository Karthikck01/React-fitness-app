import React from 'react'
import Navlink from './Navlink'
import { Navbar, Container } from 'react-bootstrap'

const NavbarComponent = () => {
  return (
    <Navbar fixed='top' className="shadow-sm custom-bg-dark z-3">
    <Container>
      <Navbar.Brand className='text-light'>React Fitness App</Navbar.Brand>
      <Navlink />
    </Container>
  </Navbar>
  )
}

export default NavbarComponent