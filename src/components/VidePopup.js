import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Video from '../img/video.mov'
import Tumbnail from '../img/tumbnail.png'
function VideoPopup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span onClick={handleShow}>
        <img alt='tumbnail' src={Tumbnail}></img>
      </span>

      <Modal show={show}  size="lg" onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <video src={Video} width="100%" height="auto" controls>
     </video>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VideoPopup;