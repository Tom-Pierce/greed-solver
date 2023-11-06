const Player = (x, y, board, prevMoves = [{ x: x, y: y }], score = 0) => {
  let alive = true;

  const isInBounds = (pos) => {
    if (pos.x < 0 || pos.x > 29 || pos.y < 0 || pos.y > 19) return false;
    return true;
  };

  const getMovesNum = (pos) => {
    if (
      board.gameboard[pos.y] !== undefined &&
      board.gameboard[pos.y][pos.x] !== undefined
    )
      return parseInt(board.gameboard[pos.y][pos.x].data, 10);
    else return 1;
  };

  const isMoveIncluded = (prevMoves, currentMove) =>
    prevMoves.some(
      (prevMove) => prevMove.x === currentMove.x && prevMove.y === currentMove.y
    );

  const kill = (coordinate, direction) => {
    // kill moves the player back one step to match the original game
    alive = false;
    if (coordinate === "y") y = y - 1 * direction;
    if (coordinate === "x") x = x - 1 * direction;
  };

  const move = (direction) => {
    if (!alive) return;
    const movePlayer = (coordinate, direction, movesNum) => {
      //coordinate is x or y
      //direction is -1 or +1
      //movesNum is the number of squares to move
      for (let i = 0; i < movesNum; i++) {
        if (!alive) break;
        if (coordinate === "y") y = y + 1 * direction;
        if (coordinate === "x") x = x + 1 * direction;
        if (!isInBounds({ x: x, y: y })) kill(coordinate, direction);
        if (alive && isMoveIncluded(prevMoves, { x: x, y: y })) {
          kill(coordinate, direction);
        }
        prevMoves.push({ x: x, y: y });
        score += 1;
      }
    };

    switch (direction) {
      case "up":
        movePlayer("y", -1, getMovesNum({ x: x, y: y - 1 }));
        break;
      case "down":
        movePlayer("y", 1, getMovesNum({ x: x, y: y + 1 }));
        break;
      case "right":
        movePlayer("x", 1, getMovesNum({ x: x + 1, y: y }));
        break;
      case "left":
        movePlayer("x", -1, getMovesNum({ x: x - 1, y: y }));
        break;

      default:
        throw new Error(direction + "is not a valid direction to move");
    }
  };

  return {
    get x() {
      return x;
    },
    get y() {
      return y;
    },
    get alive() {
      return alive;
    },
    get score() {
      return score;
    },
    get prevMoves() {
      return prevMoves;
    },
    move,
    isMoveIncluded,
  };
};

export default Player;
