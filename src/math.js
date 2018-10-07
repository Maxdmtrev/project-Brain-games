
const isEvenNum = num => (num % 2 === 0);

const getGcd = (num1, num2) => (num1 !== 0 ? getGcd(num2 % num1, num1) : num2);

const getProgression = (getLength, firstArg, moveAgr) => {
  const result = [];
  for (let i = 0; i < getLength; i += 1) {
    result.push(firstArg + moveAgr * i);
  }
  return result;
};

const isPrime = (num) => {
  if (num <= 1) return false;
  const numSqrt = Math.sqrt(num);
  for (let i = 2; i <= numSqrt; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

export {
  isEvenNum, getGcd, getProgression, isPrime,
};
