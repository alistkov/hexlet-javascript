import _ from 'lodash';

const average = (...numbers) => {
  if (numbers.length === 0) {
    return null;
  }
  const sum = _.sum(numbers);
  return sum / numbers.length;
};

export default average;
