import { useEffect, useState } from "react";
import axios from "axios";

function GameView({ removeCookie, team }) {
  const [nextGame, setNextGame] = useState("");

  let todayDate = new Date();
  const offset = todayDate.getTimezoneOffset();
  const timeWithOffset = todayDate.getTime() - offset * 60 * 1000;
  todayDate = new Date(timeWithOffset);
  let weekDate = new Date(timeWithOffset + 6.048e8);
  weekDate = weekDate.toISOString().split("T")[0];
  todayDate = todayDate.toISOString().split("T")[0];

  const options = {
    method: "GET",
    url: "https://www.balldontlie.io/api/v1/games",
    params: {
      team_ids: [team.id],
      start_date: todayDate,
      end_date: weekDate,
    },
  };

  const getNextGame = (games) => {
    games.sort((a, b) => {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);
      return aDate - bDate;
    })[0];
    return games[0];
  };

  const fetchGames = async () => {
    let response;
    try {
      response = await axios.request(options);
      if (response.data.data.length) {
        const next = getNextGame(response.data.data);
        setNextGame(next);
      }
    } catch (error) {
      console.error(error);
    }
    return response;
  };

  useEffect(() => {
    fetchGames();
  }, []);

  const renderGameDetails = () => {
    const utc = new Date(nextGame?.status);
    const timeOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    const local = utc.toLocaleString("en-US", timeOptions);
    return (
      <>
        <h1>Next {team.name} Game:</h1>
        <p>
          {nextGame?.home_team?.full_name} VS{" "}
          {nextGame?.visitor_team?.full_name}
        </p>
        <p>{local === "Invalid Date" ? new Date().toDateString() : local}</p>
        <p>
          {local === "Invalid Date"
            ? nextGame?.time === "Final"
              ? `${nextGame?.time}`
              : `Time: ${nextGame?.time}`
            : ""}
        </p>
        <p>
          {local === "Invalid Date"
            ? `Score: ${nextGame?.home_team_score} - ${nextGame?.visitor_team_score}`
            : ""}
        </p>
        <button onClick={() => removeCookie("team")}>Change Team</button>
      </>
    );
  };

  return nextGame ? renderGameDetails() : "Loading...";
}

export default GameView;
