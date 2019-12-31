import React from 'react';
import {Modal, Button} from 'react-bootstrap';

function CenteredModal(props) {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Email send
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
                <h4>Email: {props.emailData.email}</h4>
                <h4>Nickname: {props.emailData.nickname}</h4>
                <h4>Subject: {props.emailData.subject}</h4>
                
                <p>Message: 
                {props.emailData.message}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CenteredModal;