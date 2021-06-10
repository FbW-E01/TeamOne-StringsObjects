//import functions from Object.mjs

import {
    sorted,
    num_string_range,
    all_properties,
    all_methods,
    clock,
} from "./Object.mjs";
/*
 
   _  ___  
  / |/ _ \ 
  | | | | |
  | | |_| |
  |_|\___/ 
           
 
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
 
   _   _ 
  / | / |
  | | | |
  | | | |
  |_| |_|
         
 
*/
console.log(num_string_range("a", "z", 6));
/*
 
   _ ____  
  / |___ \ 
  | | __) |
  | |/ __/ 
  |_|_____|
           
 
*/
console.log(all_properties(Math));
console.log(all_properties(Array));
/*
 
   _ _____ 
  / |___ / 
  | | |_ \ 
  | |___) |
  |_|____/ 
           
 
*/
console.log(all_methods(Array));
console.log(all_methods(Math));
/*
 
   _ _  _   
  / | || |  
  | | || |_ 
  | |__   _|
  |_|  |_|  
            
 
*/
clock();
