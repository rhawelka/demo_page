import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import SocialIcons from '../common/SocialIcons';

const PageHeaderContent = () => {

    const pageHeading = {
        marginTop: "25%",
        fontFamily: "Comic Sans MS, cursive, sans-serif"
    }

    const btnStyle = {
        backgroundColor: "white",
        color: "black",
        opacity: ".5",
        border: "none",
        marginTop: "8vh"
    }

    return (
        <div style={pageHeading}>
            <h1 style={{
                fontSize: "64px"
            }}>Start something big now</h1>
            <h4>You'll always regret not having started today</h4>
            <button style={btnStyle} className="py-2 px-5">Start now</button>
        </div>
    )
}

class Header extends Component {
    render() {

        const backgroundImageUrl = "https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&c" +
                "s=tinysrgb&dpr=3&h=750&w=1260";
        const headerStyle = {
            minHeight: "100vh",
            background: "no-repeat center center",
            backgroundImage: "url(" + backgroundImageUrl + ")",
            backgroundAttachment: "scroll",
            position: "relative",
            backgroundSize: "cover",
            color: "white",
            opacity: 0.9
        }

        return (
            <header style={headerStyle}>
                <Container>
                    <Row>
                        <Col lg="8" md="10">
                            <PageHeaderContent/>
                        </Col>
                    </Row>
                </Container>
                <div style={{position: "absolute", bottom: 20, right: 30}}><SocialIcons/></div>
            </header>
        )
    }
}

export default Header;