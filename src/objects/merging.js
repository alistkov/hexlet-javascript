import _ from 'lodash';

const fill = (collection, keys, data) => {
  const selected = keys.length === 0 ? data : _.pick(data, keys);
  return Object.assign(collection, selected);
};

export default fill;
