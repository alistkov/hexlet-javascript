// https://ru.hexlet.io/courses/js-arrays/lessons/isset/exercise_unit

export const get = (data, index, defaultValue = null) => {
  if (index >= data.length || index < 0) {
    return defaultValue;
  }

  return data[index];
};
