import { Button, ButtonList, ButtonListItem } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onFeedBack }) => (
  <ButtonList>
    {options.map(option => (
      <ButtonListItem key={option}>
        <Button type="button" onClick={onFeedBack}>
          {option}
        </Button>
      </ButtonListItem>
    ))}
  </ButtonList>
);
