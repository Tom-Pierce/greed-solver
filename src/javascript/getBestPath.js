import Player from "./player";

const isInBounds = (pos) => {
  if (pos.x < 0 || pos.x > 29 || pos.y < 0 || pos.y > 19) return false;
  return true;
};

const isMoveIncluded = (prevPos, currentMove) =>
  prevPos.some(
    (prevPos) => prevPos.x === currentMove.x && prevPos.y === currentMove.y
  );

// checks if moving in a certain direction is possible
const canPlayerMove = (player, direction) => {
  if (direction === "up") {
    return (
      isInBounds({ x: player.x, y: player.y - 1 }) &&
      !isMoveIncluded(player.prevPos, { x: player.x, y: player.y - 1 })
    );
  }
  if (direction === "down") {
    return (
      isInBounds({ x: player.x, y: player.y + 1 }) &&
      !isMoveIncluded(player.prevPos, { x: player.x, y: player.y + 1 })
    );
  }
  if (direction === "right") {
    return (
      isInBounds({ x: player.x + 1, y: player.y }) &&
      !isMoveIncluded(player.prevPos, { x: player.x + 1, y: player.y })
    );
  }
  if (direction === "left") {
    return (
      isInBounds({ x: player.x - 1, y: player.y }) &&
      !isMoveIncluded(player.prevPos, { x: player.x - 1, y: player.y })
    );
  }
};

const createNewPlayer = (prevPlayer, board) => {
  return Player(
    prevPlayer.x,
    prevPlayer.y,
    board,
    prevPlayer.prevPos.slice(),
    prevPlayer.score,
    prevPlayer.moves.slice()
  );
};

const runAllMoves = (start, board) => {
  const queue = [start];
  const startTime = performance.now();
  let highscore = { score: 0, player: undefined };

  while (queue.length < 2000000) {
    const prevDirections = queue[0].moves.slice();
    const prevDirection = prevDirections[prevDirections.length - 1];

    if (prevDirection !== "down" && canPlayerMove(queue[0], "up")) {
      const playerUp = createNewPlayer(queue[0], board);
      playerUp.move("up");
      if (playerUp.score > highscore.score)
        highscore = { score: playerUp.score, player: playerUp };

      if (playerUp.alive) {
        queue.push(playerUp);
      }
    }
    if (prevDirection !== "up" && canPlayerMove(queue[0], "down")) {
      const playerDown = createNewPlayer(queue[0], board);
      playerDown.move("down");
      if (playerDown.score > highscore.score)
        highscore = { score: playerDown.score, player: playerDown };
      if (playerDown.alive) {
        queue.push(playerDown);
      }
    }
    if (prevDirection !== "left" && canPlayerMove(queue[0], "right")) {
      const playerRight = createNewPlayer(queue[0], board);
      playerRight.move("right");
      if (playerRight.score > highscore.score)
        highscore = { score: playerRight.score, player: playerRight };
      if (playerRight.alive) {
        queue.push(playerRight);
      }
    }
    if (prevDirection !== "right" && canPlayerMove(queue[0], "left")) {
      const playerLeft = createNewPlayer(queue[0], board);
      playerLeft.move("left");
      if (playerLeft.score > highscore.score)
        highscore = { score: playerLeft.score, player: playerLeft };
      if (playerLeft.alive) {
        queue.push(playerLeft);
      }
    }

    queue.shift();
  }
  console.log(queue);
  console.log("highest: ", highscore);
  console.log(`time: ${performance.now() - startTime}`);

  alert(queue);
};

export default runAllMoves;
