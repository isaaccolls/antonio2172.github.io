import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './assets/fontawesome';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Navbar from './components/CustomNavBar';
import HomeBanner from './components/HomeBanner';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div id="appContainer" className="min-h-100">
        <HomeBanner />
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/news" component={News} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
