import styled from 'styled-components';
import { IconData, InfoData } from '../../Data';
import InfoIcons from './InfoIcons';
import InfoSection from './InfoSection';
import { BreakPoints } from '../../Style';

const InfoHeaderWrapper = styled('div')`
  display: none;
  grid-template-columns: clamp(20rem, 90%, 120rem);
  background-color: #677c8b;
  font-size: 1.6rem;
  color: white;
  height: 5.4rem;
  justify-content: center;
  @media (min-width: ${BreakPoints.md}) {
    display: grid;
  }
`;

const InfoHeaderBody = styled('div')`
  display: grid;
  grid-auto-flow: column;
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
