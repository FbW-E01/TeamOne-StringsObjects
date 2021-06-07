let str1 = "The quick brown fox jumps over the lazy dog";

function truncate(str, maxLength = 8) {
    let strToArray = str.split(" ");
    return strToArray.length > maxLength
        ? strToArray.slice(0, maxLength).join(" ") + `…`
        : str;
}

console.log(truncate(str1)); // => "The quick brown fox"
console.log(truncate(str1, 4)); // => "The quick brown fox"
console.log(truncate(str1, 7)); // => "The quick brown fox"

