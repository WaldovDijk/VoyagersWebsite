import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NavData } from '../../Data';
import Logo from './logo.jpg';
import NavItem from './NavItem';

const NavWrapper = styled('div')`
  display: grid;
  grid-auto-flow: column;
  width: 120rem;
  margin: auto;
`;

const Nav = styled('div')`
  background-color: white;
  font-size: 1.6rem;
  color: black;
  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.3);
`;

const NavLogo = styled('img')`
  height: 7rem;
`;

const ItemWrapper = styled('div')`
  display: grid;
  grid-auto-flow: column;
`;

const LogoLink = styled(Link)`
  height: 7rem;
  cursor: pointer;
`;

const Navigation = () => {
  return (
    <Nav>
      <NavWrapper>
        <LogoLink to='/'>
          <NavLogo src={Logo} alt='logo' />
        </LogoLink>
        <ItemWrapper>
          {NavData.map((data, i) => (
            <NavItem
              key={i}
              title={data.title}
              route={data.route}
              subtitles={data.subtitles}
            />
          ))}
        </ItemWrapper>
      </NavWrapper>
    </Nav>
  );
};

export default Navigation;
