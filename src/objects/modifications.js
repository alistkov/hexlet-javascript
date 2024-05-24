/* eslint-disable no-param-reassign */
import _ from 'lodash';

const normalize = (data) => {
  data.name = _.capitalize(data.name);
  data.description = data.description.toLowerCase();
  return data;
};

export default normalize;
