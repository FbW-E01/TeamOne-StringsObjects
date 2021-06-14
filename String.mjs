// 1 Function to truncate a string to a certain number of words:
export function truncate(str, maxLength = 7) {
    let getArray = str.split(" ");
    return getArray.length > maxLength
        ? getArray.slice(0, maxLength).join(" ") + `…`
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
export function asciiToHex(str) {
    let hexStorage = [];
    for (let i = 0; i < str.length; i++) {
        // codePointAt(0): returns the UTF16 code for the characters at position 0
        const hex = str.codePointAt(i).toString(16);
        hexStorage.push(hex);
    }
    return hexStorage.join("");
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
export function cryptoOne(text, key) {
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

// 8 Function to encrypt or decrypt a text using a key that shifts the letter by the given key amount: // FIXME:
export function cryptoTwo(text) {
    // Generate random english alphabets + few characters.
    let enAlphabet = [];
    for (let i = 32; i < 123; i++) {
        if ((i > 39 && i < 65) || (i > 90 && i < 97)) {
            continue;
        } else {
            enAlphabet.push(String.fromCharCode(i));
        }
    }
    // Generate some Amharic alphabets.
    let amAlphabet = [];
    for (let i = 4608; i <= 4845; i += 4) {
        amAlphabet.push(String.fromCharCode(i));
    }

    let string = "";
    for (let i = 0; i < text.length; i++) {
        //
        const en_version = enAlphabet[amAlphabet.indexOf(text[i])];
        const amh_version = amAlphabet[enAlphabet.indexOf(text[i])];

        string += en_version || amh_version;
    }

    return string;
}

// 9 Function to generate text:
export function textGenerator(wordCount) {
    const wordGenerator = () => {
        // generate random number between 2 and 13.
        const randomNum = Math.floor(Math.random() * 11) + 2;

        // generate an array with random length.
        const arrOfRandomNum = Array(randomNum);

        // fill the array with random number between 97 and 122
        const randNumOfRandLen = arrOfRandomNum
            .fill()
            .map(() => Math.floor(Math.random() * 26) + 97);

        // converts numbers to letters
        const arrOfLetters = randNumOfRandLen.map((num) =>
            String.fromCodePoint(num)
        );

        // console.log(ArrOfNum);
        let vowels = ["a", "e", "o", "i", "u"];
        let random = Math.floor(Math.random() * 5);
        const randomVowels = vowels[random];

        // check if there is a vowel if not add one random vowel at random index
        /[aeiou]/.test(arrOfLetters)
            ? arrOfLetters
            : arrOfLetters.splice(random, 1, randomVowels);

        return arrOfLetters.join("");
    };

    let arrOfWords = []; // a holder, for the words to be generated.

    // push the words generated into an arrOfWords
    for (let i = 0; i < wordCount; i++) {
        arrOfWords.push(wordGenerator());
    }
    // generate sentences randomly
    for (
        let i = Math.floor(Math.random() * 10) + 5, counter = 1;
        i < arrOfWords.length - 1;
        i += Math.floor(Math.random() * 10) + 5, counter++
    ) {
        arrOfWords[i] = arrOfWords[i] + ".";
        arrOfWords[i + 1] =
            arrOfWords[i + 1][0].toUpperCase() + arrOfWords[i + 1].slice(1);
        if (counter % 5 === 0) {
            arrOfWords.splice(i + 1, 0, "\n\n\t");
        }
    }

    const getString = arrOfWords.join(" ");

    return (
        getString[0].toUpperCase() +
        getString.slice(1, getString.length - 1) +
        "."
    );
}