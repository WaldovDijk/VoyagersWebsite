import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from '../../../Style/Icons';

const SubWrapper = styled('div')`
  visibility: hidden;
  width: max-content;
  padding: 0 2rem 0 0;
  position: absolute;
  top: 7rem;
  display: grid;
  left: 0;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    top: -0.3rem;
    border-bottom: 3px solid #0dc0c0;
    cursor: pointer;
  }
`;

const NavTitle = styled('div')`
  height: 7rem;
  width: max-content;
  display: grid;
  align-content: center;
  position: relative;
`;

const Nav = styled(NavLink)`
  height: 100%;
  width: max-content;
  display: grid;
  grid-auto-flow: column;
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  align-content: center;
  align-items: center;

  ${Icon} {
    transition: all 0.2s linear;
  }

  &.active {
    color: #0dc0c0;
    & ${NavTitle}::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 6.7rem;
      border-bottom: 3px solid #0dc0c0;
    }
  }
`;

const SubLink = styled(NavLink)`
  background-color: #1e2127;
  width: 100%;
  padding: 1rem;
  color: white;
  text-decoration: none;
  &:hover {
    background-color: #404549;
    color: #0dc0c0;
  }
  &.active {
    color: #0dc0c0;
    background-color: #404549;
  }
`;

const NavWrapper = styled('div')`
  position: relative;
  &:not(:last-child) {
    padding-right: 1rem;
  }

  ${(props: { hover: boolean }) => {
    if (props.hover) {
      return `
      ${Nav} {
        color: #0dc0c0;
        ${Icon} {
          transform: rotate(-90deg);
        }

        & + ${SubWrapper} {
          visibility: visible;

          &:hover {
            visibility: visible;
            ${Icon} {
              transition: all 0.2s linear;
            }
          }
        }

        & ${NavTitle}::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 6.7rem;
          border-bottom: 3px solid #0dc0c0;
        }
      }`;
    }
  }}
`;

const NavItem = ({
  title,
  route,
  subtitles,
}: {
  title: string;
  route: string;
  subtitles?: { title: string; route: string; exact?: boolean }[];
}) => {
  const CheckSubtitles = () => {
    return subtitles ? false : true;
  };

  const [hover, setHover] = useState(false);

  return (
    <NavWrapper hover={hover}>
      <Nav
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseDown={() => setHover(true)}
        to={route}
        exact={CheckSubtitles()}
        activeClassName='active'
        onClick={(e) => {
          if (subtitles) e.preventDefault();
        }}
      >
        <NavTitle>{title}</NavTitle>
        {subtitles && <Icon size={2.4} icon='arrow' />}
      </Nav>
      {subtitles && (
        <SubWrapper
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {subtitles.map((data, i) => (
            <SubLink
              onMouseUp={() => setHover(false)}
              key={i}
              to={data.route}
              activeClassName='active'
              exact={data.exact}
            >
              {data.title}
            </SubLink>
          ))}
        </SubWrapper>
      )}
    </NavWrapper>
  );
};

export default NavItem;
