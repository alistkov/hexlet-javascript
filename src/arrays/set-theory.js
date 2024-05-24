const countUniqChars = (text) => {
  const charsSet = new Set(text.split(''));
  const chars = Array.from(charsSet);
  return chars.length;
};

export default countUniqChars;
