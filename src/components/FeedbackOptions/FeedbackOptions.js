import { Button, ButtonList, ButtonListItem } from './FeedbackOptions.styles';

export const FeedbackOptions = ({ options, onFeedBack }) => (
  <div>
    <ButtonList>
      {options.map(option => (
        <ButtonListItem key={option}>
          <Button type="button" onClick={onFeedBack}>
            {option}
          </Button>
        </ButtonListItem>
      ))}
    </ButtonList>
  </div>
);
