import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Footer from '../Components/Footer';
import InfoHeader from '../Components/InfoHeader';
import Navigation from '../Components/Navigation';
import Home from './Home';

import TopBanner from '../Data/Images/top-banner.jpg';
import { BreakPoints } from '../Style';
import About from './About';

const WebsiteWrapper = styled('div')`
  display: grid;

  grid-template-rows: 7rem auto 1fr auto;
  min-height: 100%;
  box-sizing: border-box;

  @media (min-width: ${BreakPoints.md}) {
    grid-template-rows: 5.4rem 7rem auto 1fr auto;
  }
`;

const BannerWrapper = styled('div')`
  display: grid;
  grid-template-rows: clamp(10rem, 30vw, 50rem);
`;

const Banner = styled('div')`
  background-image: url(${TopBanner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
`;

const App = () => {
  return (
    <WebsiteWrapper>
      <Router>
        <InfoHeader />
        <Navigation />
        <BannerWrapper>
          <Banner />
        </BannerWrapper>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </Switch>
        <Footer />
        {/*
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={Home} />
        <Route exact path='/reservations' component={Home} />
        <Route exact path='/rooms' component={Home} />
        <Route exact path='/contact' component={Home} />
      </Switch>
      */}
      </Router>
    </WebsiteWrapper>
  );
};

export default App;
