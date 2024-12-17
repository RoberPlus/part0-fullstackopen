import { useState } from "react";

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <tr>
        <td>{text}</td>

        <td>{value}</td>
      </tr>
    </>
  );
};

const Statistics = ({ statistics }) => {
  if (statistics.all === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <>
      <h1>statistics</h1>
      <table>
        <StatisticLine text="good" value={statistics.good} />
        <StatisticLine text="neutral" value={statistics.neutral} />
        <StatisticLine text="bad" value={statistics.bad} />
        <StatisticLine text="all" value={statistics.all} />
        <StatisticLine text="average" value={statistics.averageFinal} />
        <StatisticLine text="positive" value={statistics.positive + "%"} />
      </table>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;
  const average = good - bad / 3;
  const averageFinal = average * 0.1;
  const positive = (good / all) * 100;

  const statistics = {
    good,
    neutral,
    bad,
    all,
    averageFinal,
    positive,
  };

  return (
    <>
      <h1>give feedback</h1>
      <button onClick={() => setGood((prevState) => prevState + 1)}>
        good
      </button>
      <button onClick={() => setNeutral((prevState) => prevState + 1)}>
        neutral
      </button>
      <button onClick={() => setBad((prevState) => prevState + 1)}>bad</button>

      <Statistics statistics={statistics} />
    </>
  );
};

export default App;
