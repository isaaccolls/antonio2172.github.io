import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Navbar from './components/CustomNavBar';
import HomeBanner from './components/HomeBanner';

function App() {
  return (
    <Router>
      <div id="appContainer">
        <HomeBanner />
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/news" component={News} />
      </div>
    </Router>
  );
}

export default App;
