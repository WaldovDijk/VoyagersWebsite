import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Footer from '../Components/Footer';
import InfoHeader from '../Components/InfoHeader';
import Navigation from '../Components/Navigation';
import Home from './Home';

const WebsiteWrapper = styled(Router)`
  font-size: 5rem;
`;

const App = () => {
  return (
    <WebsiteWrapper>
      <InfoHeader />
      <Navigation />
      {/*
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={Home} />
        <Route exact path='/reservations' component={Home} />
        <Route exact path='/rooms' component={Home} />
        <Route exact path='/contact' component={Home} />
      </Switch>
      <Footer /> */}
    </WebsiteWrapper>
  );
};

export default App;
