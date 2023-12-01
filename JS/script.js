let item = "item1";
const items = ["value1", item, 5, true, { property: "value" }];

console.log(items);

// Get Array Length - Items in array.
console.log(items.length);

// Get Specific item in array thru index;
console.log(`First Item: ${items[0]}, Second Item: ${items[1]}`);

// Change item in array.
items[2] = "new value";
console.log(`Index 2 New Value: ${items[2]}`);

// Add item to array using index.
items[9] = "Test Item";
console.log[items];

// 2 Array methods
let fruits = ["apple", "banana", "orange", "pineapple"];

// Outputs items in array. 
console.log(fruits.join(", "));

// Adding new item to end of array
fruits.push("watermelon");
console.log(fruits);

// Adding new item to beginning of array
fruits.unshift("cherry");
console.log(fruits);

// Removing item in the beginning of array
fruits.shift();
console.log(fruits);

// Removing item in the end of array
fruits.pop();
console.log(fruits);

// Navigating thru array
fruits.forEach(function(item) {
  item = `${item} is fruit basket`;
  console.log(item);
});

// Filter items in array
let longNamedFruits = fruits.filter(function(item) {
  if(item.length > 5) {
    return item;
  }
});

console.log(`Long name fruits: ${longNamedFruits.join(", ")}`);

// Sorting Arrays
fruits.sort();
console.log(`Sort Fruits: ${fruits.join(", ")}`);

// Finding an item in an array
let findFruit = "orange";
let chosenFruit = fruits.find((item) => item === findFruit) || "Fruit not found";
console.log(`The chosen fruit is: ${chosenFruit}`);

// Moving last item to first
let last = fruits.pop();
fruits.unshift(last);
console.log(fruits);

// Remove item from array
let removeFruit = "banana";
fruits.splice(fruits.indexOf(removeFruit), 1);
console.log(`Fruit ${removeFruit} has been removed.`, fruits);