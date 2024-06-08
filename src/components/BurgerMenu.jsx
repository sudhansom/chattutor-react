import React, { useState } from "react";

import Offcanvas from 'react-bootstrap/Offcanvas';

const BurgerMenu = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="d-flex flex-col gap-1.5 w-6 hover:cursor-pointer mt-1 group hover:transition-all" type="button" onClick={handleShow} >
        <div className="h-0.5 bg-slate-500 group-hover:bg-slate-900"></div>
        <div className="h-0.5 bg-slate-500 group-hover:bg-slate-900"></div>
        <div className="h-0.5 bg-slate-500 group-hover:bg-slate-900"></div>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Remove this soon. I need to fill this part with menu
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default BurgerMenu;
