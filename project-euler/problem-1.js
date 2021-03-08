/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

function findSum(divisors) {
  const sortedD = divisors.sort();
  return function addDivisors(lessThan) {
    let sum = 0;
    for (let i = 1; i < lessThan; i++) {
      const div = sortedD.find((div) => i % div === 0);

      if (div) {
        sum += i;
      }
    }
    return sum;
  };
}

module.exports = {
  findSum,
};
