const a = {}; // this is one object with its own ref
const b = {}; // this is another object with a different ref

const myMap = new Map();
myMap.set(a, 'object a');
myMap.set(b, 'object b');

myMap.has({}); // returns `false`
myMap.has(a);  // returns `true`
myMap.get(b);  // returns 'object b'

const mySet = new Set();
mySet.add(a);

mySet.has(a); // returns `true`
mySet.has(b); // returns `false`
mySet.has({}); // returns `false`

// this will print out 'object a' and 'object b'
for (let [key, value] of myMap) {
  console.log(key);
}


