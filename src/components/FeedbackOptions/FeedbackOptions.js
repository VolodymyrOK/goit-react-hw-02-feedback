import { Button, ButtonList, ButtonListItem } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedBack }) => (
  <ButtonList>
    {options.map(option => (
      <ButtonListItem key={option}>
        <Button type="button" onClick={onLeaveFeedBack}>
          {option}
        </Button>
      </ButtonListItem>
    ))}
  </ButtonList>
);
