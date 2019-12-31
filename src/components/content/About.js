import React, {Component} from 'react'
import {Container, Row, Col, Media} from 'react-bootstrap'

class About extends Component {

    render() {

        return (
            <div
                className="text-center"
                style={{
                minHeight: "80vh",
                fontFamily: '"Comic Sans MS", cursive, sans-serif'
            }}>
                <div className="p-4 mt-5">
                    <h3 className="font-weight-bold">About us</h3>
                    <h5>Key features of our company</h5>
                    
                </div>

                <Container>
                    <Row>
                        <Col sm className="p-2 m-2 text-center">
                            <Media className="justify-content-center p-4">
                                <img
                                    width={128}
                                    height={128}
                                    src="https://image.flaticon.com/icons/png/512/65/65381.png"
                                    alt="responsive"/>
                            </Media>
                            <p className="font-weight-bolder p-2">Responsive</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere
                                augue eget ante porttitor fringilla. Aliquam laoreet, sem eu dapibus congue,</p>
                        </Col>
                        <Col sm className="p-2 m-2 text-center">
                            <Media className="justify-content-center p-4">
                                <img
                                    width={128}
                                    height={128}
                                    src="https://image.flaticon.com/icons/png/512/1496/1496034.png"
                                    alt="creative"/>
                            </Media>
                            <p className="font-weight-bolder p-2">Creative</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere
                                augue eget ante porttitor fringilla. Aliquam laoreet, sem eu dapibus congue,</p>
                        </Col>
                        <Col sm className="p-2 m-2 text-center">
                            <Media className="justify-content-center p-4">
                                <img
                                    width={128}
                                    height={128}
                                    src="https://image.flaticon.com/icons/png/512/1067/1067566.png"
                                    alt="support"/>
                            </Media>
                            <p className="font-weight-bolder p-2">Support</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere
                                augue eget ante porttitor fringilla. Aliquam laoreet, sem eu dapibus congue,</p>
                        </Col>
                        <Col sm className="p-2 m-2 text-center">
                            <Media className="justify-content-center p-4">
                                <img
                                    width={128}
                                    height={128}
                                    src="https://image.flaticon.com/icons/png/512/125/125768.png"
                                    alt="ideas"/>
                            </Media>
                            <p className="font-weight-bolder p-2">Ideas</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere
                                augue eget ante porttitor fringilla. Aliquam laoreet, sem eu dapibus congue,</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default About;