// 1 Write a JavaScript function to truncate a string to a certain number of words.
const str1 = "The quick brown fox jumps over the lazy dog";
const str2 = "Hello World";

export function truncate(str, maxLength = 7) {
    let strToArray = str.split(" ");
    return strToArray.length > maxLength
        ? strToArray.slice(0, maxLength).join(" ") + `…`
        : str;
}
console.log(truncate(str1)); // => "The quick brown fox jumps over the lazy…"
console.log(truncate(str2)); // => "Hello World"
console.log(truncate(str1, 3)); // => "The quick brown…"
console.log(truncate(str1, 5)); // => "The quick brown fox jumps…"

// 2 Write a JavaScript function to alphabetize a given string.
function alphabetize_string(string) {
    lettersArray = string.split(/['' ' ']*/);
    lettersArray.sort(function (a, b) {
        if (a.toLowerCase() < b.toLowerCase()) {
            return -1;
        }
        if (a.toLowerCase() > b.toLowerCase()) {
            return 1;
        }
    });
    return lettersArray.join("");
}

// 3 Write a JavaScript function to convert ASCII to Hexadecimal format.

function ascii_to_hex(str) {
    let arrStorage = [];
    for (let i = 0; i < str.length; i++) {
        // codePointAt(0): returns the UTF16 code for the characters at position 0
        const hex = Number(str.codePointAt(i)).toString(16);
        arrStorage.push(hex);
    }
    return arrStorage.join("");
}
console.log(ascii_to_hex("12")); // => 3132
console.log(ascii_to_hex("100")); // => 313030
console.log(ascii_to_hex("🧐")); // => 1f9d0ddd0;
console.log("\u{1f9d0}"); // => 🧐

// 4 Write a JavaScript function to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th.r
function humanize(number) {
    if (number % 1 !== 0 || typeof number !== "number") {
        return "Invalid input";
    }
    switch (number.toFixed().slice(-1)) {
        case "1":
            return `${number}st`;
        case "2":
            return `${number}nd`;
        case "3":
            return `${number}rd`;
        default:
            return `${number}th`;
    }
}

// 5 Write a JavaScript function to get the successor of a string.
function successor(str) {
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
}

console.log(successor("abcd"));
console.log(successor("ZZZ9999"));
