function App() {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header name={course.name} />
      <Content
        part1={course.parts[0]}
        part2={course.parts[1]}
        part3={course.parts[2]}
      />
      <Total
        part1={course.parts[0].exercises}
        part2={course.parts[1].exercises}
        part3={course.parts[2].exercises}
      />
    </div>
  );
}

function Header(props) {
  return <h1>{props.name}</h1>;
}

function Content(props) {
  return (
    <>
      <Part part={props.part1.name} exercises={props.part1.exercises} />
      <Part part={props.part2.name} exercises={props.part1.exercises} />
      <Part part={props.part3.name} exercises={props.part1.exercises} />
    </>
  );
}

function Part(props) {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
}

function Total(props) {
  return <p>Number of exercises {props.part1 + props.part2 + props.part3}</p>;
}

export default App;
