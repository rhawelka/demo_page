import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'

export default class Partners extends Component {
    render() {
        return (
            <Container className="text-center my-5">
            <h1>They trusted us:</h1>
                <Row className="justify-content-around mt-5">
                    <Col sm className="p-2">1</Col>
                    <Col sm className="p-2">1</Col>
                    <Col sm className="p-2">1</Col>
                    <Col sm className="p-2">1</Col>
                    <Col sm className="p-2">1</Col>
                    <Col sm className="p-2">1</Col>
                </Row>
                <Row>
                    <Col sm className="p-2">1</Col>
                    <Col sm className="p-2">1</Col>
                    <Col sm className="p-2">1</Col>
                    <Col sm className="p-2">1</Col>
                    <Col sm className="p-2">1</Col>
                    <Col sm className="p-2">1</Col>
                </Row>
            </Container>
        )
    }
}
