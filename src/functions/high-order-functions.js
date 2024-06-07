import _ from 'lodash';

const takeOldest = (users, limit = 1) => {
  const sorted = _.sortBy(users, (user) => Date.parse(user.birthday));
  return sorted.slice(0, limit);
};

export default takeOldest;
