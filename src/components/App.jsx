import PropTypes from 'prop-types';
import { GlobalStyle } from 'styles/GlobalStyles';
import { Layout } from 'styles/Layout';
import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onReload = () => {
    window.location.reload();
  };

  onLeaveFeedback = evt => {
    this.setState(prevState => {
      switch (evt.target.textContent) {
        case 'good':
          return { good: prevState.good + 1 };
        case 'neutral':
          return { neutral: prevState.neutral + 1 };
        case 'bad':
          return { bad: prevState.bad + 1 };
        default:
          return { prevState };
      }
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback() || 1;
    return Math.round((good / total) * 100);
  };

  render() {
    const options = Object.keys(this.state);
    const entries = Object.entries(this.state);
    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedBack={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              entries={entries}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
              onReload={this.onReload}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
        <GlobalStyle />
      </Layout>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedBack: PropTypes.func,
};

Statistics.propTypes = {
  entries: PropTypes.array,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
  onReload: PropTypes.func,
};

Notification.propTypes = {
  message: PropTypes.string,
};