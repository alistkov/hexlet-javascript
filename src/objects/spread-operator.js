const make = (name, options) => {
  const defaultData = {
    createdAt: Date.now(),
    state: 'moderating',
  };

  return {
    ...defaultData,
    ...options,
    name,
  };
};

export default make;
