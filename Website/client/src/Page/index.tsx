import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import Home from './Home';

const WebsiteWrapper = styled(Router)`
  font-size: 5rem;
`;

const App = () => {
  return (
    <WebsiteWrapper>
      <Home />
    </WebsiteWrapper>
  );
};

export default App;
