import styled from 'styled-components';
import { BreakPoints } from '../../Style';
import { ContactData } from '../../Data';
import { useState } from 'react';

const ContactWrapper = styled('div')`
  grid-column: 2/3;
  gap: 2rem;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: ${BreakPoints.sm}) {
    padding: 4rem;
  }
  @media (min-width: ${BreakPoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContactTitle = styled('div')`
  grid-column: 1/-1;
  font-size: clamp(3rem, 5vw, 5rem);
  margin-bottom: 1rem;
`;

const FormTitle = styled('div')`
  font-size: clamp(2rem, 3vw, 3rem);
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

const TextField = styled('textarea')`
  box-sizing: border-box;
  width: 100%;
  border: 0.3rem solid #677c8b;
  font-size: 1.6rem;
  padding: 1rem;
  margin-bottom: 2rem;
  resize: none;
  height: 20rem;
  &:focus,
  :active {
    border: 0.3rem solid #677c8b;
  }
`;
const ContactDetails = styled('div')`
  font-size: 2rem;
`;

const DetailsTitle = styled('div')`
  font-size: clamp(2rem, 3vw, 3rem);
  padding-bottom: 3rem;
`;

const DetailsContent = styled('div')`
  font-size: clamp(1.6rem, 1.5vw, 2rem);
  padding-bottom: 0.5rem;
`;

const InputButton = styled('input')`
  background-color: orange;
  border: none;
  padding: 1rem 3rem;
  color: white;
  font-size: 1.6rem;
  cursor: pointer;
  &:hover {
    background-color: #ffb833;
  }
`;

const FormWrapper = styled('form')``;
const Contact = () => {
  const { title, subTitle, details } = ContactData;
  const [subject, setSubject] = useState<string>('');
  const [textField, setTextField] = useState<string>('');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    //@ts-ignore
    window.location = `mailto:info@voyagersamsterdam.com?subject=${subject}&body=${textField}`;
  };

  return (
    <ContactWrapper>
      <ContactTitle>{title}</ContactTitle>
      <FormWrapper onSubmit={onSubmit}>
        <FormTitle>{subTitle}</FormTitle>
        <FormInput
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          type='text'
          placeholder='Subject *'
          required
        />
        <TextField
          value={textField}
          onChange={(e) => setTextField(e.target.value)}
          placeholder='Message *'
          required
        />
        <InputButton type='submit' value='Send' />
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
