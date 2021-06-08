// 5 Write a JavaScript function to get the successor of a string.

export function successor(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz",
        length = alphabet.length,
        result = str,
        i = str.length;

  while (i > 0) {
    let last = str.charAt(--i),
<<<<<<< HEAD
      next = " ",
      // index,
      carry = false;
      
=======
      next = ' ',
      index,
      carry = false;
>>>>>>> 54de0378edf7a97cc6d66ba9847027ac44b07a56
    
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
<<<<<<< HEAD
    } else if (last === " ") {
=======
      } else if (last === ' ') {
        //console.log('last is " "');
        next = last;
        carry = true;
      } else {
        //console.log('it happened', `"${last}"`);
>>>>>>> 54de0378edf7a97cc6d66ba9847027ac44b07a56
            next = +last + 1;
            if (next > 9) {
                next = 0;
                carry = true;
            }

            if (carry && i === 0) {
              result = next + result.slice(1);
              break;
          
            }
      }

    result = result.slice(0, i) + next + result.slice(i + 1);
    
    if (!carry) {
        break;
    }

    }
    return result;
}


console.log(successor("abcd")); // "abce"
console.log(successor("THX1138")); // "THX1139"
console.log(successor("< >")); // "< >"
<<<<<<< HEAD
console.log(successor("1999zzz")); // "2000aaa"
console.log(successor("ZZZ9999")); // "AAAA0000"
console.log(successor("Z ")); // "AAAA0000"
console.log(successor(" ")); // "AAAA0000"
=======
console.log(successor("<>")); // "<1<>"
console.log(successor("1999zzz ")); // "2000aaa "
console.log(successor("ZZZ9999 ")); // "AAAA0000 "
console.log(successor("ZZZ9999")); // "AAAA0000"
console.log(successor("Z")); // "AA"
console.log(successor(" ")); // "1"
>>>>>>> 54de0378edf7a97cc6d66ba9847027ac44b07a56
