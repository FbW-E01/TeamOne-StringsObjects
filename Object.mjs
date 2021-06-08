// Object

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

function sorted(obj) {
    // sort by comparing a in index [1] with b in index [0] at 1st iteration.
    return obj.sort((a, b) => a.title.codePointAt(0) - b.title.codePointAt(0));
}

console.log(sorted(library));

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
function clock() {
    const printDate = () => {
        let date = `${new Date()}`;
        console.log(date.slice(16, 24));
    };
    setInterval(printDate, 999.8);
}

// 9 Write a JavaScript function to print all the methods in an JavaScript object.
function all_methods(input) {
    const allProperties = Object.getOwnPropertyNames(input);
    const retArray = allProperties.filter(
        (item) => typeof input[item] === "function"
    );
    return retArray;
}

// 10 Write a JavaScript function to print all the properties in an JavaScript object.
function all_properties(input) {
    return Object.getOwnPropertyNames(input);
}
