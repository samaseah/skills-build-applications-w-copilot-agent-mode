import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://humble-fiesta-jjvx44g9ggg3pwx4--8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div>
      <h2 className="text-center text-primary">Workouts</h2>
      <form className="mb-4">
        <div className="mb-3">
          <label htmlFor="workoutName" className="form-label">Workout Name</label>
          <input type="text" className="form-control" id="workoutName" placeholder="Enter workout name" />
        </div>
        <div className="mb-3">
          <label htmlFor="duration" className="form-label">Duration (mins)</label>
          <input type="number" className="form-control" id="duration" placeholder="Enter duration" />
        </div>
        <button type="submit" className="btn btn-primary">Add Workout</button>
      </form>
      <ul>
        {workouts.map(workout => (
          <li key={workout._id}>{workout.name} - {workout.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default Workouts;