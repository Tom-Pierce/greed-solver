const Square = (data, x, y) => {
  let travelled = false;
  return {
    get x() {
      return x;
    },
    get y() {
      return y;
    },
    get data() {
      return data;
    },
    set data(val) {
      data = val;
    },
    get travelled() {
      return travelled;
    },
    set travelled(val) {
      travelled = val;
    },
  };
};

export default Square;
