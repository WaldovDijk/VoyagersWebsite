import styled from 'styled-components';
import { HomeData } from '../../../Data';

const AboutTitle = styled('div')`
  text-transform: uppercase;
  font-size: 2.4rem;
  margin-bottom: 2rem;
`;

const AboutBody = styled('div')`
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  margin-bottom: 2rem;
  border: 1px solid #a8a8a8;
  border-radius: 0.4rem;

  box-shadow: 0.4rem 0.4rem 0.2rem rgba(0, 0, 0, 0.2);
`;
const AboutImg = styled('img')`
  padding: 0.4rem;
  ${(props: { number: number }) => {
    console.log(props.number);
    switch (props.number) {
      case 1:
        return `border-radius: 0 0.4rem 0.4rem 0rem; grid-column: 2/ span 1;`;
      default:
        return 'border-radius: 0.4rem 0 0 0.4rem; grid-column: 1/ span 1;';
    }
  }};
`;

const AboutContent = styled('div')`
  font-size: 1.6rem;
  padding: 1rem;
`;

const AboutWrapper = styled('div')`
  display: grid;
  grid-template-rows: 5rem auto;
  justify-content: center;
  color: #7a7675;
  text-align: center;
`;

const About = () => {
  const { about } = HomeData;
  return (
    <AboutWrapper>
      <AboutTitle>{about.title}</AboutTitle>
      {about.data.map((data, i) => (
        <AboutBody key={i}>
          <AboutImg number={i} src={data.img} alt='img' />
          <AboutContent>{data.content}</AboutContent>
        </AboutBody>
      ))}
    </AboutWrapper>
  );
};

export default About;
