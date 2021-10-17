import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './logo.jpg';
import NavItem from './NavItem';

const NavWrapper = styled('div')`
  display: grid;
  grid-auto-flow: column;
  background-color: white;
  font-size: 1.6rem;
  color: black;
  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.3);
`;

const NavLogo = styled('img')`
  height: 9.6rem;
`;

const ItemWrapper = styled('div')`
  display: grid;
  grid-auto-flow: column;
`;

const LogoLink = styled(Link)`
  height: 9.6rem;
  cursor: pointer;
`;

const NavData = [
  {
    title: 'home',
    route: '/',
  },
  {
    title: 'about us',
    route: '/about',
    subtitles: [
      { title: 'general', route: '/general' },
      { title: 'policies', route: '/policies' },
      { title: 'services', route: '/services' },
      { title: 'facilities', route: '/facilities' },
      { title: 'location', route: '/location' },
    ],
  },
  {
    title: 'reservations',
    route: '/reservations',
  },
  {
    title: 'rooms',
    route: '/rooms',
    subtitles: [
      { title: 'single - basic', route: '/single' },
      { title: 'double - ensuite', route: '/double' },
      { title: 'twin - ensuite', route: '/twin' },
      { title: 'triple - basic', route: '/triple' },
      { title: 'four bed - basic', route: '/four' },
    ],
  },
  {
    title: 'contact us',
    route: '/contact',
  },
];

const Navigation = () => {
  return (
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
  );
};

export default Navigation;
