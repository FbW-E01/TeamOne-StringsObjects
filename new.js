var FIRST = 97,
    LAST = 122;

function next (string) {
  let lastChar = string[string.length - 1];

  string = string.substring(0, string.length - 1);

  if(lastChar.charCodeAt(0) >= LAST) {
    // make last char a and append a
    lastChar = String.fromCharCode(FIRST) + String.fromCharCode(FIRST);
  }
  else {
    // Increase last char
    lastChar = String.fromCharCode(lastChar.charCodeAt(0) + 1);
  }



  return string + lastChar;
}

console.log(next('zz'));
console.log(next('ZA'));


