// Object Functions

// sort an array of objects by property value:
export function sorted(array, key) {
    // sort by comparing a in index [1] with b in index [0] at 1st iteration.
    return array.sort((a, b) => 
    String(a[key]).toLowerCase().codePointAt(0) - String(b[key]).toLowerCase().codePointAt(0));
}

// fill an array with values on supplied bounds:
export function num_string_range(bound1, bound2, number) {
    let a = [],
        i = bound1.charCodeAt(0),
        j = bound2.charCodeAt(0);
    for (; i <= j; i += number) {
        a.push(String.fromCharCode(i));
    }
    return a;
}

// return all the properties in an JavaScript object:
export function all_properties(input) {
    return Object.getOwnPropertyNames(input);
}

// return all the methods in an JavaScript object:
export function all_methods(input) {
    const allProperties = Object.getOwnPropertyNames(input);
    const retArray = allProperties.filter(
        (item) => typeof input[item] === "function"
    );
    return retArray;
}

// display the time every second:
export function clock() {
    const printDate = () => {
        let date = `${new Date()}`;
        console.log(date.slice(16, 24));
    };
    setInterval(printDate, 999.8);
}