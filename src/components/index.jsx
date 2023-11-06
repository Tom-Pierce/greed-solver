import Player from "./player.mjs";

const player = Player(15, 10);

window.addEventListener("keydown", (event) => {
  const startTime = performance.now();

  if (event.isComposing) {
    return;
  }
  if (player.alive) {
    switch (event.key) {
      case "ArrowDown":
        player.move("down");
        break;
      case "ArrowUp":
        player.move("up");
        break;
      case "ArrowRight":
        player.move("right");
        break;
      case "ArrowLeft":
        player.move("left");
        break;

      default:
        break;
    }
  } else console.log("YOURE DEAD BOZO");
  console.log(performance.now() - startTime);
});
