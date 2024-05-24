/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
const getSuperSeriesWinner = (scores) => {
  let result = 0;

  for (const score of scores) {
    const [canadaScore, ussrScore] = score;
    result += Math.sign(canadaScore - ussrScore);
  }
  if (result === 0) {
    return null;
  }
  return result > 0 ? 'canada' : 'ussr';
};

export default getSuperSeriesWinner;
