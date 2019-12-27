import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import ContactForm from '../common/ContactForm';

class Contact extends Component {
    render() {
        return (
            <Container>
                <div className="text-center mt-5">
                    <h2>CONTACT</h2>
                    <h4>Let's get in touch. Send us a email:</h4>
                </div>
                <Row>
                    <Col sm>
                        <p>ikonka + adresss</p>
                        <p>ikonka + phone</p>
                        <p>ikonka + email firmy</p>
                    </Col>
                    <Col sm>
                        <p>moze dodaj jako mapka czy coś</p>
                    </Col>
                </Row>
                <Row>
                    <ContactForm/>
                </Row>
            </Container>
        )
    }
}

export default Contact;
