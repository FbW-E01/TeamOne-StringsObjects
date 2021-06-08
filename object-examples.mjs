git //import functions from index
import { 
    sorted,
    num_string_range,
    all_properties,
    all_methods 
} from "./Object.mjs";

var library = [
    { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
    { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
    {
      author: "Suzanne Collins",
      title: "Mockingjay: The Final Book of The Hunger Games",
      libraryID: 3245,
    },
];

console.log(sorted(library));

console.log(num_string_range("a", "z", 6));

console.log(all_properties(Math));
console.log(all_properties(Array));

console.log(all_methods(Array));
console.log(all_methods(Math));