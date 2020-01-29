// 1. Reverse
/* Write a method that will take a string as input, 
and return a new string with the same letters in reverse order. */

function reverseString(string) {
    let splitString = string.split("");
    let reverseArray = splitString.reverse;
    let joinArray = reverseArray.join("");
    return joinArray;
}


// 2. Factorial
/* Write a method that takes an integer n in; 
it should return n*(n-1)*(n-2)*...*2*1. Assume n >= 0.
As a special case, factorial(0) == 1. */

function factorial(n) {
    if (n < 0) {
        return 'n must be be > or = to 0'
    } else if (n == 0) {
        return 1;
    } else if (n == 1) {
        return 1;
    } else if (n > 1) {
        return n * factorial(n-1);
    }
}


// 3. Longest Word
/* Write a method that takes in a string. 
Return the longest word in the string. 
You may assume that the string contains only letters and spaces. 
You may use the String split method to aid you in your quest. */

function longestWord(sentence) {
    let words = sentence.split(" ");
    let longestWord = words.sort(
        function (a, b) {
            return b.length - a.length;
        }
    )
    return longestWord[0];
}


// 4. Sum Nums
/* Write a method that takes in an integer num and 
returns the sum of all integers between zero and num, 
up to and including num. */

function sum_num(num) {
    let total = (0 + num) * ((num + 1) / 2);
    return total;
}


// 5. Time Conversion
/* Write a method that will take in a number of minutes, 
and returns a string that formats the number into hours:minutes. */

function time_conversion(minutes) {
    let timeHours = Math.floor(minutes / 60);
    let timeMins = minutes % 60;
    return timeHours + ":" + timeMins;
}


// 6. Count Vowels
/* Write a method that takes a string and 
returns the number of vowels in the string. 
You may assume that all the letters are lower cased. 
You can treat “y” as a consonant. */

function count_vowels(string) {
    let vowels = /[aeiou]/g;
    return string.match(vowels).length;
}


// 7. Palindrome
/* Write a method that takes a string and 
returns true if it is a palindrome. 
A palindrome is a string that is the same 
whether written backward or forward. 
Assume that there are no spaces; 
only lowercase letters will be given. */

function palindrome(string) {
    if (string === string.split("").reverse().join("")) {
        return true;
    } else
    return false;
}


// 8. Most Letters
/* Write a method that takes a string in and 
returns true if the letter “z” appears within three letters after an “a”. 
You may assume that the string contains only lowercase letters. */

function nearby_az(string) {
    let stringSplit = string.split("");
    let a = stringSplit.indexOf('a');
    let z = stringSplit.indexOf('z');
    if (z - a <= 3) {
        return true;
    } else
    return false;
}


// 9. Two Sum
/* Write a method that takes an array of numbers. 
If a pair of numbers in the array sums to zero, 
return the positions of those two numbers. 
If no pair of numbers sums to zero, return null. */

function two_sum(nums) {
    let sums = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == 0) {
                sums.push([nums[i], nums[j]])
            }
        }
    }
    return sums;
}


// 10. Is Power of Two
/* Write a method that takes in a number and 
returns true if it is a power of 2. 
Otherwise, return false. 
You may want to use the % modulo operation. 
5 % 2 returns the remainder when dividing 5 by 2; 
therefore, 5 % 2 == 1. In the case of 6 % 2, 
since 2 evenly divides 6 with no remainder, 6 % 2 == 0. */

function is_power_of_two(num) {
    return ((num & (-num)) == num) && (num > 0);
}


// 11. Repeat a string
/* Repeat a given string (first argument) num times (second argument). 
Return an empty string if num is not a positive number. */

function repeat_string_num_times(str, num) {
    if (num <= 0) {
        return "";
    } else if (num > 0) {
        return str.repeat([num]);
    }

}


// 12. Sum All Numbers in a Range
/* Write a function that receives an array of two numbers as argument and 
returns the sum of those two numbers and all numbers between them. */

function add_all(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let result = (max + min) * ((max - min + 1) / 2);
    return result;
}


// 13. True or False
/* Write a function that checks if a value is classified as a boolean primitive. 
Return true or false.
Boolean primitives are true and false. */

function is_it_true(args) {
    if (args == true || args == false) {
        return true;
    } else
    return false;
}


// 14. Return Largest Numbers in Arrays
/* Write a function that receives an array with four nested array. 
The function returns an array consisting of the largest number 
from each provided sub-array. */

function largest_of_four(arr) {
    let result = [];
    arr.map(function(obj){
        result.push(Math.max.apply(null, obj))
    });
    return result; 
}


// 15. Is it an anagram?
/* Write a JavaScript function to check if a word is an anagram or not. */

function isAnagram(test, original) {
    let word1 = test.split("").sort().join("");
    let word2 = original.split("").sort().join("");
    if (word1 == word2) {
        return true;
    } else
    return false;
};
