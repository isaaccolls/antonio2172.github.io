import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import HomeBanner from '../HomeBanner';
import Navbar from '../CustomNavBar';
import Home from '../Home';
import About from '../About';
import ComingSoon from '../ComingSoon';
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
      <Route exact path="/portfolio" component={ComingSoon} />
      <Route exact path="/blog" component={ComingSoon} />
      <Route exact path="/Contact" component={ComingSoon} />
      <Route path="*" component={NotFound} />
    </Switch>
    <Footer />
  </Router>
);

console.log('Your process.env.PUBLIC_URL', process.env.PUBLIC_URL, "?");
export default App;
