// 1 Write a JavaScript function to truncate a string to a certain number of words.

// 2 Write a JavaScript function to alphabetize a given string.

// 3 Write a JavaScript function to convert ASCII to Hexadecimal format.

// 4 Write a JavaScript function to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th.r

// 5 Write a JavaScript function to get the successor of a string.
const successor = (str) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz",
    length = alphabet.length,
    result = str,
    i = str.length;

  while (i >= 0) {
    let last = str.charAt(--i),
      next = "",
      carry = false;

    if (isNaN(last)) {
      index = alphabet.indexOf(last.toLowerCase());

      if (index === -1) {
        next = last;
        carry = true;
      } else {
        let isUpperCase = last === last.toUpperCase();
        next = alphabet.charAt((index + 1) % length);
        if (isUpperCase) {
          next = next.toUpperCase();
        }

        carry = index + 1 >= length;
        if (carry && i === 0) {
          let added = isUpperCase ? "A" : "a";
          result = added + next + result.slice(1);
          break;
        }
      }
    } else {
      next = +last + 1;
      if (next > 9) {
        next = 0;
        carry = true;
      }

      if (carry && i === 0) {
        result = "1" + next + result.slice(1);
        break;
      }
    }

    result = result.slice(0, i) + next + result.slice(i + 1);
    if (!carry) {
      break;
    }
  }
  return result;
};

console.log(successor("abcd"));
console.log(successor("ZZZ9999"));

// Object

// 6 Write a JavaScript function to sort the following array of objects by title value.

// 7 Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds.
function num_string_range(bound1, bound2, number) {
  let a = [],
    i = bound1.charCodeAt(0),
    j = bound2.charCodeAt(0);
  for (; i <= j; i += number) {
    a.push(String.fromCharCode(i));
  }
  return a;
}
console.log(num_string_range("a", "z", 6));

// 8 Write a JavaScript program to create a Clock. Note: The output will come every second.

// 9 Write a JavaScript function to print all the methods in an JavaScript object.

// 10 Write a JavaScript function to print all the properties in an JavaScript object.
