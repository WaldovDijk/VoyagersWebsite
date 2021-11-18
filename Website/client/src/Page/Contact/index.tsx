import styled from 'styled-components';
import { BreakPoints } from '../../Style';
import { ContactData } from '../../Data';
import { useState } from 'react';

const ContactWrapper = styled('div')`
  grid-column: 2/3;
  gap: 2rem;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (min-width: ${BreakPoints.sm}) {
    padding: 4rem;
  }
`;

const ContactTitle = styled('div')`
  grid-column: 1/-1;
  font-size: 5rem;
  margin-bottom: 1rem;
`;

const FormTitle = styled('div')`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const FormInput = styled('input')`
  box-sizing: border-box;
  width: 100%;
  border: 0.3rem solid #677c8b;
  font-size: 1.6rem;
  padding: 1rem;
  margin-bottom: 2rem;
  &:focus,
  :active {
    border: 0.3rem solid #677c8b;
  }
`;
const ContactDetails = styled('div')`
  font-size: 2rem;
`;

const DetailsTitle = styled('div')`
  font-size: 3rem;
  padding-bottom: 3rem;
`;

const DetailsContent = styled('div')`
  font-size: 2rem;
  padding-bottom: 0.5rem;
`;

const FormWrapper = styled('form')``;
const Contact = () => {
  const { title, subTitle, details } = ContactData;
  const [subject, setSubject] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  return (
    <ContactWrapper>
      <ContactTitle>{title}</ContactTitle>
      <FormWrapper>
        <FormTitle>{subTitle}</FormTitle>
        <FormInput
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          type='text'
          placeholder='Subject *'
          required
        />
        <FormInput
          value={email}
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email *'
          required
        />
      </FormWrapper>
      <ContactDetails>
        <DetailsTitle>{details.title}</DetailsTitle>
        <DetailsContent>Email: {details.mail}</DetailsContent>
        <DetailsContent>Phone: {details.phone}</DetailsContent>
        <DetailsContent>Adress: {details.adress}</DetailsContent>
      </ContactDetails>
    </ContactWrapper>
  );
};
export default Contact;
