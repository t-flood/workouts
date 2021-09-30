import React from "react";
import { useState, useEffect } from "react";

// the next thing to do is to fetch the workouts from the backend
//use useReducer to hangle getting the workouts

//something like:
// const ACTIONS = {
//   GET_WORKOUTS: 'get_workouts'
// }

const Workouts = () => {
  const [workoutList, setWorkoutList] = useState([]);

  useEffect(() => {
    fetch("/workouts.json")
      .then((response) => response.json())
      .then((data) => setWorkoutList(data));
  }, []);
  console.log(workoutList);

  return (
    <div>
      <ul>
        {workoutList.map((workout) => (
          <li key={workout.id}>{workout.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Workouts;
