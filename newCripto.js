const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz,.!?";
const code = "ሀለሐመሠረሰሸቀበቨቯተቷቸቿኀነኗኘአከኸወዐዘዟዠዧየደጀገጠጨጰጸፀፈፐኍኟኧኵዷጇጧጯጷጿ ፥።፤?!";

// alpha.indexOf() char in alpha => index of char in code

// console.log(text[i]);
// console.log(alpha.indexOf(text[i]));
// console.log(code[alpha.indexOf(text[i])]);

// console.log(alpha.length);

let text = "";

let empty = '';
for (let i = 0; i < text.length; i++) {
      // empty += code[alpha.indexOf(text[i])]
    empty += alpha[code.indexOf(text[i])];
}
console.log(empty);
