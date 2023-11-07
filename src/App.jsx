import Board from "./components/board";
import PlayerControls from "./components/PlayerControls";
import Player from "./javascript/player";
import Gameboard from "./components/Gameboard";
import { createContext, useEffect, useState } from "react";
import runAllMoves from "./javascript/getBestPath";

export const PlayerContext = createContext();

function App() {
  const board = Board();
  const [player, setPlayer] = useState(Player(15, 10, board));
  useEffect(() => {
    // runAllMoves(Player(15, 10, board, [{ x: 15, y: 10 }]), board);
  }, []);
  return (
    <PlayerContext.Provider value={{ player, setPlayer }}>
      <PlayerControls />
      <Gameboard board={board} player={player} />
    </PlayerContext.Provider>
  );
}

export default App;
