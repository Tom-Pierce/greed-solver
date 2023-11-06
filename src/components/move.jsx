const Move = (parentSquare, square) => {
  return {
    get parentSquare() {
      return parentSquare;
    },
    get square() {
      return square;
    },
  };
};

export default Move;
