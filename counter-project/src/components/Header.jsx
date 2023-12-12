import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Navbar expand="lg" className="bg-warning">
      <Container fluid>
        <Button className='btn-primary m-0 mt-3' onClick={handleShow}>
        <i class="fa-solid fa-bars"></i>
        </Button>
        <Navbar.Brand href="#"><img src="../m.png" height={60} alt="Logo"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
         <Offcanvas show={show} onHide={handleClose}>
         <Offcanvas.Header closeButton>
           <Offcanvas.Title>Offcanvas</Offcanvas.Title>
         </Offcanvas.Header>
         <Offcanvas.Body>
           <div className="dropdown mt-3 text-center pt-2">
             <a className="nav-link pt-2" href="#">
               HomePage
             </a>
             <a className="nav-link pt-2" href="#">
               AboutUsPage
             </a>
             <a className="nav-link pt-2" href="#">
               BlogPage
             </a>
             <a className="dropdown-item pt-2" href="#">
               ContactPage
             </a>
           </div>
         </Offcanvas.Body>
 
 
       </Offcanvas>
       </>
  );
}

export default Header;
