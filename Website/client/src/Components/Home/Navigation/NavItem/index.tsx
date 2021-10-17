import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from '../../../../Style/Icons';

const SubWrapper = styled('div')`
  visibility: hidden;
  width: max-content;
  background-color: #1e2127;
  position: absolute;
  top: 9.6rem;
  display: grid;
  left: 0;
  &:hover {
    background-color: #21262b;
  }
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    top: -0.3rem;
    border-bottom: 3px solid #0dc0c0;
  }
`;

const NavTitle = styled('div')`
  height: 9.6rem;
  width: max-content;
  display: grid;
  align-content: center;
  position: relative;
`;

const NavLink = styled(Link)`
  height: 100%;
  width: max-content;
  display: grid;
  grid-auto-flow: column;
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  align-content: center;
  align-items: center;
  position: relative;
  &:hover {
    color: #0dc0c0;
    ${Icon} {
      transform: rotate(-90deg);
    }

    ${SubWrapper} {
      visibility: visible;
    }

    ${NavTitle}::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 9.3rem;
      border-bottom: 3px solid #0dc0c0;
    }
  }

  ${Icon} {
    transition: all 0.2s linear;
  }
`;

const SubLink = styled(Link)`
  padding: 1rem;
  color: white;
  text-decoration: none;
`;

const NavItem = ({
  title,
  route,
  subtitles,
}: {
  title: string;
  route: string;
  subtitles?: { title: string; route: string }[];
}) => {
  return (
    <NavLink to={route}>
      <NavTitle>{title}</NavTitle>
      {subtitles && <Icon size={2.4} icon='arrow' />}
      {subtitles && (
        <SubWrapper>
          {subtitles.map((data, i) => (
            <SubLink key={i} to={data.route}>
              {data.title}
            </SubLink>
          ))}
        </SubWrapper>
      )}
    </NavLink>
  );
};

export default NavItem;
