import styled from 'styled-components';
import { IconData, InfoData } from '../../Data';
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
