export const getPrice = (price) => {
  switch (price) {
    case '$':
      return 10;
    case '$$':
      return 15;
    case '$$$':
      return 25;
  }
};
