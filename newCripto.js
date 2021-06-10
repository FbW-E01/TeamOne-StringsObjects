
function sentenceGenerator(wordCount) {
    wordGenerator = () => {
        // generate random number b/n 2 and 13.
        const randomNum = Math.floor(Math.random() * 11) + 2;

        // generate an array with random length.
        const randomLength = Array(randomNum);

        // fill the array with random number b/n 97 and 122
        const ArrOfNum = randomLength
            .fill()
            .map(() => Math.floor(Math.random() * 26) + 97);

        // converts numbers to letters
        const ArrOfLetters = ArrOfNum.map((a) => String.fromCodePoint(a));

        // console.log(ArrOfNum);
        let vowels = ["a", "e", "o", "i", "u"];
        let rand = Math.floor(Math.random() * 5);
        const randomVowels = vowels[rand];

        // check if there is a vowel if not add one at random
        ArrOfLetters.map((l) =>
            /[aeiou]/.test(l) ? l : ArrOfLetters.splice(rand, 1, randomVowels)
        );

        return ArrOfLetters.join("");
    };

    let arrHolder = [];
    // loop through the wordCount and push words into the arrHolder
    for (let i = 0; i < wordCount; i++) {
        arrHolder.push(wordGenerator());
    }
    // generate sentences randomly
    for (
        let i = Math.floor(Math.random() * 10) + 5, counter = 1;
        i < arrHolder.length - 1;
        i += Math.floor(Math.random() * 10) + 5, counter++
    ) {
        arrHolder[i] = arrHolder[i] + ".";
        arrHolder[i + 1] =
            arrHolder[i + 1][0].toUpperCase() + arrHolder[i + 1].slice(1);
        if (counter % 5 === 0) {
            arrHolder.splice(i + 1, 0, "\n   ");
        }
    }

    const stringHolder = arrHolder.join(" ");

    return (
        stringHolder[0].toUpperCase() +
        stringHolder.slice(1, stringHolder.length - 1) +
        "."
    );
}

console.log(sentenceGenerator(100));
