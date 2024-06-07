const groupBy = (users, prop) =>
  users.reduce((acc, user) => {
    const key = user[prop];
    if (!Object.hasOwn(acc, key)) {
      acc[key] = [];
    }
    acc[key].push(user);
    return acc;
  }, {});

export default groupBy;
