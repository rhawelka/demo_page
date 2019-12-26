import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'

class Stats extends Component {
    render() {

        const rowStyle = {
            backgroundColor: "gray",
            color: "white",
            minHeight: "30vh"
        }

        return (
            <Container fluid>
                <Row className="text-center align-items-center" style={rowStyle}>
                    <Col className="py-3 border border-top-0 border-bottom-0 border-left-0">
                        <h1>26+</h1>
                        <p>Partners</p>
                    </Col>
                    <Col sm className="py-3 border border-top-0 border-bottom-0">
                        <h1>78+</h1>
                        <p>Projects Done</p>
                    </Col>
                    <Col sm className="py-3 border border-top-0 border-bottom-0">
                        <h1>1460+</h1>
                        <p>Happy Clients</p>
                    </Col>
                    <Col sm className="py-3 border border-top-0 border-bottom-0 border-right-0">
                        <h1>$260mln+</h1>
                        <p>Money Earn with us</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Stats;
