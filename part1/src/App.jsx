import { useState } from "react";

const App = () => {
  const [selected, setSelected] = useState(0);
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const points = Array(anecdotes.length).fill(0);
  const [countVotes, setCountVotes] = useState(points);
  const [mostVoted, setMostVoted] = useState(0);

  const onHandleVote = () => {
    const newCountVotes = [...countVotes];
    newCountVotes[selected] += 1;
    setCountVotes(newCountVotes);
    console.log(newCountVotes);

    const getHighestVoted = newCountVotes.indexOf(Math.max(...newCountVotes));
    setMostVoted(getHighestVoted);
  };

  const onChangeAnecdote = () => {
    setSelected(Math.floor(Math.random() * 8));
  };

  return (
    <>
      <h1>Anecdotes</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {countVotes[selected]} votes</p>
      <button onClick={onHandleVote}>vote</button>
      <button onClick={onChangeAnecdote}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostVoted]}</p>
    </>
  );
};

export default App;
