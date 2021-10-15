import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './logo.jpg';

const NavWrapper = styled('div')`
  background-color: white;
  font-size: 1.6rem;
  color: black;
  height: 5.4rem;
`;

const LogoLink = styled(Link)`
  cursor: pointer;
`;

const Navigation = () => {
  return (
    <NavWrapper>
      <LogoLink to='/'>
        <img src={Logo} alt='logo' />
      </LogoLink>
    </NavWrapper>
  );
};

export default Navigation;
