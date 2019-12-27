import React, {Component} from 'react';
/*      Styles      */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
/* Remember add comments !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */

class App extends Component {
    render() {
        return (
            <div>
              {/**  <SiteNavbar/>
                <div id="home">
                    <Header/>
                </div>

                <div id="about">
                    <About/>
                </div>
                <div>
                    <Quote/>
                </div>
                <div id="team">
                    <Team/>
                </div>
                <div id="ourWork">
                    <OurWork/>
                </div>
                <div>
                    <Stats/>
                </div>
                <div id="offer">
                    <Offer/>
                </div>
                <div id="pricing">
                    <Pricing/>
                </div>
                <div>
                    <Partners/>
                </div>*/}
                <div id="contact">
                    <Contact/>
                </div>
            </div>
        );
    }
}

export default App;
