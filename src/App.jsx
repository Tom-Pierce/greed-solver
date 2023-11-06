import "./App.css";
import Board from "./components/board";
import PlayerControls from "./components/PlayerControls";
import Player from "./components/player";
import Gameboard from "./components/Gameboard";
import { createContext, useState } from "react";

export const PlayerContext = createContext();

function App() {
  const board = Board();
  const [player, setPlayer] = useState(Player(15, 10, board));
  return (
    <PlayerContext.Provider value={{ player, setPlayer }}>
      <PlayerControls />
      <Gameboard board={board} player={player} />
    </PlayerContext.Provider>
  );
}

export default App;
