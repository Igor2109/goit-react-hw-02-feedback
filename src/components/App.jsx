import css from "./App.module.css"
export const App = () => {
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
  className="good" >Good:
  </ul>
  <ul
  className="neutral" >Neutral:
  </ul>
  <ul
  className="bad" >Bad:
  </ul>
  <ul
  className="total" >Total:
  </ul>
  <ul
  className="positive feedback" >Positive feedback:
  </ul>
</li>
    </div>
  );
};
