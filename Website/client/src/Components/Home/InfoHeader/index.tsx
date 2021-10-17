import styled from 'styled-components';
import { Icon } from '../../../Style/Icons';
import InfoIcons from './InfoIcons';
import InfoSection from './InfoSection';

const InfoHeaderWrapper = styled('div')`
  background-color: #677c8b;
  font-size: 1.6rem;
  color: white;
  height: 5.4rem;
`;

const InfoHeaderBody = styled('div')`
  display: grid;
  width: 120rem;
  grid-auto-flow: column;
  margin: auto;
  height: 100%;
`;

const InfoMedia = styled('div')`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
`;

const CustomIcon = styled(Icon)`
  height: 3rem;
  width: 3rem;
  background-color: white;
  border-radius: 0.8rem;
  padding: 0.5rem;
  cursor: pointer;
`;

const InfoData = [
  {
    icon: 'location',
    content: 'Geldersekade 2 1012 BH Amsterdam',
  },
  {
    icon: 'phone',
    content: '0031 (0)20 6246871',
  },
  {
    icon: 'email',
    content: 'info@hotelvoyagers.com',
  },
];

const IconData = [
  { link: 'https://www.instagram.com/voyagerscoffeeshop/', icon: 'instagram' },
  { link: 'https://www.facebook.com/VoyagersHotelAmsterdam', icon: 'facebook' },
  {
    link: 'https://www.tripadvisor.com/Hotel_Review-g188590-d3668507-Reviews-Voyagers_Hotel_Amsterdam-Amsterdam_North_Holland_Province.html',
    icon: 'tripadvisor',
  },
];

const InfoHeader = () => {
  return (
    <InfoHeaderWrapper>
      <InfoHeaderBody>
        {InfoData.map((data, i) => {
          return (
            <InfoSection key={i} icon={data.icon} content={data.content} />
          );
        })}
        <InfoIcons IconData={IconData} />
      </InfoHeaderBody>
    </InfoHeaderWrapper>
  );
};

export default InfoHeader;
