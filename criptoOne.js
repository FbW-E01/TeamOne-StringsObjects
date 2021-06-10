function cryptoOne (text, key) {
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
        // Char with accent
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

console.log(cryptoOne("Beta abcde", 1)); // Cfub bcdef
console.log(cryptoOne("Cfub bcdef", -1)); // Beta abcde
console.log(cryptoOne("Beta abcde", 52)); // Beta abcde
console.log(cryptoOne("André Lorenzoni", 102)); // Ylbpŏ Jmpclxmlg
console.log(cryptoOne("Ylbpŏ Jmpclxmlg", -102)); // André Lorenzoni
console.log(cryptoOne("íslenska, Móðir ekki veit ég það", 4)); // ñwpirwoe, Q÷ômv ioom zimx ík Ăeô
console.log(cryptoOne("ñwpirwoe, Q÷ômv ioom zimx ík Ăeô", -4)); // íslenska, Móðir ekki veit ég það
console.log(cryptoOne("Yinelea macı, sürekli dağılımı sağlayarak.", -40)); // Kuzqxqm ymoĉ, eÔdqwxu pm÷ĉxĉyĉ em÷xmkmdmw.
console.log(cryptoOne("Kuzqxqm ymoĉ, eÔdqwxu pm÷ĉxĉyĉ em÷xmkmdmw.", 40)); // Yinelea macı, sürekli dağılımı sağlayarak.
