import React, {Component} from 'react'
import {Carousel, Container} from 'react-bootstrap'

export default class OpinionsCust extends Component {
    render() {

        const bgImage = "https://images.pexels.com/photos/234527/pexels-photo-234527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

        const containerStyle = {
            minHeight: "60vh",
            color: "white",
            fontFamily: "oswald",
            backgroundImage: "url(" + bgImage + ")"
        }

        return (
            <Container fluid className="bg-dark" style={containerStyle}>
                <h1 className="text-center p-4">Our clients sentence:</h1>
                <Carousel>
                    <Carousel.Item className="p-5 text-center w-100o">
                        <h2 className="w-75 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Proin venenatis eros condimentum, euismod elit at, dictum purus.
                            Suspendisse potenti. Vestibulum iaculis nunc sed lobortis rutrum.
                        </h2>
                        <p>
                            <b>-</b>
                            Mutare Drake</p>
                    </Carousel.Item>
                    <Carousel.Item className="p-5 text-center w-100o">
                        <h2 className="w-75 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Proin venenatis eros condimentum, euismod elit at, dictum purus.
                            Suspendisse potenti. Vestibulum iaculis nunc sed lobortis rutrum dictum purus.
                        </h2>
                        <p>
                            <b>-</b>
                            Sir Mullich</p>
                    </Carousel.Item>
                    <Carousel.Item className="p-5 text-center w-100o">
                        <h2 className="w-75 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Proin venenatis eros condimentum, euismod elit at, dictum purus.
                            Suspendisse potenti.
                        </h2>
                        <p>
                            <b>-</b>
                            General Kendal</p>
                    </Carousel.Item>
                </Carousel>
            </Container>

        )
    }
}
