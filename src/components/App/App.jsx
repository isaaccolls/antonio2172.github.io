import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeBanner from '../HomeBanner';
import Navbar from '../CustomNavBar';
import Home from '../Home';
import About from '../About';
import Portfolio from '../Portfolio';
import Blog from '../ComingSoon';
import Contact from '../Contact';
import Footer from '../Footer';
import NotFound from '../NotFound';
import '../../assets/fonts/FontAwesome';

const App = () => (
  <Router>
    <HomeBanner />
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/Contact" component={Contact} />
      <Route path="*" component={NotFound} />
    </Switch>
    <Footer />
  </Router>
);

export default App;
