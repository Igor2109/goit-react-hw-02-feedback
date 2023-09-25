import React, { Component } from 'react'
import css from "../App.module.css"

export default class Statistics extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

  render() {
    return (
      <div>
      <h2>Please leave feedback</h2>
      <button type="button" className={css.btn}>
        Good
      </button>
      <button type="button" className={css.btn}>
        Neutral
      </button>
      <button type="button" className={css.btn}>
        Bad
      </button>

      <h2>Statistics</h2>
<li>
  <ul
  value={this.state.good}
  name="good" >Good: {this.state.good}
  </ul>
  <ul
  className="neutral" >Neutral: {this.state.neutral}
  </ul>
  <ul
  className="bad" >Bad: {this.state.bad}
  </ul>
  <ul
  className="total" >Total:
  </ul>
  <ul
  className="positive feedback" >Positive feedback:
  </ul>
</li>
<form action="">
<label>
    <span>Good:</span>
    <input value={this.state.good}
  name="good" type="text" />
</label>
<label>
    <span>Neutral:</span>
    <input value={this.state.neutral}
  name="neutral" type="text" />
</label>
<label>
    <span>Bad:</span>
    <input value={this.state.bad}
  name="bad" type="text" />
</label>
</form>

      </div>
    )
  }
}
