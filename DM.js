// 1 Write a JavaScript function to truncate a string to a certain number of words.
let str1 = "The quick brown fox jumps over the lazy dog";

function truncate(str, maxLength = 7) {
    let strToArray = str.split(" ");
    return strToArray.length > maxLength
        ? strToArray.slice(0, maxLength).join(" ") + `…`
        : str;
}

console.log(truncate(str1)); // => "The quick brown fox jumps over the lazy…"
console.log(truncate(str1, 3)); // => "The quick brown…"
console.log(truncate(str1, 5)); // => "The quick brown fox jumps…"

// 3 Write a JavaScript function to convert ASCII to Hexadecimal format.

function ascii_to_hexa(str) {
    let arrStorage = '';
    for (let i = 0; i < str.length; i++) {
        arrStorage += Number(str.codePointAt(i)).toString(16);
    }
    return arrStorage
}

console.log(ascii_to_hexa("12")); //3132
console.log(ascii_to_hexa("100")); //313030
console.log(ascii_to_hexa("cat")); //313030

// 6 Write a JavaScript function to sort the following array of objects by title value.

var library = [
    { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
    { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        libraryID: 3245,
    },
];

const sorted = (obj) => {
    return obj.sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
    });
};

console.log(sorted(library));




  