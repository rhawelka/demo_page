import React, {Component, useState} from 'react'
import {
    Container,
    Row,
    Form,
    Col,
    InputGroup,
    Button
} from 'react-bootstrap';

class Contact extends Component {
    render() {
        return (
            <Container>
                <div className="text-center mt-5">
                    <h2>CONTACT</h2>
                    <h4>Let's get in touch. Send us a email:</h4>
                </div>
                <div>
                    <p>ikonka + adresss</p>
                    <p>ikonka + phone</p>
                    <p>ikonka + email firmy</p>
                    <p>moze dodaj jako mapka czy coś</p>
                </div>
                <Row>

                    <Form className="w-100">
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label htmlFor="email"></Form.Label>
                            <Form.Control id="email" type="email" placeholder="Enter email"/>
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label htmlFor="password"></Form.Label>
                            <Form.Control id="password" type="password" placeholder="Password"/>
                        </Form.Group>
                        <Form.Group controlId="formGroupSubject">
                            <Form.Label htmlFor="subject"></Form.Label>
                            <Form.Control id="subject" type="text" placeholder="Subject"/>
                        </Form.Group>
                        <Form.Group controlId="formGroupMessage">
                            <Form.Label htmlFor="message"></Form.Label>
                            <Form.Control id="message" type="text" placeholder="Message"/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Row>
            </Container>
        )
    }
}

export default Contact;
