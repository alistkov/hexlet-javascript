/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
import _ from 'lodash';

const getSameCount = (collection1, collection2) => {
  const uniqItems = _.uniq(collection1.concat(collection2));
  let count = 0;
  for (const item of uniqItems) {
    if (collection1.includes(item) && collection2.includes(item)) {
      count += 1;
    }
  }
  return count;
};

export default getSameCount;
