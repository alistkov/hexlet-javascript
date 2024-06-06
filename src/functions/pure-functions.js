const isPrime = (number) => {
  if (number <= 1) return false;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const sayPrimeOrNot = (number) => (isPrime(number) ? 'yes' : 'no');

export default sayPrimeOrNot;