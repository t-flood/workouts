import React from "react";
import { useState, useEffect } from "react";

const Workouts = () => {
  const [workoutList, setWorkoutList] = useState([]);

  useEffect(() => {
    fetch("/workouts.json")
      .then((response) => response.json())
      .then((data) => setWorkoutList(data));
  }, []);
  console.log(workoutList[0]);

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
