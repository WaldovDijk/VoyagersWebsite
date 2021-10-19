import styled from 'styled-components';
import { FooterData } from '../../Data';
import FooterItem from './FooterItem';

const FooterWrapper = styled('div')`
  margin-top: auto;
  background-color: #677c8b;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const FooterBody = styled('div')`
  width: 120rem;
  margin: auto;
  display: grid;
  grid-auto-flow: column;
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
        {FooterData.map((data, i) => {
          return <FooterItem key={i} FooterData={data} />;
        })}
      </FooterBody>
      <FooterCopy>
        &copy; {new Date().getFullYear()}. Voyager Hotel Amsterdam, all right
        reserved.
      </FooterCopy>
    </FooterWrapper>
  );
};

export default Footer;
