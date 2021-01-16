import React from 'react';
import { HashRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import HomeBanner from '../HomeBanner';
import Navbar from '../CustomNavBar';
import Home from '../Home';
import About from '../About';
import ComingSoon from '../ComingSoon';
import Footer from '../Footer';
import NotFound from '../NotFound';
import '../../assets/fonts/FontAwesome';

const usePageViews = () => {
  let location = useLocation();
  React.useEffect(() => {
    window.gtag('event', 'screen_view', {
      'app_name': 'isaaccolls.website',
      'screen_name': location.pathname,
    });
  }, [location]);
}

const Pages = () => {
  usePageViews();
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/portfolio" component={ComingSoon} />
      <Route exact path="/blog" component={ComingSoon} />
      <Route exact path="/Contact" component={ComingSoon} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

const App = () => {
  return (
    <Router>
      <HomeBanner />
      <Navbar />
      <Pages />
      <Footer />
    </Router>
  );
};


export default App;