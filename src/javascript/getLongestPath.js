import Player from "./player";

const runAllMoves = (start, board) => {
  const queue = [start];
  let count = 0;
  const players = [];
  let highscore = { score: 0, player: undefined };

  while (count < 10000) {
    const prevDirections = queue[0].moves.slice();
    if (prevDirections[prevDirections.length - 1] !== "down") {
      const playerUp = Player(
        queue[0].x,
        queue[0].y,
        board,
        queue[0].prevMoves.slice(),
        queue[0].score,
        queue[0].moves.slice()
      );
      playerUp.move("up");
      if (playerUp.score > highscore.score)
        highscore = { score: playerUp.score, player: playerUp };

      if (playerUp.alive) {
        queue.push(playerUp);
      }
      players.push(playerUp);
    }
    if (prevDirections[prevDirections.length - 1] !== "up") {
      const playerDown = Player(
        queue[0].x,
        queue[0].y,
        board,
        queue[0].prevMoves.slice(),
        queue[0].score,
        queue[0].moves.slice()
      );
      playerDown.move("down");
      if (playerDown.score > highscore.score)
        highscore = { score: playerDown.score, player: playerDown };
      if (playerDown.alive) {
        queue.push(playerDown);
      }
      players.push(playerDown);
    }
    if (prevDirections[prevDirections.length - 1] !== "left") {
      const playerRight = Player(
        queue[0].x,
        queue[0].y,
        board,
        queue[0].prevMoves.slice(),
        queue[0].score,
        queue[0].moves.slice()
      );
      playerRight.move("right");
      if (playerRight.score > highscore.score)
        highscore = { score: playerRight.score, player: playerRight };
      if (playerRight.alive) {
        queue.push(playerRight);
      }
      players.push(playerRight);
    }
    if (prevDirections[prevDirections.length - 1] !== "right") {
      const playerLeft = Player(
        queue[0].x,
        queue[0].y,
        board,
        queue[0].prevMoves.slice(),
        queue[0].score,
        queue[0].moves.slice()
      );
      playerLeft.move("left");
      if (playerLeft.score > highscore.score)
        highscore = { score: playerLeft.score, player: playerLeft };
      if (playerLeft.alive) {
        queue.push(playerLeft);
      }
      players.push(playerLeft);
    }
    queue.shift();
    // if (count % 100000 === 0) {
    //   console.log("count: ", count);
    //   console.log("highscore: ", highscore);
    // }
    count++;
  }
  console.log("highest: ", highscore);
  // players.sort((a, b) => b.prevMoves.length - a.prevMoves.length);
  console.log(players.map((player) => player.moves));
};

export default runAllMoves;
