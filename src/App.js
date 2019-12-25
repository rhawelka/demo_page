import React, {Component} from 'react';
/*      Styles      */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
/*      Components    */
import SiteNavbar from './components/header/SiteNavbar';
import Header from './components/header/Header';
import About from './components/content/About';
import Team from './components/content/Team';



class App extends Component {
    render() {
        return (
            <div>
                <SiteNavbar/>
                <div id="home">
                    <Header/>
                </div>
                <div id="about">
                    <About/>
                </div>
                <div id="team">
                    <Team/>
                </div>

            </div>
        );
    }
}

export default App;
