import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeBanner from './components/HomeBanner';
import Navbar from './components/CustomNavBar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import './assets/fontawesome';
import './App.css';

function App() {
  return (
    <Router>
      <div id="page-container" className="min-h-100">
        <HomeBanner />
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
