# Team One Programming Basic Project

This project has a library of functions. It is divided in two sets of functions, **String functions** and **Object functions** that are stored in the files [**String.mjs**](./String.mjs) and [**Object.mjs**](./Object.mjs) respectively.
Examples of usage are displayed in the files [**string-examples.mjs**](./string-examples.mjs) and [**object-examples.mjs**](./object-examples.mjs).

## String functions:

1. Function to truncate a string to a certain number of words:

```js
console.log(truncate("The quick brown fox jumps over the lazy dog", 4)); // "The quick brown fox…"
```

2. Function to alphabetize a given string:

- Note : Alphabetize string : An individual string can be alphabetized. This rearranges the letters so they are sorted A to Z.

```js
console.log(alphabetize_string("United States"));
//"adeeinSstttU"
```

3. Function to convert ASCII to Hexadecimal format:

```js
console.log(asciiToHex("12")); //3132
console.log(asciiToHex("100")); //313030
```

4. Function to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th:

```js
console.log(humanize(1)); //"1st"
console.log(humanize(20)); //"20th"
console.log(humanize(302)); //"302nd"
```

5. Function to get the successor of a string:

```js
string.successor("abcd"); // "abce"
string.successor("THX1138"); // "THX1139"
string.successor("< >"); // "< >"
string.successor("1999zzz"); // "2000aaa"
string.successor("ZZZ9999"); // "AAAA0000"
```

6. Function to search and replace words in a string:

```js
let textOne = "Something Bla <h1> there, something {@} the";
console.log(searchAndReplace(textOne, "Bla", "Bleh")); // Something Bleh <h1> there, something {@} the
console.log(searchAndReplace(textOne, "The", "This")); // Something Bla <h1> there, something {@} This
console.log(searchAndReplace(textOne, "The", "This", false, false)); // Something Bla <h1> Thisre, something {@} This
console.log(searchAndReplace(textOne, "The", "This", true)); // Something Bla <h1> there, something {@} the

let textTwo = "Something 1 £ there, something the";
console.log(searchAndReplace(textTwo, "£", "Bleh", true, true)); // Something 1 Bleh there, something the
console.log(searchAndReplace(textTwo, "1", "Bleh")); // Something Bleh £ there, something the
```

7. Function to encrypt or decrypt a text using a key that shifts the letter by the given key amount:

```js
console.log(cryptoOne("Beta abcde", 1)); // Cfub bcdef
console.log(cryptoOne("Cfub bcdef", -1)); // Beta abcde
console.log(cryptoOne("Beta abcde", 52)); // Beta abcde
console.log(cryptoOne("André Lorenzoni", 102)); // Ylbpŏ Jmpclxmlg
console.log(cryptoOne("Ylbpŏ Jmpclxmlg", -102)); // André Lorenzoni
console.log(cryptoOne("íslenska, Móðir ekki veit ég það", 4)); // ñwpirwoe, Q÷ômv ioom zimx ík Ăeô
console.log(cryptoOne("ñwpirwoe, Q÷ômv ioom zimx ík Ăeô", -4)); // íslenska, Móðir ekki veit ég það
console.log(cryptoOne("Yinelea macı, sürekli dağılımı sağlayarak.", -40)); // Kuzqxqm ymoĉ, eÔdqwxu pm÷ĉxĉyĉ em÷xmkmdmw.
console.log(cryptoOne("Kuzqxqm ymoĉ, eÔdqwxu pm÷ĉxĉyĉ em÷xmkmdmw.", 40)); // Yinelea macı, sürekli dağılımı sağlayarak.
```

8. Function to encrypt or decrypt a text replacing the characters with Amharic characters:

```js
console.log(cryptoTwo("Hello World")); // ሼኘኴኴዀሀቸዀዌኴኔ
console.log(cryptoTwo("ሼኘኴኴዀሀቸዀዌኴኔ")); // Hello World
console.log(cryptoTwo("ሼኘኴኴዀሀቸዀዌኴኔሄ")); // Hello World!
console.log(cryptoTwo("Lorem Ipsum dolor sit ame")); // ቌዀዌኘኸሀቀዄዐዘኸሀኔዀኴዀዌሀዐከዔሀኈኸኘ
console.log(cryptoTwo("ዄቼ")); // pX
```

9. Function to generate text:

```js
console.log(textGenerator(10)); // Aqoagzd ofozqsjz ozjuuezrp aeamao gtosiuz zzodyoddn etsidn oxwvu teygmeo ietaxaqcrv.
```

## Object functions:

10. Function to sort the a given array of objects by a given property value:

```js
var library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  { author: "Suzanne Collins", title: "Mockingjay: The Final Book of The Hunger Games", libraryID: 3245, },
];
console.log(sorted(library, "title")); 
/*[
  { author: 'suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 },
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 }
] */
console.log(sorted(library, "author"));
/* [
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 }, 
  { author: 'suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 },
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 }
] */
console.log(sorted(library, "libraryID"));
/* [
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
  { author: 'suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 },
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 }
] */
```

11. Function to fill an array with values (numeric, string with one character) on supplied bounds:

```js
console.log(num_string_range("a", "z", 2));
// ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
console.log(num_string_range("a", "f", 1)); 
// [ 'a', 'b', 'c', 'd', 'e', 'f' ]
```

12. Function to print all the properties in an JavaScript object:

```js
console.log(all_properties(Math));
["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"]
console.log(all_properties(Array));
["length", "name", "prototype", "isArray", "from", "of"]
```

13. Function to print all the methods in an JavaScript object:

```js
console.log(all_methods(Array));
["isArray", "from", "of"]
console.log(all_methods(Math));
["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc"]

```

14. Function to start a Clock and output every second:

```js
clock();
"14:37:42";
"14:37:43";
"14:37:44";
"14:37:45";
"14:37:46";
"14:37:47";

```
