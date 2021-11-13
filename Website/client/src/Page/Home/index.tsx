import styled from 'styled-components';
import About from '../../Components/Home/About';
import HomeRooms from '../../Components/Home/Rooms';
import Testimonials from '../../Components/Home/Testimonials';
import { BreakPoints } from '../../Style';

const HomeWrapper = styled('div')`
  display: grid;
  padding: 0rem;
  grid-template-columns: clamp(20rem, 90%, 120rem);
  justify-content: center;
  @media (min-width: ${BreakPoints.sm}) {
    padding: 4rem;
  }
`;
const HomeContainer = styled('div')`
  display: grid;
  grid-auto-flow: row;
  grid-auto-columns: 1fr;
  gap: 3rem;
  @media (min-width: ${BreakPoints.lg}) {
    grid-auto-columns: 30% 1fr;
    grid-auto-flow: column;
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <HomeRooms />
      <HomeContainer>
        <Testimonials />
        <About />
      </HomeContainer>
    </HomeWrapper>
  );
};

export default Home;
