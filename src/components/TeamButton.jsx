import { useCookies } from "react-cookie";

function TeamButton({ teamName, teamId }) {
  const [cookies, setCookie, removeCookie] = useCookies();

  const handleClick = () => {
    setCookie("team", { id: teamId, name: teamName });
  };

  return <button onClick={handleClick}>{teamName}</button>;
}

export default TeamButton;
