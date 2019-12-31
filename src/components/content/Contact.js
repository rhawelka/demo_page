import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import ContactForm from '../common/ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt,faPhone,faAt } from '@fortawesome/free-solid-svg-icons'

class Contact extends Component {
    render() {
        return (
            <Container fluid style={{fontFamily: "oswald"}} className="px-5 pt-3 bg-light">
                <div className="text-center mt-5 mb-3">
                    <h2>CONTACT US!</h2>
                    <h4>Let's get in touch. Send us a email:</h4>
                </div>
                <Row>
                    <Col>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3" style={{fontSize: "32px"}}/>  Cracow, PL</p>
                        <p><FontAwesomeIcon icon={faPhone} className="mr-3" style={{fontSize: "32px"}}/>     Phone: +48 656123456</p>
                        <p><FontAwesomeIcon icon={faAt} className="mr-3" style={{fontSize: "32px"}}/>    Email: mail@gmail.com</p>
                    </Col>
                </Row>
                <Row>
                    <ContactForm/>
                </Row>
            </Container>
        )
    }
}

export default Contact;
