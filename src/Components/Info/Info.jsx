import React, { useState } from "react";
import { Button,Modal} from 'react-bootstrap';
import "./Info.scss";

export const Info = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="button-group" >
        <Button className="primary" variant="primary" onClick={handleShow}>
          click me
        </Button>
      </div>

      <Modal className="modal" show={show} onHide={handleClose}>
        <Modal.Body>Hello there</Modal.Body>
        <Modal.Footer>
          <Button className="secondary" variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
