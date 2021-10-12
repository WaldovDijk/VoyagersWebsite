import styled from 'styled-components';
import InfoHeader from '../../Components/Home/InfoHeader';

const HomeWrapper = styled('div')`
  font-size: 5rem;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <InfoHeader />
    </HomeWrapper>
  );
};

export default Home;
