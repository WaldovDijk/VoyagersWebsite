import styled from 'styled-components';

const InfoHeaderWrapper = styled('div')`
  background-color: #677c8b;
  font-size: 1.6rem;
  color: white;
  height: 5.4rem;
`;

const InfoHeaderBody = styled('div')`
  display: grid;
  width: 80%;
  margin: auto;
`;

const InfoHeader = () => {
  return (
    <InfoHeaderWrapper>
      <InfoHeaderBody>Geldersekade 2 1012 BH Amsterdam</InfoHeaderBody>
    </InfoHeaderWrapper>
  );
};

export default InfoHeader;
