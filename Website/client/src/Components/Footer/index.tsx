import styled from 'styled-components';
import { FooterData } from '../../Data';
import { BreakPoints } from '../../Style';
import FooterItem, { ItemWrapper } from './FooterItem';

const FooterWrapper = styled('div')`
  margin-top: auto;
  background-color: #677c8b;
  width: 100%;
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

const Wrapper = styled('div')`
  margin: auto;
  font-size: 1.4rem;
  display: grid;
  grid-auto-flow: row;
  align-items: start;
  padding: 3rem;
  grid-gap: 2rem;
  @media (min-width: ${BreakPoints.md}) {
    grid-auto-flow: column;
    font-size: clamp(1.4rem, 1.2vw, 1.6rem);
    grid-template-columns: repeat(2, 1fr);
    & ${ItemWrapper}:last-child {
      grid-row: 2/3;
      grid-column: 1/-1;
    }
  }
  @media (min-width: ${BreakPoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
    & ${ItemWrapper}:last-child {
      grid-row: auto;
      grid-column: auto;
    }
  }
`;

const FooterCopy = styled('div')`
  border-top: 1px dotted #fff;
  padding: 3rem;
  text-align: center;
  font-size: 1.2rem;
  color: #fff;
  @media (min-width: ${BreakPoints.md}) {
    font-size: 1.6rem;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterBody>
        <Wrapper>
          {FooterData.map((data, i) => {
            return <FooterItem key={i} FooterData={data} />;
          })}
        </Wrapper>
      </FooterBody>
      <FooterCopy>
        &copy; {new Date().getFullYear()}. Voyager Hotel Amsterdam, all right
        reserved.
      </FooterCopy>
    </FooterWrapper>
  );
};

export default Footer;
