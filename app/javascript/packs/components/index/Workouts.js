import React from "react";
import { useState, useEffect } from "react";

const Workouts = () => {
  const [workoutList, setWorkoutList] = useState([]);

  useEffect(() => {
    fetch("/workouts.json")
      .then((response) => response.json())
      .then((data) =>
        data.map((workout) => setWorkoutList(workoutList.push(workout)))
      );
  }, []);

  return <div></div>;
};

export default Workouts;
