import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='btn-primary m-0 mt-3' onClick={handleShow} >
        Sidebar
      </Button>

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

export default Sidebar;