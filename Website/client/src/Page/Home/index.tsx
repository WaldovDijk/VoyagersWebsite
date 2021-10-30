import styled from 'styled-components';
import HomeRooms from '../../Components/Home/Rooms';

const HomeWrapper = styled('div')`
  display: grid;
  padding: 4rem;
  grid-template-columns: clamp(20rem, 90%, 120rem);
  justify-content: center;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <HomeRooms />
    </HomeWrapper>
  );
};

export default Home;
