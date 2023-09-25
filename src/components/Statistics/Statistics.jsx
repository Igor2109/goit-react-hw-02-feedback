import React, { Component } from 'react';
import css from '../App.module.css';

export default class Statistics extends Component {

  render() {
    return (
      <ul>
        <li>{`Good: ${this.props.good}`}</li>
        <li className="neutral">Neutral: {this.props.neutral}</li>
        <li className="bad">Bad: {this.props.bad}</li>
        <li className="total">Total:</li>
        <li className="positive feedback">Positive feedback:</li>
      </ul>
    );
  }
}
