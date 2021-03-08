/**
 * A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

function isPalindrome(int) {
  let string = int.toString().split("");
  while (string.length > 1) {
    const first = string.shift();
    const last = string.pop();
    if (first !== last) {
      return false;
    }
  }
  return true;
}

function findPalindrome(num_digits) {
  const max = Math.pow(10, num_digits) - 1;
  const min = Math.pow(10, num_digits - 1);
  let largest = -1;
  for (let i = min; i <= max; i++) {
    for (let j = min; j <= i; j++) {
        const product = i*j;
      if (isPalindrome(product) && product > largest) {
        largest = product;
      }
    }
  }
  return largest;
}

module.exports = {
  findPalindrome,
  isPalindrome
};
