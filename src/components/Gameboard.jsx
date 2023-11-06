import PropTypes from "prop-types";

const Gameboard = ({ board, player }) => {
  const isMoveIncluded = (prevMoves, currentMove) =>
    prevMoves.some(
      (prevMove) => prevMove.x === currentMove.x && prevMove.y === currentMove.y
    );

  // Function to create the top and bottom border lines
  const createBorderLine = () => {
    let borderLine = "+";
    for (let j = 0; j < board.gameboard[0].length * 2; j++) {
      borderLine += "-";
    }
    return borderLine + "+";
  };

  return (
    <div className="gameboard-container">
      <div>{createBorderLine()}</div>
      {board.gameboard.map((row, i) => {
        return (
          <div key={i}>
            <span>|</span>
            {row.map((square, j) => {
              const isAtSymbol = j === player.x && i === player.y;
              const customClassName = isAtSymbol
                ? "at-symbol-class"
                : `num-${square.data}`;

              return (
                <span key={`${i}${j}`} className={customClassName}>
                  {isMoveIncluded(player.prevMoves, { x: j, y: i })
                    ? j === player.x && i === player.y
                      ? "@"
                      : j === 0
                      ? "  "
                      : " "
                    : square.data}
                  &nbsp;
                </span>
              );
            })}
            <span>|</span>
          </div>
        );
      })}
      <div>{createBorderLine()}</div>
      <div>{player.score}</div>
      <div>{player.alive ? "true" : "false"}</div>
    </div>
  );
};

Gameboard.propTypes = {
  board: PropTypes.object,
  player: PropTypes.object,
};

export default Gameboard;
