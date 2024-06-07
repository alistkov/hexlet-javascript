const run = (text) => {
  // BEGIN (write your solution here)
  const takeLast = (string, count) => {
    if (string.length === 0 || string.length < count) {
      return null;
    }

    const part = string.slice(-count);
    return part.split('').reverse().join('');
  };
  // END

  return takeLast(text, 4);
};

export default run;
