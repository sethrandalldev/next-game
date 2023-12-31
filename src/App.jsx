import "./App.css";
import { useCookies } from "react-cookie";

import GameView from "./components/GameView";
import TeamPicker from "./components/TeamPicker";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies();
  if (cookies.team) {
    return <GameView team={cookies.team} removeCookie={removeCookie} />;
  } else {
    return <TeamPicker setCookie={setCookie} />;
  }
}

export default App;
