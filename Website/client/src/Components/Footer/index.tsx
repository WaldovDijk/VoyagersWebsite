import styled from 'styled-components';
import { FooterData } from '../../Data';
import { BreakPoints } from '../../Style';
import FooterItem, { ItemWrapper } from './FooterItem';

const FooterWrapper = styled('div')`
  grid-column: 1/-1;
  margin-top: auto;
  background-color: #677c8b;
  padding-top: 5rem;
`;

const FooterBody = styled('div')`
  margin: auto;
  grid-column: 2/3;
  @media (min-width: ${BreakPoints.md}) {
    justify-content: center;
    display: grid;
    padding: 0;
  }
`;

const Wrapper = styled('div')`
  margin: auto;
  font-size: 1.4rem;
  display: grid;
  grid-auto-flow: row;
  align-items: start;
  padding: 2rem;
  @media (min-width: ${BreakPoints.sm}) {
    padding: 4rem;
  }
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
  grid-column: 1/-1;
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
