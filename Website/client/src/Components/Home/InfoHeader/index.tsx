import styled from 'styled-components';
import { Icon } from '../../../Style/Icons';

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

const InfoSection = styled('div')`
  display: grid;
  grid-auto-flow: column;
  width: max-content;
  align-items: center;
  margin: auto;
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
const InfoHeader = () => {
  return (
    <InfoHeaderWrapper>
      <InfoHeaderBody>
        <InfoSection>
          <Icon size={2.4} marginRight={0.5} icon='location' />
          Geldersekade 2 1012 BH Amsterdam
        </InfoSection>
        <InfoSection>
          <Icon size={2.4} marginRight={0.5} icon='phone' />
          0031 (0)20 6246871
        </InfoSection>
        <InfoSection>
          <Icon size={2.4} marginRight={0.5} icon='email' />
          info@hotelvoyagers.com
        </InfoSection>
        <InfoMedia>
          <CustomIcon
            onClick={() =>
              window.open(
                'https://www.instagram.com/voyagerscoffeeshop/',
                '_blank'
              )
            }
            size={3}
            marginRight={0.5}
            icon='instagram'
          />

          <CustomIcon
            onClick={() =>
              window.open(
                'https://www.facebook.com/VoyagersHotelAmsterdam',
                '_blank'
              )
            }
            size={3}
            marginRight={0.5}
            icon='facebook'
          />
          <CustomIcon
            onClick={() =>
              window.open(
                'https://www.tripadvisor.com/Hotel_Review-g188590-d3668507-Reviews-Voyagers_Hotel_Amsterdam-Amsterdam_North_Holland_Province.html',
                '_blank'
              )
            }
            size={3}
            marginRight={0.5}
            icon='tripadvisor'
          />
        </InfoMedia>
      </InfoHeaderBody>
    </InfoHeaderWrapper>
  );
};

export default InfoHeader;
