import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NavData } from '../../Data';
import useWindowSize from '../../Hooks/WindowSize';
import { BreakPoints } from '../../Style';
import { Icon } from '../../Style/Icons';
import Logo from './logo.jpg';
import NavItem from './NavDesktop';
import NavMobile from './NavMobile';

const NavWrapper = styled('div')`
  grid-column: 2/3;
  display: grid;
  width: 100%;
  grid-auto-flow: column;
  grid-template-columns: min-content 1fr 1fr;
  padding: 0 2rem;
  @media (min-width: ${BreakPoints.sm}) {
    padding: 0 4rem;
  }
  box-sizing: border-box;
  margin: auto;
`;

const Nav = styled('div')`
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: 1fr minmax(0, 120rem) 1fr;
  background-color: white;
  font-size: clamp(1.4rem, 1.5vw, 1.6rem);
  color: black;
  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.3);
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 5;
`;

const NavLogo = styled('img')`
  height: 7rem;
`;

const ItemWrapper = styled('div')`
  grid-column: 3/-1;
  display: grid;
  grid-auto-flow: column;
`;

const MobileWrapper = styled('div')`
  grid-column: 3/-1;
  display: grid;
  align-items: center;
  justify-content: end;
`;

const LogoLink = styled(Link)`
  height: 7rem;
  cursor: pointer;
`;

const NavIcon = styled(Icon)`
  border: 1px solid black;
  width: min-content;
  height: min-content;
  border-radius: 0.4rem;
  cursor: pointer;
`;

const MobileItemWrapper = styled('div')`
  position: fixed;
  display: grid;
  top: 7rem;
  left: 0;
  background-color: #1e2127;
  color: white;
  width: 100%;
`;

const Navigation = () => {
  const size = useWindowSize();
  const [open, setOpen] = useState<boolean>(false);
  console.log(size);
  return (
    <Nav>
      <NavWrapper>
        <LogoLink to='/'>
          <NavLogo src={Logo} alt='logo' />
        </LogoLink>
        {size.width >= 768 ? (
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
        ) : (
          <>
            <MobileWrapper>
              <NavIcon onClick={() => setOpen(!open)} size={3} icon='menu' />
            </MobileWrapper>
            {open && (
              <MobileItemWrapper>
                {NavData.map((data, i) => (
                  <NavMobile
                    key={i}
                    title={data.title}
                    route={data.route}
                    subtitles={data.subtitles}
                    setOpen={setOpen}
                  />
                ))}
              </MobileItemWrapper>
            )}
          </>
        )}
      </NavWrapper>
    </Nav>
  );
};

export default Navigation;
