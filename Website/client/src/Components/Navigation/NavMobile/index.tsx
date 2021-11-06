import { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../../../Style/Icons';
import { NavLink } from 'react-router-dom';

const NavTitle = styled('div')`
  width: max-content;
  display: grid;
  align-content: center;
  position: relative;
`;

const CustomLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: min-content min-content;
  padding: 1.4rem 3rem;
  border-bottom: 1px solid #2e343a;

  &:hover {
    background-color: #404549;
    color: #0dc0c0;

    & ${NavTitle} {
      text-decoration: underline;
    }
  }
  &.active {
    color: #0dc0c0;
    background-color: #404549;
    font-weight: bold;

    & ${NavTitle} {
      text-decoration: underline;
    }
  }
`;

const MobileWrapper = styled('div')`
  background-color: #1e2127;
  color: white;
  width: 100%;
  display: grid;

  ${(props: { hover: boolean }) => {
    if (props.hover) {
      return `
      ${CustomLink} {
        color: #0dc0c0;
        ${Icon} {
          transform: rotate(-90deg);
        }
      }`;
    }
  }}
`;

const ArrowIcon = styled(Icon)`
  transition: all 0.2s linear;
`;

const SubLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  display: grid;
  padding: 1.4rem 3rem;
  border-bottom: 1px solid #2e343a;
  &:hover {
    background-color: #404549;
    color: #0dc0c0;

    text-decoration: underline;
  }
  &.active {
    color: #0dc0c0;
    background-color: #404549;
    font-weight: bold;

    text-decoration: underline;
  }
`;
const NavMobile = ({
  title,
  route,
  subtitles,
  setOpen,
}: {
  title: string;
  route: string;
  subtitles?: { title: string; route: string; exact?: boolean }[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [hover, setHover] = useState(false);
  const CheckSubtitles = () => {
    return subtitles ? false : true;
  };

  return (
    <MobileWrapper hover={hover}>
      <CustomLink
        to={route}
        exact={CheckSubtitles()}
        activeClassName='active'
        onClick={(e) => {
          if (subtitles) {
            e.preventDefault();
            setHover(!hover);
          } else {
            setOpen(false);
          }
        }}
      >
        <NavTitle>{title}</NavTitle>
        {subtitles && <ArrowIcon size={2.4} icon='arrow' />}
      </CustomLink>
      {subtitles &&
        hover &&
        subtitles.map((data, i) => {
          return (
            <SubLink
              onClick={() => {
                setOpen(false);
              }}
              key={i}
              to={data.route}
              activeClassName='active'
              exact={data.exact}
            >
              - {data.title}
            </SubLink>
          );
        })}
    </MobileWrapper>
  );
};

export default NavMobile;
