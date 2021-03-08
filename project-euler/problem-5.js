
let iterations = 0

function smallestDivisible(maxInSequence) {
    let current = maxInSequence;
    const divisors = [];
    for (let i = maxInSequence; i >= 2; i-- ) {
        iterations += 1;
        divisors.push(i);
    }
    const found = true;
    while (found) {
        const allMatch = divisors.every(d =>  {
            iterations += 1;
            return current % d === 0;
        });
        if (allMatch) {
            console.log('iterations', iterations);
            return current;
        }
    current += maxInSequence;
    }
}

module.exports = {
    smallestDivisible
}