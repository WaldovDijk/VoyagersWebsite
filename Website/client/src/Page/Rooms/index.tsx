import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import RoomsPage from '../../Components/RoomsPage';
import { RoomsData } from '../../Data';
import { BreakPoints } from '../../Style';

const AboutWrapper = styled('div')`
  grid-column: 2/3;
  display: grid;
  justify-content: center;
  padding: 2rem;
  @media (min-width: ${BreakPoints.sm}) {
    padding: 4rem;
  }
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
