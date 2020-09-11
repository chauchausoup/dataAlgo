//her we go yeah
const twoSum = (array, sum) => {
    const pairs = [];
    const store = [];

    for (let part1 of array) {
        const part2 = sum - part1;
        if (store.indexOf(part2) !== -1) pairs.push([part1, part2]);
        store.push(part1);
    }

    return pairs;
};
console.log(twoSum([1,2,3,1,2],4))


