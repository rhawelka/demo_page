import React, {Component} from 'react';
import {
    Card,
    CardGroup,
    Container,
    Row
} from 'react-bootstrap';

class Team extends Component {
    render() {
        return (
            <Container
                className="text-center mt-5"
                style={{
                minHeight: "60vh",
                fontFamily: '"Comic Sans MS", cursive, sans-serif'
            }}>
                <h3>The team</h3>
                <p
                    className="my-4 px-4 font-weight-light"
                    style={{
                    fontSize: ".8rem"
                }}>Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                </p>
                    <Row>
                        <CardGroup className="p-4">
                            <Card
                                className="p-2 m-1"
                                style={{
                                border: "none"
                            }}>
                                <Card.Img
                                    className="mx-auto"
                                    src="http://www.pngmart.com/files/10/User-Account-Person-PNG-File.png"
                                    style={{
                                    width: "40%"
                                }}/>
                                <Card.Body>
                                    <Card.Title>Craig Hack</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                    </Card.Text>
                                    <Card.Footer>
                                        <small className="text-muted">Back-End Developer</small>
                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                            <Card
                                className="p-2 m-1"
                                style={{
                                border: "none"
                            }}>
                                <Card.Img
                                    className="mx-auto"
                                    src="http://www.pngmart.com/files/10/User-Account-Person-PNG-File.png"
                                    style={{
                                    width: "40%"
                                }}/>
                                <Card.Body>
                                    <Card.Title>Lord Haart</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                    </Card.Text>
                                    <Card.Footer>
                                        <small className="text-muted">Front-End Developer</small>
                                    </Card.Footer>
                                </Card.Body>

                            </Card>
                            <Card
                                className="p-2 m-1"
                                style={{
                                border: "none"
                            }}>
                                <Card.Img
                                    className="mx-auto"
                                    src="http://www.pngmart.com/files/10/User-Account-Person-PNG-File.png"
                                    style={{
                                    width: "40%"
                                }}/>
                                <Card.Body>
                                    <Card.Title>Mutare Drake</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                    </Card.Text>
                                    <Card.Footer>
                                        <small className="text-muted">UX-Designer</small>
                                    </Card.Footer>
                                </Card.Body>

                            </Card>
                        </CardGroup>
                    </Row>
            </Container>

        )
    }
}

export default Team;
