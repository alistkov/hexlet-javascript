const calcualteSum = (numbers) => {
  if (numbers.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 3 === 0) {
      sum += numbers[i];
    }
  }
  return sum;
};

export default calcualteSum;
