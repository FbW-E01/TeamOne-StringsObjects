
function cryptoTwo(text, diSypher = false) {
    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz,.!?";
    const code = "ሀለሐመሠረሰሸቀበቨቯተቷቸቿኀነኗኘአከኸወዐዘዟዠዧየደጀገጠጨጰጸፀፈፐኍኟኧኵዷጇጧጯጷጿ ፥።፤?!";

    let empty = "";
    for (let i = 0; i < text.length; i++) {
        diSypher
            ? (empty += alpha[code.indexOf(text[i])])
            : (empty += code[alpha.indexOf(text[i])]);
    }

    return empty;
}

console.log(cryptoTwo("Hello world"));
console.log(cryptoTwo("ሸጀፈፈኟዟጿኟዷፈደ", true));


function wordGenerator() {
    // generate random number b/n 2 and 13.
    const randomNum = Math.floor(Math.random() * 11) + 1;

    // generate random element in arr
    const RandomLength = (rl = Array(randomNum));

    // fill the array with random number of UTF-16
    const ArrOfNum = rl.fill().map(() => Math.floor(Math.random() * 26) + 97);

    // converts the UTF to letters.
    const ArrOfLetters = ArrOfNum.map((a) => String.fromCodePoint(a));

    // join the as a string
    return ArrOfLetters.join("");
}
