import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap';


export default class Partners extends Component {
    render() {
        return (

            <Container className="text-center my-5">
                <h1 style={{
                    fontFamily: "oswald"
                }}>They trusted us:</h1>
                <p
                    className="bg-dark border-bottom-2 border-dark mx-auto"
                    style={{
                    width: "20vw",
                    height: "5px"
                }}></p>
                <Row className="justify-content-around mt-3 align-items-center">
                    <Col sm className="p-3">
                        <img
                            alt="partnerLogo"
                            src="http://pngimg.com/uploads/tesla_logo/tesla_logo_PNG2.png"
                            style={{
                            width: "90%"
                        }}></img>
                    </Col>
                    <Col sm className="p-3">
                        <img
                            alt="partnerLogo"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1224px-NASA_logo.svg.png"
                            style={{
                            width: "90%"
                        }}></img>
                    </Col>
                    <Col sm className="p-3">
                        <img
                            alt="partnerLogo"
                            src="https://r-scale-80.dcs.redcdn.pl/scale/o2/tvn/web-content/m/p1/i/a14ac55a4f27472c5d894ec1c3c743d2/c8aa9c86-cccf-45b3-b49a-ddcfa1ddd5c9.jpg?type=1&srcmode=0&srcx=51/100&srcy=1/1&srcw=87/100&srch=97/100&dstw=640&dsth=360&quality=80"
                            style={{
                            width: "90%"
                        }}></img>
                    </Col>
                    <Col sm className="p-4">
                        <img
                            alt="partnerLogo"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/500px-LEGO_logo.svg.png"
                            style={{
                            width: "90%"
                        }}></img>
                    </Col>
                    <Col sm className="p-3">
                        <img
                            alt="partnerLogo"
                            src="https://barr.pl/investors/wp-content/uploads/sites/2/2015/06/Nokia-logo.jpg"
                            style={{
                            width: "90%"
                        }}></img>
                    </Col>
                    <Col sm className="p-3">
                        <img
                            alt="partnerLogo"
                            src="https://i.wpimg.pl/730x0/m.komorkomania.pl/motorola-logo-116f7a9feced1f0b38.jpg"
                            style={{
                            width: "90%"
                        }}></img>
                    </Col>
                </Row>
                <Row className="justify-content-around mt-1 align-items-center">
                    <Col sm className="p-3">
                        <img
                            alt="partnerLogo"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfOfJ3buSRuEr3JzHX-c7yXebWAaEjC8RbSB30Izb2rbSyNkaJnQ&s"
                            style={{
                            width: "90%"
                        }}></img>
                    </Col>
                    <Col sm className="p-3">
                        <img
                            alt="partnerLogo"
                            src="https://lezebre.lu/images/detailed/19/Bugatti_logo_2.png"
                            style={{
                            width: "90%"
                        }}></img>
                    </Col>
                    <Col sm className="p-3">
                        <img
                            alt="partnerLogo"
                            src="https://cdn-blog.scorum.com/production/paulao0506/02034a9cd195b25e_800"
                            style={{
                            width: "90%"
                        }}></img>
                    </Col>
                    <Col sm className="p-3">
                        <img
                            alt="partnerLogo"
                            src="https://www.cdprojekt.com/pl/wp-content/uploads-pl/2016/06/cdp-sa_logo-horizontal-black_rgb.png"
                            style={{
                            width: "90%"
                        }}></img>
                    </Col>
                    <Col sm className="p-3">
                        <img
                            alt="partnerLogo"
                            src="http://krakow.pl/zalacznik/277099/9"
                            style={{
                            width: "90%"
                        }}></img>
                    </Col>
                    <Col sm className="p-3">
                        <img
                            alt="partnerLogo"
                            src="https://resources.mynewsdesk.com/image/upload/t_open_graph_image/ss0gvksw5j4i1ww6csom.jpg"
                            style={{
                            width: "90%"
                        }}></img>
                    </Col>
                </Row>
            </Container>
        )
    }
}
