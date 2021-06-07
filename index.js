// 1 Write a JavaScript function to truncate a string to a certain number of words.

// 2 Write a JavaScript function to alphabetize a given string.
const alphabetize_string = (string) => {
    lettersArray = string.split('');
    lettersArray.sort(function(a, b){
        if(a.toLowerCase() < b.toLowerCase()) { return -1; }
        if(a.toLowerCase() > b.toLowerCase()) { return 1; }
    })
    return lettersArray.join('');
}
// 3 Write a JavaScript function to convert ASCII to Hexadecimal format.

// 4 Write a JavaScript function to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th.r
const humanize = (number) => {
    // Check if type of input is a number
    if (typeof number !== 'number') {
        return 'Invalid input';
    }
    // Check if it's not NaN or Infinity
    if (number % 1 !== 0) {
        return 'Invalid input';
    }
    switch (number.toFixed().slice(-1)){
        case '1':
            return `${number}st`;
        case '2':
            return `${number}nd`;
        case '3':
            return `${number}rd`;
        default:
            return `${number}th`;
    }
}

// 5 Write a JavaScript function to get the successor of a string.

// Object

// 6 Write a JavaScript function to sort the following array of objects by title value.

// 7 Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds.

// 8 Write a JavaScript program to create a Clock. Note: The output will come every second.
const clock = () => {
    const printDate = () => {
        let date = new Date().toLocaleTimeString();
        console.log(date);
    }
    setInterval(printDate, 999.8);
}
// 9 Write a JavaScript function to print all the methods in an JavaScript object.
const all_methods = (input) => {
    Object.getOwnPropertyNames(input); // filter this

}

// 10 Write a JavaScript function to print all the properties in an JavaScript object.
const all_properties = (input) => Object.getOwnPropertyNames(input);