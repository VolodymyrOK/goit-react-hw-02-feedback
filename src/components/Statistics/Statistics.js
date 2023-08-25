import { ButtonReload, Paragraph, StatList } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  onReload,
}) => (
  <>
    <StatList>
      <Paragraph>
        Good:<span>{good}</span>
      </Paragraph>
      <Paragraph>
        Neutral:<span>{neutral}</span>
      </Paragraph>
      <Paragraph>
        Bad:<span>{bad}</span>
      </Paragraph>
      <Paragraph>
        Total:
        <span>{total()}</span>
      </Paragraph>
      <Paragraph>
        Positive feedback:
        <span>{positivePercentage()}%</span>
      </Paragraph>
    </StatList>
    <ButtonReload onClick={onReload}>Reload page</ButtonReload>
  </>
);
