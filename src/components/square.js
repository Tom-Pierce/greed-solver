const Square = (data, x, y) => {
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
  };
};

export default Square;
