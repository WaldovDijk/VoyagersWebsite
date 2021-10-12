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
  width: 80%;
  grid-auto-flow: column;
  margin: auto;
`;

const InfoHeader = () => {
  return (
    <InfoHeaderWrapper>
      <InfoHeaderBody>
        <div>
          <Icon size={2.4} icon='location' />
          Geldersekade 2 1012 BH Amsterdam
        </div>
        <div>
          <Icon size={2.4} icon='phone' />
          0031 (0)20 6246871
        </div>
        <div>
          <Icon size={2.4} icon='email' />
          info@hotelvoyagers.com
        </div>
      </InfoHeaderBody>
    </InfoHeaderWrapper>
  );
};

export default InfoHeader;
