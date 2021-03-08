/**
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */

function biggestPrimeFactor(n) {
  const primes = [3];
  let largestFactor = 0;
  for (let int = 3; int < (n / primes[primes.length - 1]); int += 2) {
    const notPrime = Boolean(primes.find((prime) => int % prime === 0));
    if (notPrime) {
      continue;
    }
    primes.push(int);
    if (n % int === 0) {
      largestFactor = int;
    }
  }
  return largestFactor;
}

module.exports = {
  biggestPrimeFactor,
};
