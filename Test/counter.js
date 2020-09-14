const myArray =[1, 2, 3, 5, 2, 8, 9, 2];
const count = myArray.reduce((count, num) => num === 2 ? count + 1 : count, 0)

console.log(count)


