import styled from 'styled-components';
import { HomeData } from '../../../Data';

const TestimonialWrapper = styled('div')`
  display: grid;
  justify-content: center;
  grid-template-rows: 5rem auto;
  color: #7a7675;
  text-align: center;
`;

const TestimonialTitle = styled('div')`
  text-transform: uppercase;
  font-size: 2.4rem;
  margin-bottom: 2rem;
`;

const TestimonialBody = styled('div')`
  display: grid;
  margin-bottom: 2rem;
  border: 1px solid #a8a8a8;
  border-radius: 0.4rem;

  box-shadow: 0.4rem 0.4rem 0.2rem rgba(0, 0, 0, 0.2);
  align-self: start;
`;

const TestimonialData = styled('div')`
  line-height: 3rem;
  font-size: 1.6rem;
  margin-bottom: 0.2rem;
  padding: 1rem;
`;

const TestimonialFooter = styled('div')`
  background-color: #e7e7e7;
  padding: 1rem;
`;

const TestimonialDate = styled('div')`
  font-size: 1.6rem;
  color: red;
`;

const TestimonialName = styled('div')`
  font-size: 2.2rem;
  color: red;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Testimonials = () => {
  const { testimonials } = HomeData;
  return (
    <TestimonialWrapper>
      <TestimonialTitle>{testimonials.title}</TestimonialTitle>
      {testimonials.data.map((data, i) => (
        <TestimonialBody key={i}>
          <TestimonialData>{data.content}</TestimonialData>
          <TestimonialFooter>
            <TestimonialName>{data.name}</TestimonialName>
            <TestimonialDate>{data.date}</TestimonialDate>
          </TestimonialFooter>
        </TestimonialBody>
      ))}
    </TestimonialWrapper>
  );
};

export default Testimonials;
