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

const RoomCard = styled('div')`
  display: grid;
  justify-items: center;
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
  font-size: 1.3rem;
  align-items: center;
  line-height: 2.4rem;
`;
const CardImg = styled('div')`
  background-image: url(${(props: { img: string }) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 33rem;
  height: 22rem;
  margin-bottom: 2rem;
  position: relative;
`;
const ImgBanner = styled('img')`
  display: inline-block;
  position: relative;
  width: 100%;
`;
const CardBanner = styled('div')`
  position: absolute;
  right: -0.8rem;
  bottom: 3rem;
`;
const CardCost = styled('div')`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: 700;
  font-size: 1.4rem;
  width: max-content;
`;
const HomeRooms = () => {
  const { rooms } = HomeData;
  return (
    <RoomWrapper>
      <RoomTitle>{rooms.title}</RoomTitle>
      {rooms.cards.map((data, i) => (
        <RoomCard key={i}>
          <CardImg img={data.url}>
            <CardBanner>
              <ImgBanner src={rooms.banner} />
              <CardCost>&euro;{data.price} PN</CardCost>
            </CardBanner>
          </CardImg>
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
        </RoomCard>
      ))}
    </RoomWrapper>
  );
};

export default HomeRooms;
