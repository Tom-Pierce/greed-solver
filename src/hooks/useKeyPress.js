import { useEffect } from "react";

const useKeyPress = (keys, callback) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (keys.includes(event.key)) {
        callback(event);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [keys, callback]);
};

export default useKeyPress;
