/* eslint-disable import/prefer-default-export */
export const getWeekends = (format = 'long') =>
  format === 'long' ? ['saturday', 'sunday'] : ['sat', 'sun']
