// https://ru.hexlet.io/courses/js-arrays/lessons/modification/exercise_unit

export const swap = (data) => {
  if (data.length < 2) {
    return data;
  }

  const first = data[0];
  data[0] = data.at(-1);
  data[data.length - 1] = first;
  return data;
};
