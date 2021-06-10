function cryptography (text, key) {
    let crypto = "";
    for (let i = 0; i < text.length; i++) {
        let newChar = text.codePointAt(i);
        if (newChar >= 32 && newChar <= )


        newChar = String.fromCodePoint(newChar);
        
        //console.log(text.codePointAt(i));
        crypto = crypto + newChar;
    }
    return crypto;
}

console.log(cryptography("az AZ", 1));

