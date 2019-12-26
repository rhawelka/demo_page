import React, {Component} from 'react'
import {Container, Row, Col, ListGroup, Button} from 'react-bootstrap'

class Pricing extends Component {

    render() {
        return (
            <Container fluid className="p-3 text-center bg-dark" style={{minWidth: "80vh", fontFamily: "oswald"}}>
                <h2 className="text-light mt-3">Pricing plan</h2>
                <h5 className="text-light">Choose one to start working.</h5>
                <Row className="justify-content-around mt-5 mb-3 mx-2">
                    <Col sm className="px-2 py-4">
                        <ListGroup>
                            <ListGroup.Item className="py-4 bg-success text-light"><h1>Basic</h1></ListGroup.Item>
                            <ListGroup.Item><b>$ 29.99</b> / year</ListGroup.Item>
                            <ListGroup.Item><b>10GB</b> Storage</ListGroup.Item>
                            <ListGroup.Item><b>10</b> Emails</ListGroup.Item>
                            <ListGroup.Item><b>10</b> Domains</ListGroup.Item>
                            <ListGroup.Item><b>1GB</b> Bandwidth</ListGroup.Item>
                            <ListGroup.Item><b>Endless</b> Support</ListGroup.Item>
                            <ListGroup.Item>
                                <Button className="border border-dark rounded-0 py-2 px-4" variant="dark">Sign Up</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm className="px-2">
                        <ListGroup>
                            <ListGroup.Item className="py-5 bg-danger text-light"><h1>Pro</h1></ListGroup.Item>
                            <ListGroup.Item><b>$ 59.99</b> / year</ListGroup.Item>
                            <ListGroup.Item><b>25GB</b> Storage</ListGroup.Item>
                            <ListGroup.Item><b>25</b> Emails</ListGroup.Item>
                            <ListGroup.Item><b>25</b> Domains</ListGroup.Item>
                            <ListGroup.Item><b>2GB</b> Bandwidth</ListGroup.Item>
                            <ListGroup.Item><b>Endless</b> Support</ListGroup.Item>
                            <ListGroup.Item>
                                <Button className="border border-dark rounded-0 py-2 px-4" variant="dark">Sign Up</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm className="px-2 py-4">
                        <ListGroup>
                            <ListGroup.Item className="py-4 bg-success text-light"><h1>Ultimate</h1></ListGroup.Item>
                            <ListGroup.Item><b>$ 99.99</b> / year</ListGroup.Item>
                            <ListGroup.Item><b>50GB</b> Storage</ListGroup.Item>
                            <ListGroup.Item><b>50</b> Emails</ListGroup.Item>
                            <ListGroup.Item><b>50</b> Domains</ListGroup.Item>
                            <ListGroup.Item><b>5GB</b> Bandwidth</ListGroup.Item>
                            <ListGroup.Item><b>Endless</b> Support</ListGroup.Item>
                            <ListGroup.Item>
                                <Button className="border border-dark rounded-0 py-2 px-4" variant="dark">Sign Up</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>

            </Container>
        )
    }
}

export default Pricing;
