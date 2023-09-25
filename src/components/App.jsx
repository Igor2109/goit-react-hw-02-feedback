import React, { Component } from 'react';

import css from './App.module.css';
import Statistics from "./Statistics/Statistics";
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  changeState = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button onClick={this.changeState} type="button" className={css.btn}>
          Good
        </button>
        <button type="button" className={css.btn}>
          Neutral
        </button>
        <button type="button" className={css.btn}>
          Bad
        </button>

        <h2>Statistics</h2>
        <Statistics good={this.state.good} bad={this.state.bad} neutral={this.state.neutral}/>
      </div>
    );
  }
}
