import styled from 'styled-components';
import { FooterData } from '../../Data';
import { BreakPoints } from '../../Style';
import FooterItem from './FooterItem';

const FooterWrapper = styled('div')`
  margin-top: auto;
  background-color: #677c8b;
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: -1;
`;

const FooterBody = styled('div')`
  margin: auto;

  padding: 5rem 2rem 3rem;
  @media (min-width: ${BreakPoints.md}) {
    justify-content: center;
    display: grid;
    grid-template-columns: clamp(20rem, 90%, 120rem);
    padding: 0;
  }
`;

const ItemWrapper = styled('div')`
  margin: auto;
  font-size: 1.4rem;
  display: grid;
  grid-auto-flow: row;
  @media (min-width: ${BreakPoints.md}) {
    grid-auto-flow: column;
    font-size: clamp(1rem, 1.2vw, 1.6rem);
  }
`;

const FooterCopy = styled('div')`
  border-top: 1px dotted #fff;
  padding: 3rem;
  text-align: center;
  font-size: 1.6rem;
  color: #fff;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterBody>
        <ItemWrapper>
          {FooterData.map((data, i) => {
            return <FooterItem key={i} FooterData={data} />;
          })}
        </ItemWrapper>
      </FooterBody>
      <FooterCopy>
        &copy; {new Date().getFullYear()}. Voyager Hotel Amsterdam, all right
        reserved.
      </FooterCopy>
    </FooterWrapper>
  );
};

export default Footer;
