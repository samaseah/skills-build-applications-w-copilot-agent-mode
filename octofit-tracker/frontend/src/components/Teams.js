import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://humble-fiesta-jjvx44g9ggg3pwx4--8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div>
      <h2 className="text-center text-primary">Teams</h2>
      {teams.map(team => (
        <div className="card" key={team._id}>
          <div className="card-body">
            <h5 className="card-title">{team.name}</h5>
            <p className="card-text">Members: {team.members}</p>
            <button className="btn btn-primary">View Team</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Teams;