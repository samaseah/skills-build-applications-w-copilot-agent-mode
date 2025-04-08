import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://humble-fiesta-jjvx44g9ggg3pwx4--8000.app.github.dev/api/activities/')
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error('Error fetching activities:', error));
  }, []);

  return (
    <div>
      <h2 className="text-center text-primary">Activities</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Activity</th>
            <th>Duration</th>
            <th>Calories Burned</th>
          </tr>
        </thead>
        <tbody>
          {activities.map(activity => (
            <tr key={activity._id}>
              <td>{activity.activity_type}</td>
              <td>{activity.duration}</td>
              <td>{activity.calories_burned}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary">Add Activity</button>
    </div>
  );
}

export default Activities;