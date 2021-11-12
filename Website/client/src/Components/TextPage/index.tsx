import styled from 'styled-components';

interface IData {
  title: string;
  data: { content: string; title?: string }[];
}

const PageWrapper = styled('div')`
  display: grid;
  row-gap: 2rem;
  padding: 4rem;
`;

const PageTitle = styled('div')`
  font-size: clamp(3rem, 4vw, 5rem);
  font-weight: 300;
`;

const TextWrapper = styled('div')`
  font-size: clamp(1.4rem, 1.5vw, 1.6rem);
  border: 1px solid #cccccc;
  padding: 1rem;
  border-radius: 0.3rem;
  box-shadow: 0.4rem 0.4rem 0.2rem rgb(0 0 0 / 20%);
`;

const Title = styled('span')`
  font-weight: bold;
`;

const TextPage = ({ Data }: { Data: IData }) => {
  const { data, title } = Data;
  return (
    <PageWrapper>
      <PageTitle>{title}</PageTitle>
      {data.map((content, i) => (
        <TextWrapper key={i}>
          {content.title && <Title>{content.title}: </Title>}
          {content.content}
        </TextWrapper>
      ))}
    </PageWrapper>
  );
};

export default TextPage;
