/*
1. 
Write a function addNumbers that takes a single string parameter and searches for all the numbers in the string, adds them together, then returns the sum. 
For example: if str is "88Hello 3World!" the output should be 91. 
You will have to differentiate between single digit numbers and multiple digit numbers like in the example above. 
So "55Hello" and "5Hello 5" should return two different answers. Each string will contain at least one letter or symbol. 
Warning: Regex is not allowed for this exercise!

var addNumbers = function(string) {
  var stringArray = string.split('');
  var numbers = [];
  for (var i = 0; i < stringArray.length; i++) {
    if (i > 0 && Number.isInteger(+stringArray[i]) && Number.isInteger(+stringArray[i - 1]) && stringArray[i - 1] !== ' ') {
      var prevNum = numbers[numbers.length - 1];
      var thisNum = stringArray[i];
      var newNum = prevNum + thisNum;
      numbers[numbers.length - 1] = +newNum;

    } else if (Number.isInteger(+stringArray[i])) {
      numbers.push(stringArray[i]);
    }
  }
  var addedNumbers = 0;
  for (i = 0; i < numbers.length; i++) {
    addedNumbers = addedNumbers + (+numbers[i]);
  }
  return addedNumbers;
};
console.log(addNumbers('37Hello2'));
}

2. Write a function longestWord that takes a single string parameter and returns the largest word in the string. 
If there are two or more words that are the same length, it returns the first word from the string with that length. 
Ignore punctuation and assume the input sentence will not be empty.

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var longestWord = function(string) {
  var wordsArray = string.split(' ');
  var previousWord = 0;
  var longest;
  for (var i = 0; i < wordsArray.length; i++) {
    var currentWord = wordsArray[i];
    var lettersArray = currentWord.split('');

    var noPunctuation = [];

    for (var b = 0; b < lettersArray.length; b++) {
      if (alphabet.indexOf(lettersArray[b]) >= 0) {
        noPunctuation.push(lettersArray[b]);
      }
    }
    var wordLength = noPunctuation.length;

    if (wordLength > previousWord) {
      longest = currentWord;
      previousWord = wordLength;
    }
  }

  return longest;
};

console.log('longest:', longestWord('What is pseudopseudohypoparathyroidism?'));
console.log('longest:', longestWord('The quick brown fox jumps over the lazy dog.'));
