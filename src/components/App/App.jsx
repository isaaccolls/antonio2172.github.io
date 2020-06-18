import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeBanner from '../HomeBanner';
import Navbar from '../CustomNavBar';
import Home from '../../containers/Home';
import About from '../../containers/About';
import Portfolio from '../../containers/Portfolio';
import ComingSoon from '../../containers/ComingSoon';
import Contact from '../../containers/Contact';
import Footer from '../Footer';
import '../../assets/fonts/FontAwesome';
import './App.css';

function App() {
  return (
    <Router>
      <div id="page-container" className="">
        <HomeBanner />
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/blog" component={ComingSoon} />
        <Route exact path="/Contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
