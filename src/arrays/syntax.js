// https://ru.hexlet.io/courses/js-arrays/lessons/syntax/exercise_unit

export const getWeekends = (format = "long") => {
  if (format === "long") {
    return ["saturday", "sunday"];
  }

  return ["sat", "sun"];
};
