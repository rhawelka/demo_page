import React, {Component} from 'react'
import {Container, Row, Col, Media} from 'react-bootstrap'

class OurWork extends Component {
    render() {
        return (
            <Container
                className="pt-4"
                fluid
                style={{
                minHeight: "60vh",
                backgroundColor: "#333333",
                color: "white"
            }}>
                <Row>
                    <Col sm md className="p-2 mt-5 text-center">
                        <p className="font-weight-bolder p-2">Our Work</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere
                            augue eget ante porttitor fringilla. Aliquam laoreet, sem eu dapibus congue,
                            orem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere augue
                            eget ante porttitor fringilla. Aliquam laoreet, sem eu dapibus congue</p>
                    </Col>
                    <Col sm md className="p-2 m-2 text-center bg-light text-dark">
                        <Media>
                            <img
                                style={{
                                width: "100%"
                            }}
                                src="https://images.pexels.com/photos/46168/space-telescope-mirror-segments-james-webb-cosmos-46168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt="project"/>
                        </Media>
                        <p className="font-weight-bolder p-2">Project 1</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere
                            augue eget ante porttitor fringilla. Aliquam laoreet, sem eu dapibus congue,
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere
                            augue eget ante porttitor fringilla. Aliquam laoreet, sem eu dapibus congue,</p>
                    </Col>
                    <Col sm md className="p-2 m-2 text-center bg-light text-dark">
                        <Media>
                            <img
                                style={{
                                width: "100%"
                            }}
                                src="https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                alt="project"/>
                        </Media>
                        <p className="font-weight-bolder p-2">Project 2</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere
                            augue eget ante porttitor fringilla. Aliquam laoreet, sem eu dapibus congue,
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere
                            augue eget ante porttitor fringilla. Aliquam laoreet, sem eu dapibus congue,</p>
                    </Col>
                    <Col sm md className="p-2 m-2 text-center bg-light text-dark">
                        <Media>
                            <img
                                style={{
                                width: "100%"
                            }}
                                src="https://images.pexels.com/photos/256302/pexels-photo-256302.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                alt="project"/>
                        </Media>
                        <p className="font-weight-bolder p-2">Project 3</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere
                            augue eget ante porttitor fringilla. Aliquam laoreet, sem eu dapibus congue,
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere
                            augue eget ante porttitor fringilla. Aliquam laoreet, sem eu dapibus congue,</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default OurWork;
