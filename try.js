// 5 Write a JavaScript function to get the successor of a string.

function successor(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz",
        length = alphabet.length,
        result = str,
        i = str.length;

  while (i >= 0) {
    let last = str.charAt(--i),
      next = " ",
      index,
      carry = false;
      console.log(last);
    
    // console.log(isNaN(last));
    // console.log(isNaN(last) || last === " ");
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
      carry = true
    }
    else /* (last !== " ") */ {
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


// console.log(successor("abcd")); // "abce"
// console.log(successor("THX1138")); // "THX1139"
console.log(successor("<>")); // "< >"
// console.log(successor("1999zzz ")); // "2000aaa"
// console.log(successor("ZZZ9999 ")); // "AAAA0000"
// console.log(successor("Z")); // "AAAA0000"
// console.log(successor(" ")); // "AAAA0000"
