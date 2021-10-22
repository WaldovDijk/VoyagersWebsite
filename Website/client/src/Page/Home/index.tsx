import styled from 'styled-components';
import TopBanner from './content/top-banner.jpg';

const HomeWrapper = styled('div')`
  display: grid;
  grid-template-rows: clamp(10rem, 30vw, 50rem);
  font-size: 5rem;
`;

const HomeBanner = styled('div')`
  background-image: url(${TopBanner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <HomeBanner />
      Home
    </HomeWrapper>
  );
};

export default Home;
