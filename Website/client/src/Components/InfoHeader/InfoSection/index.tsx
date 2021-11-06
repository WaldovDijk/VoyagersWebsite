import styled from 'styled-components';
import { Icon } from '../../../Style/Icons';

const SectionWrapper = styled('div')`
  display: grid;
  grid-auto-flow: column;
  width: max-content;
  align-items: center;
  margin: auto;
`;

const InfoSection = (data: { icon: string; content: string }) => {
  return (
    <SectionWrapper>
      <Icon size={2.4} marginRight={0.5} icon={data.icon} />
      {data.content}
    </SectionWrapper>
  );
};

export default InfoSection;
