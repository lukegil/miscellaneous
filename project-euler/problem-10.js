/**
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 * Find the sum of all the primes below two million.
 */

function primeChecker() {
  const primes = [2];
  return (toCheck) => {
    const notPrime = primes.some((prime) => toCheck % prime === 0);
    if (notPrime) {
      return false;
    }
    primes.push(toCheck);
    return true;
  };
}

function sumOfPrimesUpTo(upTo) {
  let sum = 2;
  const isPrime = primeChecker();
  for (let i = 3; i < upTo; i += 2) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

function sieveOfErosthenes(upTo) {

  const primes = (new Array(upTo)).fill(0).map((val, indx) => indx);

  primes[0] = 0;
  primes[1] = 0;
  for (let i = 2; i < Math.pow(upTo, 0.5); ) {
    for (let j = i + i; j < upTo; j += i) {
      primes[j] = 0;
    }

    for (let k = i + 1; k < upTo; k++) {
      if (primes[k] !== 0) {
        i = primes[k];
        break;
      }
    }
  }

  return primes.reduce((prev, cur) => prev + cur, 0);
}

module.exports = {
  sumOfPrimesUpTo,
  sieveOfErosthenes,
};
