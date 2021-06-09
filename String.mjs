// 1 Function to truncate a string to a certain number of words:
export function truncate(str, maxLength = 7) {
    let strToArray = str.split(" ");
    return strToArray.length > maxLength
        ? strToArray.slice(0, maxLength).join(" ") + `…`
        : str;
}

// 2 Function to alphabetize a given string:
export function alphabetize_string(string) {
    let lettersArray = string.split(/['' ' ']*/);
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

// 3 Function to convert ASCII to Hexadecimal format:
export function ascii_to_hex(str) {
    let arrStorage = [];
    for (let i = 0; i < str.length; i++) {
        // codePointAt(0): returns the UTF16 code for the characters at position 0
        const hex = Number(str.codePointAt(i)).toString(16);
        arrStorage.push(hex);
    }
    return arrStorage.join("");
}

// 4 Function to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th:
export function humanize(number) {
    if (typeof number !== "number") {
        return "Invalid input";
    }
    if (number % 1 !== 0) {
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

// 5 Function to get the successor of a string:
export function successor(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz",
        length = alphabet.length,
        result = str,
        i = str.length;

    while (i > 0) {
        let last = str.charAt(--i),
            next = " ",
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
        } else if (last === " ") {
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

// 6 Function to search and replace words in a string:
export function searchAndReplace(
    text,
    toFind,
    toAdd,
    caseSensitive = false,
    exactWord = true
) {
    let regEx;
    // Special charachter check
    let specialChar = /[!@#$€£%^&*(),.?":{}|<>]/;

    // If there is a special character to be found search must be case insensitive and not exact word
    if ((caseSensitive && !exactWord) || specialChar.test(toFind)) {
        regEx = toFind;
    // Default: If case insensitive and exact word
    } else if (!caseSensitive && exactWord) {
        regEx = new RegExp(`\\b${toFind}\\b`, "i");
    // If case insensitive and not exact word
    } else if (!caseSensitive && !exactWord) {
        regEx = new RegExp(toFind, "i");
    // If case sensitive and exact word
    } else {
        regEx = new RegExp(`\\b${toFind}\\b`);
    }
    // Check if word is present in the text
    if (!text.match(regEx) === null) {
        return "Not found!";
    }

    return text.split(regEx).join(toAdd);
}