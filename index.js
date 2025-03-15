// Problem 1: 

//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93] 

// Programmatically subtract the value of the first element in the array from the value in the last element of the array.
// ages[7] - ages[0] is not allowed!

const age =  ages [1] - ages[ages.length - 1]
console.log(age);

// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

ages.push(11);
console.log(ages);

// and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
const verify = ages [1] - ages[ages.length - 1]
console.log(verify);

// Use a loop to iterate through the array and calculate the average age. 

const avgAge = ages [0] + ages [1] + ages [2] + ages [3] + ages [4] + ages [5]+ ages [6] + ages [7]  / ages.length;
console.log(avgAge);






// Problem 2:
//Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//Use a loop to iterate through the array and calculate the average number of letters per name. 23 letters, 6 names
let totalLetters = 23;
let numNames = 6;
for (let i = 0; i < names.length; i++) { // Making it print out in a list.
 totalLetters += names[i].length;
 numNames++; 
} 

//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

const allNames = names [0] + " " + names [1] + " " + names [2] + " " + names [3] + " " + names [4] + " " + names [5];
console.log(allNames);





// Problem 3: How do you access the last element of any array?
let array = ["Ohio State", "Texas Tech", "Michigan"];
const newArray = array.pop();
console.log(array);

// OR

array [2] = 'Notre Dame'
console.log(array);

// OR

array.unshift("Boise St", "Oregon", "Penn State")
console.log(array);




// Problem 4: How do you access the first element of any array?

let firstElement = [0, 1, 2, 3, 4, 5];

firstElement [0] = 23;
console.log(firstElement);

//OR

firstElement.shift();
console.log(firstElement);






// Problem 5: 
//Create a new array called nameLengths. 
let nameLengths = [3, 5, 3, 4, 3];

// Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
const updatedArray = names + nameLengths; 
console.log(updatedArray);







// Problem 6: Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

let sum = nameLengths [0] + nameLengths[1] + nameLengths[2] + nameLengths[3] + nameLengths[4];
console.log(sum);






//Problem 7: Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.

let func = "Ohio State 24'"; {
    func++;
} 
console.log(func);





// Problem 8: Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.

let firstName = 'Cartier';
let lastName = 'Dolph';
let fullName = firstName + ' ' + lastName;
console.log(fullName);






// Problem 9: Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

const array2 = [23, 45, 9, 6, 11, 10, 2];
const arraySum = array2 [0] + array2 [1] + array2 [2] + array2 [3] + array2 [4] + array2 [5] + array2 [6];{
    if (arraySum >= 100) {
        console.log('True');
    } else {
        console.log('False');
    }
}






// Problem 10: Write a function that takes an array of numbers and returns the average of all the elements in the array.

let favNumbers = [2, 9, 11, 23, 66, 99];
const avgFavNums = favNumbers [0] + favNumbers [1] + favNumbers [2] + favNumbers [3] + favNumbers [4] + favNumbers [5] / favNumbers.length;
console.log(avgFavNums);






// Problem 11: Write a function that takes two arrays of numbers 

let myArray1 = [11,23,9];
let myArray2 = [10,66,99];

// and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
{   const modifyArray1 = myArray1 [0] + myArray1 [1] + myArray1 [2] / myArray1.length;
    const modifyArray2 = myArray2 [0] + myArray2 [1] + myArray2 [2] /myArray2.length;
if (modifyArray1 > modifyArray2) {
    console.log("True");
} else if (modifyArray1 < modifyArray2) {
    console.log("False")
}
};






// Problem 12: Write a function called willBuyDrink that takes a boolean isHotOutside
const isHotOutside = 85;
const moneyInPocket = 20;

let willBuyDrink = true; {
if (isHotOutside > 80) {
} else if (moneyInPocket > 10.5);
} 
console.log(willBuyDrink);






//Problem 13: Create a function of your own that solves a problem & in comments, write what the function does and why you created it.

let animeHairColor = ["Black","Red","Blue","Pink", "Green","Purple"]; // Different Hair Colors for Anime Characters
let animeHairStyle = ["Spikey","Long Braids","Slick","Emo","Sporty",]; // Different Hair Styles for Anime Characters
let animeNames = ["Sora","Akio","Akira","Ritsu", "Yuna", "Rin", "Hina"]; // List of Names for Anime Characters
let animeGenders = ["Boy","Girl"]; // Genders
let animeBodyType = ["Warrior", "Mage", "Assassin", "Sorcerer"]; // Different Attributes and Skill Sets for Anime Characters // Randomly choose a Hair Color for Anime Character

function generateAnimeCharacter () {
    let hair = 
    animeHairColor[Math.floor(Math.random() * animeHairColor.length)]; // Randomize Hair Color
    let hairStyle = 
    animeHairStyle[Math.floor(Math.random() * animeHairStyle.length)]; // Randomize Hair Style
    let name = 
    animeNames[Math.floor(Math.random() * animeNames.length)]; //Randomize Names
    let gender = 
    animeGenders[Math.floor(Math.random() * animeGenders.length)]; // Randomize
    let bodyType = 
    animeBodyType[Math.floor(Math.random() * animeBodyType.length)];  
    
    let animeCharacter = {
        hair: hair,
        hairStyle: hairStyle,
        name: name,
        gender: gender,
        bodyType: bodyType
    };
    return animeCharacter;
}

console.log(generateAnimeCharacter());

