/**
 * Arrays
 * 
 * always use camel case where needed
 * 
 * Make sure to write the question/instruction and then the answers below
 * 
 */

/**
 * Question 5 - concat two different arrays by using .concat() method
 * initialise a variable called people to the array using the names marlowe, brian, and kenny
 *  initialise another variable called people two to the array using the names deluka and jennica 
 * console log the variable people and concat people two to it
 */

var people = ["marlowe", "brian", "kenny"];
var peopleTwo = ["deluka", "jennica"];

console.log(people.concat(peopleTwo));




/**
 * Question 6 - create a 2 dimensions array that is 2-by-4. Grab some values out of this array to create a sentence using concatenation.
 * initialise the variable called favourite food to an empty array
 * create a 2D array by puuting these values in this order:
 *  in the 0th position put salmon, tuna, mackerol, and koi
 * in the 1th position put cooked, raw, steamed, and fresh
 * console log the sentence using concatination to say: My favourite food it _salmon_ but only when it is _raw_
 */

var favouriteFood = [
    ["salmon", "tuna", "mackerol", "koi"],
    ["cooked", "raw", "steamed", "fresh"]
]

console.log("My favourite food is " + favouriteFood[0][0] + " but only when it is " + favouriteFood[1][1]);
