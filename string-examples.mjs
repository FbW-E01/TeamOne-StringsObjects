// import functions from String.mjs

import {
    truncate,
    alphabetize_string,
    ascii_to_hex,
    humanize,
    successor,
    searchAndReplace,
    cryptoOne,
    cryptoTwo,
} from "./String.mjs";

/*
 
   _ 
  / |
  | |
  | |
  |_|
     
 
*/

const str1 = "The quick brown fox jumps over the lazy dog";
const str2 = "Hello World";

console.log(truncate(str1)); // => "The quick brown fox jumps over the lazy…"
console.log(truncate(str2)); // => "Hello World"
console.log(truncate(str1, 3)); // => "The quick brown…"
console.log(truncate(str1, 5)); // => "The quick brown fox jumps…"

/*
 
   ____  
  |___ \ 
    __) |
   / __/ 
  |_____|
         
 
*/

console.log(alphabetize_string("United States"));
console.log(alphabetize_string("United kingdom"));

/*
 
   _____ 
  |___ / 
    |_ \ 
   ___) |
  |____/ 
         
 
*/

console.log(ascii_to_hex("12")); // => 3132
console.log(ascii_to_hex("100")); // => 313030
console.log(ascii_to_hex("🧐")); // => 1f9d0ddd0;
console.log("\u{1f9d0}"); // => 🧐

/*
 
   _  _   
  | || |  
  | || |_ 
  |__   _|
     |_|  
          
 
*/

console.log(humanize(10));
console.log(humanize(3));
console.log(humanize(12n));
console.log(humanize('3rd'));

/*
 
   ____  
  | ___| 
  |___ \ 
   ___) |
  |____/ 
         
 
*/

console.log(successor("abcd"));
console.log(successor("THX1138"));
console.log(successor("< >"));
console.log(successor("1999zzz"));
console.log(successor("ZZZ9999"));

/*
 
    __   
   / /_  
  | '_ \ 
  | (_) |
   \___/ 
         
 
*/

let textOne = "Something Bla <h1> there, something {@} the";
let textTwo = "Something 1 £ there, something the";

console.log(searchAndReplace(textOne, "Bla", "Bleh"));
console.log(searchAndReplace(textOne, "The", "This"));
console.log(searchAndReplace(textOne, "The", "This", false, false));
console.log(searchAndReplace(textOne, "the", "This", true, true));
console.log(searchAndReplace(textOne, "bla", "bleh", true, true));
console.log(searchAndReplace(textOne, "Bla", "Bleh", true, true));
console.log(searchAndReplace(textTwo, "£", "Bleh", true, true));
console.log(searchAndReplace(textTwo, "!", "Bleh"));
console.log(searchAndReplace(textTwo, "1", "Bleh")); 

/*
 
   _____ 
  |___  |
     / / 
    / /  
   /_/   
         
 
*/

console.log(cryptoOne("Beta abcde", 1));
console.log(cryptoOne("Cfub bcdef", -1));
console.log(cryptoOne("Beta abcde", 52));
console.log(cryptoOne("André Lorenzoni", 102));
console.log(cryptoOne("Ylbpŏ Jmpclxmlg", -102));
console.log(cryptoOne("íslenska, Móðir ekki veit ég það", 4));
console.log(cryptoOne("ñwpirwoe, Q÷ômv ioom zimx ík Ăeô", -4));
console.log(cryptoOne("Yinelea macı, sürekli dağılımı sağlayarak.", -40)); 
console.log(cryptoOne("Kuzqxqm ymoĉ, eÔdqwxu pm÷ĉxĉyĉ em÷xmkmdmw.", 40)); 

/*

   ___  
  ( _ ) 
  / _ \ 
 | (_) |
  \___/ 
        

*/

console.log(cryptoTwo("Hello world"));
console.log(cryptoTwo("ሸጀፈፈኟዟጿኟዷፈደ", true));
console.log(cryptoTwo("Lorem Ipsum dolor sit ame."));
console.log(cryptoTwo("ቯኟዷጀፐዟቀኧጇጯፐዟደኟፈኟዷዟጇጰጧዟዠፐጀ?", true));