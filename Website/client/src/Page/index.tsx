import styled from 'styled-components';
import Home from './Home';

const WebsiteWrapper = styled('div')`
  font-size: 5rem;
`;

const App = () => {
  return (
    <WebsiteWrapper>
      <p>Hello henriette 😺 and Hussein 😁, Goodnight😴</p>
      <Home />
    </WebsiteWrapper>
  );
};

export default App;
