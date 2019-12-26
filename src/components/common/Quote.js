import React, {Component} from 'react';

class Quote extends Component {

    render() {
        const bcgImgUrl = "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress" +
                "&cs=tinysrgb&dpr=3&h=750&w=1260";
        const quoteStyle = {
            minHeight: "35vh",
            backgroundImage: "url(" + bcgImgUrl + ")",
            backgroundRepeat: "no-repeat, center",
            backgroundSize: "contain",
            opacity: ".9",
            color: "white",
        }
        const textStyle = {
            fontFamily: "'Amatic SC', cursive",
            fontSize: "48px"
        }

        return (
            <div style={quoteStyle} className="text-center py-5">
                <p style={textStyle} className="px-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut. sed do eiusmod tempor incididunt u</p>
                    <cite>Decard Cain</cite>
            </div>
        )
    }
}

export default Quote;
