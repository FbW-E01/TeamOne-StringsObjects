//import functions from Object.mjs

import {
    sorted,
    num_string_range,
    all_properties,
    all_methods,
    clock,
} from "./Object.mjs";
/*
 
   _____ 
  |___  |
     / / 
    / /  
   /_/   
         
 
*/
var library = [
    { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
    { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
    {
        author: "suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        libraryID: 3245,
    },
];

console.log(sorted(library, "title"));
console.log(sorted(library, "author"));
console.log(sorted(library, "libraryID"));
/*
 
    ___  
   ( _ ) 
   / _ \ 
  | (_) |
   \___/ 
         
 
*/
console.log(num_string_range("a", "z", 6));
/*
 
    ___  
   / _ \ 
  | (_) |
   \__, |
     /_/ 
         
 
*/
console.log(all_properties(Math));
console.log(all_properties(Array));
/*
 
   _  ___  
  / |/ _ \ 
  | | | | |
  | | |_| |
  |_|\___/ 
           
 
*/
console.log(all_methods(Array));
console.log(all_methods(Math));
/*
 
   _   _ 
  / | / |
  | | | |
  | | | |
  |_| |_|
         
 
*/
clock();
