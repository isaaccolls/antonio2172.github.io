import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeBanner from '../HomeBanner';
import Navbar from '../CustomNavBar';
import Home from '../Home';
import About from '../About';
import Portfolio from '../Portfolio';
import Blog from '../Blog';
import Contact from '../Contact';
import Footer from '../Footer';
import '../../assets/fonts/FontAwesome';
import './App.css';

const App = () => {
  return (
    <Router>
      <div id="page-container" className="">
        <HomeBanner />
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/Contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
