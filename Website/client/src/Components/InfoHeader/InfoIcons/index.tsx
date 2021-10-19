import styled from 'styled-components';
import { Icon } from '../../../Style/Icons';

const MediaWrapper = styled('div')`
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

const InfoSection = ({
  IconData,
}: {
  IconData: { link: string; icon: string }[];
}) => {
  return (
    <MediaWrapper>
      {IconData.map((data, i) => {
        return (
          <CustomIcon
            onClick={() => window.open(data.link, '_blank')}
            size={3}
            marginRight={0.5}
            icon={data.icon}
            key={i}
          />
        );
      })}
    </MediaWrapper>
  );
};

export default InfoSection;
