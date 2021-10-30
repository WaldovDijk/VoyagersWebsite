import styled from 'styled-components';

import { HomeData } from '../../../Data';
import { Icon } from '../../../Style/Icons';

const RoomWrapper = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`;

const RoomTitle = styled('div')`
  grid-column: 1/-1;
  text-align: center;
  font-size: clamp(1.8rem, 1.6vw, 2.6rem);
  font-weight: 700;
  color: #7a7675;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const CardTitle = styled('div')`
  color: #7a7675;
  font-weight: bold;
  font-size: 1.6rem;
`;

const CardHr = styled('hr')`
  width: 50%;
  margin: 1.5rem auto;
  background-color: #e0e0e0;
  height: 0.5rem;
  border: 0;
`;

const CardInfo = styled('div')`
  color: #7a7675;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto;
  grid-auto-columns: max-content;
  font-size: 1.3rem;
  align-items: center;
  line-height: 2.4rem;
  width: 100%;
  padding: 1rem;
  justify-content: center;
  text-align: center;
`;
const CardImg = styled('img')`
  width: 100%;
  border-radius: 0.8rem 0.8rem 0 0;
  margin-bottom: 1rem;
`;

const RoomCard = styled('div')`
  display: grid;
  justify-items: center;
  border: 1px solid #e0e0e0;
  padding: 1rem;
  margin: 1rem;
  border-radius: 1rem;

  ${CardInfo}:nth-child(2n +2) {
    background-color: #eee;
  }
`;

const CardButton = styled('button')`
  margin-top: 1rem;
`;

const HomeRooms = () => {
  const { rooms } = HomeData;
  return (
    <RoomWrapper>
      <RoomTitle>{rooms.title}</RoomTitle>
      {rooms.cards.map((data, i) => (
        <RoomCard key={i}>
          <CardImg src={data.url} />

          <CardTitle>{data.name}</CardTitle>
          <CardHr />
          <CardInfo>
            Max People:{' '}
            {[...Array(data.maxPers)].map((el, i) => (
              <Icon key={i} size={2} icon='phone' />
            ))}
          </CardInfo>
          <CardInfo>Beds: {data.beds}</CardInfo>
          <CardInfo>Price: &euro;{data.price} Per Night</CardInfo>
          <CardButton disabled={true}>Booking currently unavailable</CardButton>
        </RoomCard>
      ))}
    </RoomWrapper>
  );
};

export default HomeRooms;
