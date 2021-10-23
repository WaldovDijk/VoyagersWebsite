import styled from 'styled-components';
import { BreakPoints } from '../../../Style';
import { Icon } from '../../../Style/Icons';

const ItemWrapper = styled('div')`
  color: #fff;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 100%;
  grid-row-gap: 2rem;
  justify-content: space-between;
  margin: auto;
  padding: 1rem;
  width: 100%;
  @media (min-width: ${BreakPoints.md}) {
    padding: clamp(2rem, 1.2vw, 4rem);
    width: max-content;
  }
`;
const ItemTitle = styled('div')`
  display: grid;
  text-transform: uppercase;
  font-weight: bold;
  padding-bottom: 1rem;

  border-bottom: 1px dashed #eee;
`;
const ItemContent = styled('div')`
  display: grid;
  grid-auto-flow: column;
  justify-content: left;
  margin-left: 0.5rem;
`;

const ItemLink = styled('div')`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const FooterItem = ({
  FooterData,
}: {
  FooterData: { data: any[]; title: string };
}) => {
  const { data, title } = FooterData;
  return (
    <ItemWrapper>
      <ItemTitle>{title}</ItemTitle>
      {data.map((data, i) => {
        return (
          <ItemContent key={i}>
            {data.icon && <Icon icon={data.icon} size={2} marginRight={1} />}
            {!data.link ? (
              <div>{data.content}</div>
            ) : (
              <ItemLink onClick={() => window.open(data.link, '_blank')}>
                {data.content}
              </ItemLink>
            )}
          </ItemContent>
        );
      })}
    </ItemWrapper>
  );
};

export default FooterItem;
