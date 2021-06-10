let text = 'Sample text';
const i = 1;

const alpha = 'ABCDEFGHIJKLMNOPQRSTUWXYZ abcdefghijklmnopqrstuvwxyz,.!?'
const code = 'አማርኛአማርኛአማርኛአማርኛአማርኛአማርኛአማርኛአማርኛአማርኛአማርኛአማርኛአማርኛ'

// alpha.indexOf() char in alpha => index of char in code

console.log(text[i]);
console.log(alpha.indexOf(text[i]));
console.log(code[alpha.indexOf(text[i])]);