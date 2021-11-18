import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import TextPage from '../../Components/TextPage';
import { AboutData } from '../../Data';

const AboutWrapper = styled('div')`
  display: grid;
  grid-column: 2/3;
  justify-content: center;
  font-size: clamp(1.4rem, 1.5vw, 1.6rem);
`;

const About = () => {
  return (
    <AboutWrapper>
      <Switch>
        <Route exact path='/about'>
          <TextPage Data={AboutData.About} />
        </Route>
        <Route path='/about/general'>
          <TextPage Data={AboutData.General} />
        </Route>
        <Route path='/about/policies'>
          <TextPage Data={AboutData.Policies} />
        </Route>
        <Route path='/about/services'>
          <TextPage Data={AboutData.Services} />
        </Route>
        <Route path='/about/facilities'>
          <TextPage Data={AboutData.Facilities} />
        </Route>
        <Route path='/about/location'>
          <TextPage Data={AboutData.Location} />
        </Route>
      </Switch>
    </AboutWrapper>
  );
};

export default About;
