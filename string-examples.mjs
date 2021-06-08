//import functions from String.mjs

import {
    truncate,
    alphabetize_string,
    ascii_to_hex,
    humanize,
} from "./String.mjs";
import {} from "./String.mjs";

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

console.log(humanize(0));
// console.log(humanize(12n));

/*
 
   ____  
  | ___| 
  |___ \ 
   ___) |
  |____/ 
         
 
*/

console.log(successor("abcd")); // "abce"
console.log(successor("THX1138")); // "THX1139"
console.log(successor("< >")); // "< >"
console.log(successor("1999zzz")); // "2000aaa"
console.log(successor("ZZZ9999")); // "AAAA0000"
