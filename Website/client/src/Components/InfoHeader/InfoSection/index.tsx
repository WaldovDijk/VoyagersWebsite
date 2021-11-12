import styled from 'styled-components';
import { Icon } from '../../../Style/Icons';

const SectionWrapper = styled('div')`
  display: grid;
  grid-auto-flow: column;
  width: max-content;
  align-items: center;
  margin: auto;
`;

const SendEmail = styled('a')`
  text-decoration: none;
  color: white;
`;

const InfoSection = (data: { icon: string; content: string }) => {
  return (
    <SectionWrapper>
      <Icon size={2.4} marginRight={0.5} icon={data.icon} />
      {data.icon === 'email' ? (
        <SendEmail href={`mailto:${data.content}`}>{data.content}</SendEmail>
      ) : (
        <div>{data.content}</div>
      )}
    </SectionWrapper>
  );
};

export default InfoSection;
