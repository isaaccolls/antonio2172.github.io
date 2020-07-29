import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeBanner from '../HomeBanner';
import Navbar from '../CustomNavBar';
import HomeContainer from '../Home';
import AboutContainer from '../About';
import PortfolioContainer from '../Portfolio';
import Blog from '../Blog';
import Contact from '../Contact';
import Footer from '../Footer';
import NotFound from '../NotFound';
import '../../assets/fonts/FontAwesome';
import './App.css';

const App = () => (
  <Router>
    <div id="page-container" className="">
      <HomeBanner />
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/about" component={AboutContainer} />
        <Route exact path="/portfolio" component={PortfolioContainer} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/Contact" component={Contact} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
