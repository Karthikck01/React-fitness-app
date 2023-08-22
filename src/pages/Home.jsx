import React from 'react'
import { Container, Image } from 'react-bootstrap'
import heroimg from '/heroimg.png'

const Home = () => {
  return (
    <Container fluid className='custom-bg-dark text-light'>
    <Container className='content d-flex justify-content-between align-items-center' id='home'>
        <div className='w-100 h-100  d-flex justify-content-center align-items-start flex-column'>
          <div className="display-5 fw-bold my-4">
            Welcome to Home Page
          </div>
          <div className="text-secondary lh-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus modi laboriosam quaerat unde itaque est distinctio ullam sed, iusto nostrum? Ex numquam ducimus <br /> repellat cum accusantium officiis aliquam aperiam.
          </div>
          <div className="btn btn-danger my-5">
            Click here
          </div>
        </div>
        <div  className='w-100 h-100 d-flex justify-content-center align-items-center'>
          <Image src={heroimg} />
        </div>
    </Container>
    </Container>
  )
}

export default Home