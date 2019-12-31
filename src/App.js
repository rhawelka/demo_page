import React, {Component} from 'react';
/*      Styles      */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Media from 'react-media';
/*      Components    */
import SiteNavbar from './components/header/SiteNavbar';
import Header from './components/header/Header';
import About from './components/content/About';
import Team from './components/content/Team';
import Quote from './components/common/Quote';
import OurWork from './components/content/OurWork';
import Stats from './components/common/Stats';
import Offer from './components/content/Offer';
import Pricing from './components/content/Pricing';
import Contact from './components/content/Contact';
import Partners from './components/content/Partners';
import OpinionsCust from './components/common/OpinionsCust';
import Footer from './components/footer/Footer';
/* Remember add comments !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */

// <Media                 queries={{                 small: "(max-width:
// 599px)",                 medium: "(min-width: 600px)"             }}>
// {matches => (                     <React.Fragment>      {matches.small &&
// <div></div>}                         {matches.medium &&       }
//       </React.Fragment>          )} </Media>

class App extends Component {
    render() {
        return (
            <div>
                <SiteNavbar/>
                <div id="home" className="mb-5">
                    <Header/>
                </div>

                <div id="about" className="my-5">
                    <About/>
                </div>
                <div className="my-5">
                    <Quote/>
                </div>
                <div id="team" className="my-5">
                    <Team/>
                </div>
                <div id="ourWork" className="my-5">
                    <OurWork/>
                </div>
                <div className="my-5">
                    <Stats/>
                </div>
                <div id="offer" className="my-5">
                    <Offer/>
                </div>
                <div className="my-5">
                    <OpinionsCust/>
                </div>
                <div className="my-5">
                    <Partners/>
                </div>
                <div id="pricing" className="my-5">
                    <Pricing/>
                </div>
                <div id="contact" className="my-5">
                    <Contact/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
