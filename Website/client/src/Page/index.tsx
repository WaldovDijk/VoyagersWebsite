import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Footer from '../Components/Footer';
import InfoHeader from '../Components/InfoHeader';
import Navigation from '../Components/Navigation';
import Home from './Home';

import TopBanner from '../Data/Images/top-banner.jpg';
import { BreakPoints } from '../Style';
import About from './About';
import TextPage from '../Components/TextPage';
import { ReservationData } from '../Data';
import Rooms from './Rooms';
import Helmet from 'react-helmet';
import Contact from './Contact';

const WebsiteWrapper = styled('div')`
  display: grid;

  grid-template-columns: 1fr minmax(0, 120rem) 1fr;
  grid-template-rows: 7rem auto 1fr auto;
  min-height: 100%;
  box-sizing: border-box;

  @media (min-width: ${BreakPoints.md}) {
    grid-template-rows: 5.4rem 7rem auto 1fr auto;
  }
`;

const BannerWrapper = styled('div')`
  grid-column: 1/-1;
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

const PageWrapper = styled('div')`
  display: grid;
  grid-template-rows: 5rem 1fr;
  grid-column: 2/3;
  justify-content: center;
  font-size: clamp(1.4rem, 1.5vw, 1.6rem);
`;

const App = () => {
  return (
    <WebsiteWrapper>
      <Helmet>
        <title>Voyagers Amsterdam | Home</title>
        <meta name='description' content='Homepage of the website.' />
      </Helmet>
      <Router>
        <InfoHeader />
        <Navigation />
        <BannerWrapper>
          <Banner />
        </BannerWrapper>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route exact path='/reservations'>
            <PageWrapper>
              <TextPage Data={ReservationData} />
            </PageWrapper>
          </Route>
          <Route path='/rooms' component={Rooms} />
          <Route path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </WebsiteWrapper>
  );
};

export default App;
