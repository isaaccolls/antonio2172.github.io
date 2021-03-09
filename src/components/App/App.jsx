import React from 'react';
import {
  HashRouter as Router, Route, Switch, useLocation,
} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomeBanner from '../HomeBanner';
import Navbar from '../NavBar';
import Home from '../Home';
import About from '../About';
import Contact from '../Contact';
import ComingSoon from '../ComingSoon';
import Footer from '../Footer';
import NotFound from '../NotFound';
import '../../assets/fonts/FontAwesome';

const usePageViews = () => {
  const location = useLocation();
  React.useEffect(() => {
    window.gtag('event', 'screen_view', {
      app_name: 'isaaccolls.website',
      screen_name: location.pathname,
    });
  }, [location]);
};

const Pages = () => {
  usePageViews();
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/portfolio" component={ComingSoon} />
      <Route exact path="/blog" component={ComingSoon} />
      <Route exact path="/Contact" component={Contact} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

const App = () => (
  <Router>
    <div className="wrapper-global">
      <HomeBanner />
      <Navbar />
      <Container className="py-4 wrapper" fluid>
        <Pages />
      </Container>
      <Footer />
    </div>
  </Router>
);

export default App;
