import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'

class Offer extends Component {
    render() {

        const colStyle = {
            minHeight: "20vh",
            padding: "1rem",
            fontFamily: "'Oswald', sans-serif"
        }
        return (
            <Container className="mt-3">
                <div className="text-center px-5">
                    <h1>What We Offer</h1>
                    <p className="px-5 py-1 bg-dark"></p>
                </div>
                <Row className="p-2">
                    <Col className="bg-white text-dark" style={colStyle} sm>
                        <h3>Design</h3>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                            sollicitudin commodo. ola la in gravida null a vel metus sil docior.</p>
                    </Col>
                    <Col className="bg-light text-dark" style={colStyle} sm>
                        <h3>Branding</h3>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                            sollicitudin commodo. ola la in gravida null a vel metus sil docior.</p>
                    </Col>
                    <Col className="bg-secondary text-white" style={colStyle} sm>
                        <h3>Consultation</h3>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                            sollicitudin commodo. ola la in gravida null a vel metus sil docior.</p>
                    </Col>
                    <Col className="bg-dark text-white" style={colStyle} sm>
                        <h3>Support</h3>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                            sollicitudin commodo. ola la in gravida null a vel metus sil docior.</p>
                    </Col>
                </Row>
                <Row className="p-2">
                    <Col className="bg-white text-dark" style={colStyle} sm>
                        <h3>Plans</h3>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                            sollicitudin commodo. ola la in gravida null a vel metus sil docior.</p>
                    </Col>
                    <Col className="bg-light text-dark" style={colStyle} sm>
                        <h3>Marketing</h3>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                            sollicitudin commodo. ola la in gravida null a vel metus sil docior.</p>
                    </Col>
                    <Col className="bg-secondary text-white" style={colStyle} sm>
                        <h3>Gifts</h3>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                            sollicitudin commodo. ola la in gravida null a vel metus sil docior.</p>
                    </Col>
                    <Col className="bg-dark text-white" style={colStyle} sm>
                        <h3>Advertisement</h3>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                            sollicitudin commodo. ola la in gravida null a vel metus sil docior.</p>
                    </Col>
                </Row>
                <Row className="p-2">
                    <Col className="bg-white text-dark" style={colStyle} sm>
                        <h3>Automation</h3>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                            sollicitudin commodo. ola la in gravida null a vel metus sil docior.</p>
                    </Col>
                    <Col className="bg-light text-dark" style={colStyle} sm>
                        <h3>Platform</h3>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                            sollicitudin commodo. ola la in gravida null a vel metus sil docior.</p>
                    </Col>
                    <Col className="bg-secondary text-white" style={colStyle} sm>
                        <h3>Personalization</h3>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                            sollicitudin commodo. ola la in gravida null a vel metus sil docior.</p>
                    </Col>
                    <Col className="bg-dark text-white" style={colStyle} sm>
                        <h3>Realization</h3>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                            sollicitudin commodo. ola la in gravida null a vel metus sil docior.</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Offer;
