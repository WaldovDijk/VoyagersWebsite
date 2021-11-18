import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import RoomsPage from '../../Components/RoomsPage';
import { RoomsData } from '../../Data';

const AboutWrapper = styled('div')`
  display: grid;
  grid-column: 2/3;
  justify-content: center;
  font-size: clamp(1.4rem, 1.5vw, 1.6rem);
`;

const Rooms = () => {
  return (
    <AboutWrapper>
      <Switch>
        <Route path='/rooms/single'>
          <RoomsPage Data={RoomsData.Single} />
        </Route>
        <Route path='/rooms/double'>
          <RoomsPage Data={RoomsData.Double} />
        </Route>
        <Route path='/rooms/twin'>
          <RoomsPage Data={RoomsData.Twin} />
        </Route>
        <Route path='/rooms/triple'>
          <RoomsPage Data={RoomsData.Triple} />
        </Route>
        <Route path='/rooms/four'>
          <RoomsPage Data={RoomsData.Four} />
        </Route>
      </Switch>
    </AboutWrapper>
  );
};

export default Rooms;
