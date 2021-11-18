import styled from 'styled-components';
import About from '../../Components/Home/About';
import HomeRooms from '../../Components/Home/Rooms';
import Testimonials from '../../Components/Home/Testimonials';
import { BreakPoints } from '../../Style';

const HomeWrapper = styled('div')`
  grid-column: 2/3;
  display: grid;
  justify-content: center;
  padding: 2rem;
  @media (min-width: ${BreakPoints.sm}) {
    padding: 4rem;
  }
`;
const HomeContainer = styled('div')`
  gap: 3rem;
  @media (min-width: ${BreakPoints.lg}) {
    display: grid;
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
