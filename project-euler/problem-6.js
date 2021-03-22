/**
 * The sum of the squares of the first ten natural numbers is, 1^2 + 2^2 + ... + 10^2 = 385
 * The square of the sum of the first ten natural numbers is, (1 + 2 + ... + 10)^2 = 55^2 = 3025
 * Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.
 * Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */

function getSumOfSquares(upTo) {
    let sum = 0;
    for (let i = 1; i <= upTo; i++) {
        sum += Math.pow(i, 2);
    }
    return sum;
}

function getSquareOfSum(upTo) {
    let sum = 0;
    for (let i = 1; i <= upTo; i++) {
        sum += i;
    }
    return Math.pow(sum, 2);
}


/**
 * 
 * Definitely a better way to do this. One thing I noticed, the space between the numbers increase
 * by odd numbers. i.e. For 1, 4, 9, 16 -> 3,5,7,9
 * @returns 
 */
function getDiff(upTo) {
    return Math.abs(getSumOfSquares(upTo) - getSquareOfSum(upTo));
}

module.exports = {
    getDiff,
}