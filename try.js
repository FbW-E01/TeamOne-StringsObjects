// 5 Write a JavaScript function to get the successor of a string.

export function successor(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz",
        length = alphabet.length,
        result = str,
        i = str.length;

  while (i > 0) {
    let last = str.charAt(--i),
      next = ' ',
      index,
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
      } else if (last === ' ') {
        //console.log('last is " "');
        next = last;
        carry = true;
      } else {
        //console.log('it happened', `"${last}"`);
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
}


console.log(successor("abcd")); // "abce"
console.log(successor("THX1138")); // "THX1139"
console.log(successor("< >")); // "< >"
console.log(successor("<>")); // "<1<>"
console.log(successor("1999zzz ")); // "2000aaa "
console.log(successor("ZZZ9999 ")); // "AAAA0000 "
console.log(successor("ZZZ9999")); // "AAAA0000"
console.log(successor("Z")); // "AA"
console.log(successor(" ")); // "1"
