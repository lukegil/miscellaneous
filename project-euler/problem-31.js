/**
 * In the United Kingdom the currency is made up of pound (£) and pence (p). There are eight coins in general circulation:
 * 
 * 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p), and £2 (200p).
 * It is possible to make £2 in the following way:
 * 
 * 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
 * How many different ways can £2 be made using any number of coins?
 * 
 * TODO: this one takes way too long
 * 
 */

const COIN_VALUES = [
    1, 2, 5, 10, 20, 50, 100, 200
];

function createNode(total, val, depth) {
    return {
        total,
        val,
        depth,
    }
}

// This hits the callstack limits
function searchRec(curList, goal, maxDepth) {
    const sum = curList.reduce((a, b) => a + b, 0);
    if (curList.length > maxDepth ||  sum > goal) {
        return [[]];
    }

    if (sum === goal) {
        return [curList];
    }

    const lastVal = (curList.length) ? curList.slice(-1) : 0;
    const workingCoins = COIN_VALUES.filter(val => val >= lastVal);

    let answers = [];
    for (let val of workingCoins) {
        const result = searchRec(curList.concat([val]), goal, maxDepth);
        answers.push(...result);
    }
    return answers;
}

function searchLoop(goal, head, maxDepth) {
    const COIN_LENGTH = COIN_VALUES.length;
    let found = 0;
    const queue = [createNode(head, head, 1, [head])];
    if (queue[0].val === goal) {
        found += 1;
    }
    while (queue.length) {
        const cur = queue.shift();
        for (let i = 0; i < COIN_LENGTH; i++) {
            const cv = COIN_VALUES[i];
            if (cv < cur.val) {
                continue;
            } else if (cur.total + cv === goal) {
                found += 1;
                continue;
            } else if (cur.depth === maxDepth) {
                continue;
            } else if (cur.total + cv > goal) {
                continue;
            } 
            queue.push(createNode(cur.total + cv, cv, cur.depth + 1));
        }
    }
    return found;
}

function findCombinations(value) {
    let total = 0;
    // console.log(`start: ${new Date()}`)
    for (let cv of COIN_VALUES) {
        total += searchLoop(value, cv, value);
    }
    // console.log(`end: ${new Date()}`)
    return total;
}

module.exports = {
    findCombinations
}