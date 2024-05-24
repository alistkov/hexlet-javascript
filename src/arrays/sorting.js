/* eslint-disable no-param-reassign */
const bubbleSort = (collection) => {
  let steps = collection.length - 1;
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i <= steps; i += 1) {
      if (collection[i] > collection[i + 1]) {
        const tmp = collection[i];
        collection[i] = collection[i + 1];
        collection[i + 1] = tmp;
        swapped = true;
      }
    }
    steps -= 1;
  } while (swapped);
  return collection;
};

export default bubbleSort;
