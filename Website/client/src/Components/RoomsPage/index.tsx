import styled from 'styled-components';
import { BreakPoints } from '../../Style';
import { Icon } from '../../Style/Icons';

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
`;

const PageContent = styled('div')`
  font-size: clamp(1.4rem, 1.5vw, 1.6rem);
  border: 1px solid #cccccc;
  padding: 1rem;
  border-radius: 0.3rem;
  box-shadow: 0.4rem 0.4rem 0.2rem rgb(0 0 0 / 20%);
`;

const RoomImg = styled('img')`
  width: 100%;
  border: 2px solid #677c8b;
  margin: 0.1rem;
`;

const ImageWrapper = styled('div')`
  width: 100%;
  grid-gap: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: ${BreakPoints.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: ${BreakPoints.sm}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CardInfo = styled('div')`
  color: #7a7675;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto;
  grid-auto-columns: max-content;
  font-size: 1.3rem;
  align-items: center;
  width: 100%;
  padding: 1.4rem 1rem;
  justify-content: center;
  text-align: center;
`;

const PageFooter = styled('div')`
  display: grid;
  justify-items: center;
  border: 1px solid #e0e0e0;
  padding: 1rem;
  margin: 1rem;
  border-radius: 1rem;
  box-shadow: 0.4rem 0.4rem 0.2rem rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 50rem;
  justify-self: center;

  ${CardInfo}:nth-child(2n +2) {
    background-color: #eee;
  }
`;

const FooterTitle = styled('div')`
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;
`;

const CardButton = styled('button')`
  margin-top: 1rem;
`;

const RoomsPage = ({ Data }: { Data: IData }) => {
  const { title, content, beds, price, maxPers, rooms } = Data;
  return (
    <PageWrapper>
      <PageTitle>{title}</PageTitle>
      <PageContent>{content}</PageContent>
      <PageFooter>
        <FooterTitle>Features & Costs</FooterTitle>
        <CardInfo>
          Max People:{' '}
          {[...Array(maxPers)].map((el, i) => (
            <Icon key={i} size={2} icon='person' />
          ))}
        </CardInfo>
        <CardInfo>Beds: {beds}</CardInfo>
        <CardInfo>Price: &euro;{price} Per Night</CardInfo>
        <CardButton disabled={true}>Booking currently unavailable</CardButton>
      </PageFooter>
      <ImageWrapper>
        {rooms.map((data, i) => (
          <RoomImg key={i} src={data.img} alt='room' />
        ))}
      </ImageWrapper>
    </PageWrapper>
  );
};

export default RoomsPage;
