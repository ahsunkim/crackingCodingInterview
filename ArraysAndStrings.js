/* eslint-disable max-statements */
/* eslint-disable complexity */
// 1.1  Is Unique - Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

function isUnique(str) {
  // Using memoization to store values
  let dict = {};
  for (let i = 0; i < str.length; i++) {
    if (dict[str[i]] !== undefined) {
      return false;
    } else {
      dict[str[i]] = true;
    }
  }
  return true;
}

function isUniqueWithoutDataStructures(str) {
  str = str
    .split()
    .sort()
    .join();
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      return false;
    }
  }
  return true;
}

console.log('1.1 - expect true', isUnique('abcdefg')); // expect true
console.log('1.1 - expect false', isUnique('aabcdefg')); // expect false

console.log('1.1 - expect true', isUniqueWithoutDataStructures('abcdefg')); //expect true
console.log('1.1 - expect false', isUniqueWithoutDataStructures('aabcdefg')); //expect false

// 1.2 Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.

function twoStringsPermutation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let str1Dict = {};
  let str2Dict = {};

  for (let i = 0; i < str1.length; i++) {
    if (str1Dict[str1[i]] === undefined) {
      str1Dict[str1[i]] = 1;
    } else {
      str1Dict[str1[i]] += 1;
    }
  }

  for (let j = 0; j < str2.length; j++) {
    if (str2Dict[str2[j]] === undefined) {
      str2Dict[str2[j]] = 1;
    } else {
      str2Dict[str2[j]] += 1;
    }
  }

  for (let key in str1Dict) {
    if (str1Dict.hasOwnProperty(key)) {
      if (str2Dict[key] !== str1Dict[key]) {
        return false;
      }
    }
  }
  return true;
}

console.log('1.2 - expect true', twoStringsPermutation('history', 'itysohr')); // expect true
console.log(
  '1.2 - expect false',
  twoStringsPermutation('history', 'nothistory')
); // expect false
console.log('1.2 - expect false', twoStringsPermutation('history', 'hertory')); // expect false

// 1.3 URLify: Write a method to replace all spaces in a string with '%20.' You may assume that the string has sufficient space at the end to hold the additional characters and that you are given the "true" length of the string. (Note: If implementing in Java, please use a character array so that you can perform this operation in place.)

function urlify(str) {
  return str.split(' ').join('%20');
}

console.log(
  '1.3 - expect hello%20world%20this%20is%20Ahsun',
  urlify('hello world this is Ahsun')
); //expect 'hello%20world%20this%20is%20Ahsun'

// 1.4 Palindrome Permutation: Given a string, write a function to check if it as a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

function palindromePermutation(str) {
  let strDict = {};
  for (let i = 0; i < str.length; i++) {
    if (strDict[str[i]] === undefined) {
      strDict[str[i]] = 1;
    } else {
      strDict[str[i]] += 1;
    }
  }
  let strDictKeys = Object.keys(strDict);
  let singleCharFound = false;
  for (let i = 0; i < strDictKeys.length; i++) {
    if (strDict[strDictKeys[i]] % 2 === 1) {
      if (str.length % 2 === 0) {
        return false;
      } else {
        if (singleCharFound) {
          return false;
        } else {
          singleCharFound = true;
        }
      }
    }
  }
  return true;
}

console.log('1.4 - expect false', palindromePermutation('hey')); // expects false
console.log('1.4 - expect true', palindromePermutation('hih')); // expects true
console.log('1.4 - expect true', palindromePermutation('hihi')); // expects true

// 1.5 One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if it is one edit (or zero edits away).

function editDetector(str1, str2) {
  if (str1 === str2) {
    return true;
  }
  if (str1.length - str2.length > 1 || str2.length - str1.length > 1) {
    return false;
  }

  let editCount = 0;
  let pointerOne = 0;
  let pointerTwo = 0;
  if (str1.length === str2.length) {
    while (pointerOne < str1.length && pointerTwo < str2.length) {
      if (str1[pointerOne] !== str2[pointerTwo]) {
        editCount++;
      }
      pointerOne++;
      pointerTwo++;
      if (editCount > 1) {
        return false;
      }
    }
  }
  if (str1.length > str2.length) {
    while (pointerOne < str1.length && pointerTwo < str2.length) {
      if (str1[pointerOne] !== str2[pointerTwo]) {
        editCount++;
      } else {
        pointerTwo++;
      }
      pointerOne++;
    }
    if (editCount > 1) {
      return false;
    }
  }
  if (str1.length < str2.length) {
    while (pointerOne < str1.length && pointerTwo < str2.length) {
      if (str1[pointerOne] !== str2[pointerTwo]) {
        editCount++;
      } else {
        pointerOne++;
      }
      pointerTwo++;
    }
    if (editCount > 1) {
      return false;
    }
  }
  return true;
}

console.log('1.5 - expect true', editDetector('hi', 'hi')); // expect true;
console.log('1.5 - expect true', editDetector('his', 'hi')); // expect true;
console.log('1.5 - expect false', editDetector('his', 'mi')); // expect false
console.log('1.5 - expect true', editDetector('him', 'his')); // expect true;
console.log('1.5 - expect false', editDetector('him', 'sym')); // expect false;
console.log('1.5 - expect true', editDetector('hi', 'his')); // expect true;
console.log('1.5 - expect false', editDetector('hi', 'shy')); // expect false;
console.log('1.5 - expect false', editDetector('hi', 'hihihihihi')); // expect false;

// 1.6 String Compression: Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).

function basicStringCompression(str) {
  let currentSavedChar = str[0];
  let currentCharCount = 0;
  let compressedStr = '';
  for (let i = 0; i < str.length; i++) {
    if (currentSavedChar === str[i]) {
      currentCharCount++;
    } else {
      compressedStr += currentSavedChar;
      compressedStr += currentCharCount;
      currentSavedChar = str[i];
      currentCharCount = 1;
    }
  }
  compressedStr += currentSavedChar;
  compressedStr += currentCharCount;

  if (compressedStr.length > str.length) {
    return str;
  } else {
    return compressedStr;
  }
}

console.log('1.6 - expect a2b1c5a3', basicStringCompression('aabcccccaaa')); //expect a2b1c5a3
console.log(
  '1.6 - expect h1i19',
  basicStringCompression('hiiiiiiiiiiiiiiiiiii')
);

// 1.7 Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
/* Given input matrix =
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
] */

function rotateMatrix(matrix) {
  for (let i = 0; i < Math.ceil(matrix.length); i++) {
    for (let j = 0; j < Math.ceil(matrix[i].length); j++) {
      //
    }
  }
}

// 1.8 Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.
/*
[[1, 0],                [[0, 0],
 [1, 1]] should become   [1, 0]
*/

function zeroMatrix(matrix) {
  let rows = {};
  let cols = {};
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = true;
        cols[j] = true;
      }
    }
  }
  for (let k = 0; k < matrix.length; k++) {
    for (let l = 0; l < matrix[k].length; l++) {
      if (rows[k] || cols[l]) {
        matrix[k][l] = 0;
      }
    }
  }
  return matrix;
}

console.log(
  '1.8 - expects [[0, 0],[1, 0]]',
  zeroMatrix([
    [1, 0],
    [1, 1],
  ])
);

console.log(
  '1.8 - expects [[1, 0, 1], [0, 0, 0], [1, 0, 1]]',
  zeroMatrix([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);

// 1.9 String Rotation: Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring(e.g. "waterbottle" is a rotation of "erbottlewat")

function isSubstring(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let tempStr = str1 + str1;

  if (tempStr.indexOf(str2) > -1) {
    return true;
  } else {
    return false;
  }
}

console.log('1.9 - expects true', isSubstring('waterbottle', 'erbottlewat'));
console.log('1.9 - expects false', isSubstring('hello', 'lohel'));
console.log('1.9 - expects false', isSubstring('hello', 'loohel'));
