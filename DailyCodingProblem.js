/*
Question 1: Google - Easy
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass? */

function sumChecker(arr, k) {
  let numberDict = {};
  for (let i = 0; i < arr.length; i++) {
    let numNeeded = k - arr[i];
    if (numberDict[numNeeded]) {
      return true;
    }
    numberDict[arr[i]] = true;
  }
  return false;
}

console.log(sumChecker([10, 15, 3, 7], 17)); // should return true

console.log(sumChecker([10, 2, 3, 1], 18)); // should return false

/* Question 2: Uber - Hard

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?*/

function returnProduct(arr) {
  let total = arr.reduce((acc, curr) => acc * curr);

  return arr.map(elem => total / elem);
}

function returnProductWithoutDivision(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        continue;
      }
      if (!newArr[i]) {
        newArr.push(arr[j]);
      } else {
        newArr[i] *= arr[j];
      }
    }
  }
  return newArr;
}

function returnProductWithoutDivisionTryTwo(arr) {
  let productsBelow = [];
  let productsAbove = [];
  let answerArr = [];
  productsBelow[0] = 1;
  for (let i = 1; i < arr.length; i++) {
    productsBelow[i] = productsBelow[i - 1] * arr[i - 1];
  }

  productsAbove[arr.length - 1] = 1;
  for (let j = arr.length - 2; j >= 0; j--) {
    productsAbove[j] = productsAbove[j + 1] * arr[j + 1];
  }

  for (let k = 0; k < arr.length; k++) {
    answerArr[k] = productsBelow[k] * productsAbove[k];
  }
  return answerArr;
}

console.log(returnProduct([3, 2, 1])); // [2, 3, 6]
console.log(returnProduct([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]

console.log(returnProductWithoutDivision([3, 2, 1])); // [2, 3, 6]
console.log(returnProductWithoutDivision([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]

console.log(returnProductWithoutDivisionTryTwo([3, 2, 1])); // [2, 3, 6]
console.log(returnProductWithoutDivisionTryTwo([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]

/* Question 3: Google - Medium

Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
The following test should pass:

node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left' */

class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class binaryTree {
  constructor(root) {
    this.root = root;
    this.left = null;
    this.right = null;
  }
  serialize() {
    //
  }
  deserialize() {
    //
  }
}

/* Question 4: Stripe - Hard

Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.
*/

/* Question 5: Jane Street

cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

Given this implementation of cons:

def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair
Implement car and cdr.
*/
