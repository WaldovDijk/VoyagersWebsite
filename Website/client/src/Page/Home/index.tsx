import styled from 'styled-components';
import InfoHeader from '../../Components/Home/InfoHeader';
import Navigation from '../../Components/Home/Navigation';

const HomeWrapper = styled('div')`
  font-size: 5rem;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <InfoHeader />
      <Navigation />
    </HomeWrapper>
  );
};

export default Home;
