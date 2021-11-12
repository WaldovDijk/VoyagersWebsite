import styled from 'styled-components';
import { BreakPoints } from '../../Style';

interface IData {
  title: string;
  content: string;
  beds: string;
  price: string;
  maxPers: number;
  rooms: { img: string }[];
}

const PageTitle = styled('div')`
  font-size: clamp(3rem, 4vw, 5rem);
  font-weight: 300;
`;

const PageWrapper = styled('div')`
  display: grid;
  row-gap: 2rem;
  padding: 4rem;
`;

const PageContent = styled('div')`
  font-size: clamp(1.4rem, 1.5vw, 1.6rem);
  border: 1px solid #cccccc;
  padding: 1rem;
  border-radius: 0.3rem;
  box-shadow: 0.4rem 0.4rem 0.2rem rgb(0 0 0 / 20%);
`;

const RoomImg = styled('img')`
  width: 11rem;
  border: 2px solid #677c8b;
  margin: 0.1rem;
  @media (min-width: ${BreakPoints.sm}) {
    width: 12rem;
    margin: 1rem;
  }
`;

const ImageWrapper = styled('div')``;

const RoomsPage = ({ Data }: { Data: IData }) => {
  const { title, content, beds, price, maxPers, rooms } = Data;
  return (
    <PageWrapper>
      <PageTitle>{title}</PageTitle>
      <PageContent>{content}</PageContent>
      <ImageWrapper>
        {rooms.map((data, i) => (
          <RoomImg key={i} src={data.img} alt='room' />
        ))}
      </ImageWrapper>
    </PageWrapper>
  );
};

export default RoomsPage;
