import _ from 'lodash';

const countWords = (text) =>
  _.words(text)
    .map((word) => word.toLowerCase())
    .reduce((acc, word) => {
      const count = (acc[word] ?? 0) + 1;
      return { ...acc, [word]: count };
    }, {});

export default countWords;
