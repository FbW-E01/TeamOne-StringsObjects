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
    // Special character check
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

// 7 Function to encrypt or decrypt a text using a key that shifts the letter by the given key amount:
export function cryptoOne (text, key) {
    let crypto = "";
    for (let i = 0; i < text.length; i++) {
        // Get UTF-16 code for char
        let newChar = text.codePointAt(i);
        // Lower case char
        if (newChar >= 97 && newChar <= 122) {
            newChar = newChar + key;
            while (newChar > 122) {
                newChar -= 26;
            } 
            while (newChar < 97) {
                newChar += 26;
            }
        }
        // Upper case char
        if (newChar >= 65 && newChar <= 90) {
            newChar = newChar + key;
            while (newChar > 90) {
                newChar -= 26;
            }
            while (newChar < 65) {
                newChar += 26;
            }
        }
        // Extended latin chars
        if (newChar >= 192 && newChar <= 687) {
            newChar = newChar + key;
            while (newChar < 192) {
                newChar -= 496;
            }
            while (newChar > 687) {
                newChar += 496;
            }
        }
        newChar = String.fromCodePoint(newChar);
        crypto += newChar;
    }
    
    return crypto;
}

// 8 Function to encrypt or decrypt a text using a key that shifts the letter by the given key amount:
export function cryptoTwo(text, deSypher = false) {
    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz,.!?";
    const code = "ሀለሐመሠረሰሸቀበቨቯተቷቸቿኀነኗኘአከኸወዐዘዟዠዧየደጀገጠጨጰጸፀፈፐኍኟኧኵዷጇጧጯጷጿ ፥።፤?!";

    let empty = "";
    for (let i = 0; i < text.length; i++) {
        deSypher
            ? (empty += alpha[code.indexOf(text[i])])
            : (empty += code[alpha.indexOf(text[i])]);
    }

    return empty;
}

// 9 Function to generate text:
export function sentenceGenerator(wordCount) {
    const wordGenerator = () => {
        // generate random number between 2 and 13.
        const randomNum = Math.floor(Math.random() * 11) + 2;

        // generate an array with random length.
        const randomLength = Array(randomNum);

        // fill the array with random number between 97 and 122
        const ArrOfNum = randomLength
            .fill()
            .map(() => Math.floor(Math.random() * 26) + 97);

        // converts numbers to letters
        const ArrOfLetters = ArrOfNum.map((a) => String.fromCodePoint(a));

        // console.log(ArrOfNum);
        let vowels = ["a", "e", "o", "i", "u"];
        let rand = Math.floor(Math.random() * 5);
        const randomVowels = vowels[rand];

        // check if there is a vowel if not add one at random
        ArrOfLetters.map((l) =>
            /[aeiou]/.test(l) ? l : ArrOfLetters.splice(rand, 1, randomVowels)
        );

        return ArrOfLetters.join("");
    };

    let arrHolder = [];
    // loop through the wordCount and push words into the arrHolder
    for (let i = 0; i < wordCount; i++) {
        arrHolder.push(wordGenerator());
    }
    // generate sentences randomly
    for (
        let i = Math.floor(Math.random() * 10) + 5, counter = 1;
        i < arrHolder.length - 1;
        i += Math.floor(Math.random() * 10) + 5, counter++
    ) {
        arrHolder[i] = arrHolder[i] + ".";
        arrHolder[i + 1] =
            arrHolder[i + 1][0].toUpperCase() + arrHolder[i + 1].slice(1);
        if (counter % 5 === 0) {
            arrHolder.splice(i + 1, 0, "\n   ");
        }
    }

    const stringHolder = arrHolder.join(" ");

    return (
        stringHolder[0].toUpperCase() +
        stringHolder.slice(1, stringHolder.length - 1) +
        "."
    );
}