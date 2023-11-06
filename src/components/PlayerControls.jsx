import { useContext } from "react";
import useKeyPress from "../hooks/useKeyPress";
import PropTypes from "prop-types";
import { PlayerContext } from "../App";

const PlayerControls = () => {
  const { player, setPlayer } = useContext(PlayerContext);
  const handleKeyPress = (e) => {
    e.preventDefault();
    if (player.alive) {
      switch (e.key) {
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
        case "v":
          console.log(`current pos: ${player.x} ${player.y}`);
          console.log(player);
          break;
        default:
          break;
      }
      // copies an object while also keeping getters and setters intact
      const copyObj = (obj) => {
        var mycopy = {};
        Object.getOwnPropertyNames(obj).forEach(function (prop) {
          var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
          Object.defineProperty(mycopy, prop, descriptor);
        });
        return mycopy;
      };
      const updatedPlayer = copyObj(player);

      setPlayer(updatedPlayer);
    } else console.log("YOU'RE DEAD BOZO");
  };

  useKeyPress(
    ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "v"],
    handleKeyPress
  );

  return null;
};

PlayerControls.propTypes = {
  player: PropTypes.object,
  setPlayer: PropTypes.func,
};

export default PlayerControls;
