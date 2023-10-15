import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Page.css';

function OffCanvasSkills({ name, items }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Button variant="primary" onClick={toggleShow} className="me-2 ">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose}className="offcanvas-container">
        <Offcanvas.Header closeButton className='off-can-close'>
          <Offcanvas.Title>{name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="offcanvas-list-item">
            {items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvasSkills;
