import { teams } from "../teams";

import "./TeamPicker.css";

import TeamButton from "./TeamButton";

function TeamPicker() {
  return (
    <div>
      <h2>Pick a Team:</h2>
      <div className="teams-container">
        {teams.map((team) => {
          return (
            <TeamButton teamName={team.name} teamId={team.id} key={team.id} />
          );
        })}
      </div>
    </div>
  );
}

export default TeamPicker;
