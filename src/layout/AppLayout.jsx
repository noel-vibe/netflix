import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, useNavigate } from 'react-router-dom';


const AppLayout = () => {
  const [keyword,setKeyword] = useState("");
  const navigate = useNavigate()
  const searchByKeyword=(event)=>{
    event.preventDefault()
    //url을 바꿔주기
    navigate(`/movies?q=${keyword}`)
    setKeyword("");
  }
  return (
    <div data-bs-theme="dark">
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/"><img width={100} src="https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd05ded51-54bf-4174-8b7e-e021c6eb6b5a%2FWATCHA_LOGO.svg&blockId=400d70c6-5698-4877-9ddf-83be123fb341" className='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/movies">Movies</Nav.Link>

          </Nav>
          <Form className="d-flex" onSubmit={searchByKeyword}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={keyword}
              onChange={(event)=> setKeyword(event.target.value)}
            />
            <Button variant="outline-light" type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
    </div>
    
  )
}

export default AppLayout