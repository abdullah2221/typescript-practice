var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 1. Personal Message: Store a person’s name in a variable, and print a message to that person. 
// Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var personName = "helo AbdUllAh";
// 2 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
console.log("Name in Lower Case ".concat(personName.toLocaleLowerCase()));
console.log("Name in Upper Case ".concat(personName.toUpperCase()));
var TitleCase = function (name) {
    var words = name.split(' ');
    var titleCaseWord = words.map(function (word) { return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase(); });
    // const titled= `${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`;
    return titleCaseWord.join(' ');
};
console.log("Name in TitleCase ".concat(TitleCase(personName)));
//3 Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
//  Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log("Albert Einstein once said, \u201CA person who never made a mistake never tried anything new.\"");
//4 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. 
// Then compose your message and store it in a new variable called message. Print your message.
var famous_person = "Albert Einstein";
var message = '"A person who never made a mistake never tried anything new."';
console.log("".concat(famous_person, " once said, ").concat(message));
//5 Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once.
//  Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var withSpaces = "\t \n practice typescript \t \n";
var withOutSpaces = withSpaces.trim();
console.log(withOutSpaces);
//6 Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8.
//  Be sure to enclose your operations in print statements to see the results.
var addition = 4 + 4;
var Subtraction = 12 - 4;
var Multiplication = 4 * 2;
var Division = 32 / 4;
console.log("Addition is ".concat(addition, " , Subtraction id ").concat(Subtraction, ",Multiplication is ").concat(Multiplication, ", Division is ").concat(Division));
//7 You should create four lines that look like this:
// console.log(5 + 3)
console.log(4 + 4);
console.log(12 - 4);
console.log(4 * 2);
console.log(32 / 4);
//8 Favorite Number: Store your favorite number in a variable.
//  Then, using that variable, create a message that reveals your favorite number. Print that message.
var favourite_Number = 27;
console.log("My faourite Number is ".concat(favourite_Number));
//9 Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
//  If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file.
//  Then write one sentence describing what the program does.
var firstName = " Abullah";
var DateNow = new Date();
// This function returns current date & time as milliseconds since January 1, 1970
console.log("".concat(firstName, " and Current Date is ").concat(DateNow.toDateString()));
// this function shows the name is current dat and time is
//10 Names: Store the names of a few of your friends in a array called names.
//  Print each person’s name by accessing each element in the list, one at a time
var arrName = ['ALi', 'Ahmad', "Usman", 'Raza', 'Ahsan'];
console.log("My friends are");
for (var i = 0; i <= arrName.length - 1; i++) {
    console.log("Hello " + arrName[i]);
}
//11 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. 
// The text of each message should be the same, but each message should be personalized with the person’s name.
for (var i = 0; i <= arrName.length - 1; i++) {
    console.log("Hello ".concat(arrName[i], " Have a great day"));
}
//12 Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
//  Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var modeOfTransportations = ['bike', 'car', "Train", 'Bus', 'Rickshaw', 'Cycle'];
modeOfTransportations.forEach(function (vehicle) {
    console.log(" I would like to own a ".concat(vehicle));
});
//13 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
//  Then use your list to print a message to each person, inviting them to dinner.
var guestList = ['Ahmad', 'Ali', "Raza", 'Usman', 'Ahsan'];
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to join us for dinner. It would be an honor to have you at the dinner table.\nLooking forward to meeting you!"));
});
//14 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.   
console.log('Unfortunatly Raza will not be present at the dinner');
var newGuest = 'Bilal';
guestList.splice(2, 1, newGuest);
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to join us for dinner. It would be an honor to have you at the dinner table.\nLooking forward to meeting you!"));
});
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
console.log("Good news! we found a bigger Table now we can accomudate more guests ");
// • Add one new guest to the beginning of your array.
var newGuest1 = 'Adeel';
guestList.unshift(newGuest1); // add Adeel in first position
// • Add one new guest to the middle of your array. 
var newGuest2 = "Mubeen";
guestList.splice(3, 0, "Mubeen");
// • Use append() to add one new guest to the end of your list.
var lastIndex = guestList.push("Kamran") - 1;
//  • Print a new set of invitation messages, one for each person in your list.
console.log("Second Set of Invitations to Dinner:");
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to join us for dinner. It would be an honor to have you at the dinner table.\nLooking forward to meeting you!"));
});
//15 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
console.log('Sorry Guys! Table will not be availble at time So, we will dinner at onther day');
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
for (var i = guestList.length - 1; i >= 2; i--) {
    var removedGuest = guestList.pop();
    console.log("".concat(removedGuest, " is sorry but he/she cannot make it due Some Issue"));
}
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
guestList.forEach(function (guest) {
    console.log("".concat(guest, " you are invted at the party"));
});
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
console.log("party ends...!");
guestList.pop();
guestList.pop();
console.log(guestList);
//17 Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
var arrLocation = ['England', 'Canada', "Aus", 'Ind', 'Swetzerland', "Germany"];
// • Print your array in its original order.
console.log(arrLocation);
// • Print your array in alphabetical order without modifying the actual list.
var sortedArr = arrLocation.slice().sort(); //using set and sort
console.log(sortedArr);
// • Show that your array is still in its original order by printing it.
console.log(arrLocation);
// • Print your array in reverse alphabetical order without changing the order of the original list.
var reversedSortedArray = arrLocation.slice().reverse();
console.log(reversedSortedArray);
// • Show that your array is still in its original order by printing it again.
console.log(arrLocation);
// • Reverse the order of your list. Print the array to show that its order has changed.
arrLocation.reverse();
console.log(arrLocation);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
arrLocation.reverse();
console.log(arrLocation);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
arrLocation.sort();
console.log(arrLocation);
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
arrLocation.reverse();
console.log(arrLocation);
//18 Dinner Guests: Working with one of the programs from Exercises 14 through 18,
//  print a message indicating the number of people you are inviting to dinner
console.log('Exersise 19 Nummber of guest');
var guestList1 = ['Ahmad', 'Ali', "Raza", 'Usman', 'Ahsan'];
guestList1.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to join us for dinner. It would be an honor to have you at the dinner table.\nLooking forward to meeting you!"));
});
var numberOfGuests = guestList1.length;
console.log(numberOfGuests);
//20 Think of something you could store in a array.
// For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var listofLocations = ['K2', "saif ul Malook", "Badshahi Mosque", "Minaar e Pakista", "Taj Mahal"];
console.log('Some Beautiful Locations');
listofLocations.forEach(function (loc) {
    console.log(loc);
});
var countries = [
    {
        name: "India",
        capital: "New Delhi",
    },
    {
        name: "Pakistan",
        capital: "Islamabad"
    },
    {
        name: "China",
        capital: "Beijing",
    },
    {
        name: "Bangladesh",
        capital: "Dhaka"
    }
];
console.log('name of Countries');
countries.forEach(function (country) {
    console.log(country);
});
//22 Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
//  Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
console.log(" Guest list are ".concat(guestList1));
guestList[3] = "Abu Bakar";
guestList.forEach(function (guest) {
    console.log("".concat(guest, "\n"));
});
//23 Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
console.log('Exersice 23');
//Task 1 
var car = 'sabaru';
console.log('Is car == subaru');
console.log(car == 'sabaru');
// Task 2
var firstName1 = "AHmad";
console.log('is Name is  == AHmad');
console.log(firstName1 == 'AHmad');
//Task 3
var age1 = 25;
console.log("is age is > 10");
console.log(age1 > 10);
//Task 4
var fruits = ['Apple', 'Bannana', "Gauve", "Mango"];
console.log("is Fruits array lenth = 4");
console.log(fruits.length === 4);
//Task 5
var rainyWeather = true;
console.log("Is it rainy weather i Predict True");
console.log(rainyWeather === true);
// Task 6
var temperature = 40;
console.log("is temperature is Less than 30");
console.log(temperature < 30);
// Task7
var Day = "Thursday";
console.log("is that today is 1 Monday?");
console.log(Day === "Monday");
// Task 8
var Time = 'AfterNoon';
console.log('is now time is Morning');
console.log(Time === "Morning");
//Task 9
var Even = 8 % 2 === 0;
console.log("is that even Number i predict false");
console.log(Even === false);
// Task 10
var number = -45;
console.log('is that number is postive');
console.log(number >= 0);
//Exersise 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
console.log("Exersice 24");
var fruit = "Mango";
console.log("is fruit Mango == Apple");
console.log(fruit == "Apple");
console.log("is fruit Mango is not equalt to Apple");
console.log(fruit != 'Apple');
// • Tests using the lower case function
var text = " My name is Abdullah";
console.log(" change the text to lower case");
console.log(text.toLowerCase());
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 23;
var num2 = 32;
console.log("Check that these two number are equal ");
console.log(num1 === num2);
console.log("Check that these two number are not equal each other");
console.log(num1 != num2);
console.log("Check that numb1 is greater than num2");
console.log(num1 > num2);
console.log("Check that numb1 is less than num2");
console.log(num1 < num2);
console.log("Check that numb1 is greater than and equal num2");
console.log(num1 >= num2);
console.log("Check that numb1 is less than or equal num2");
console.log(num1 <= num2);
// • Tests using "and" and "or" operators
var Age = 25;
var isStudent = true;
console.log("is age is greater than 18 and Student; i predict ture");
console.log(Age > 18 && isStudent);
console.log('is age greater than 30 or is student, i predict true');
console.log(Age > 30 || isStudent);
// • Test whether an item is in a array
console.log(fruits);
console.log("is Bannana include in fruits array");
console.log(fruits.indexOf('Bannana') !== -1);
// • Test whether an item is not in a array
console.log('Is grpes in the array of fruits');
console.log(fruits.indexOf("Grapes") !== -1);
// 25 Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
console.log("Exersice 25");
var alien_color = "green";
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
if (alien_color == "green") {
    console.log("The Player just earned 5 points");
}
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
alien_color = "red";
if (alien_color == "green") {
    console.log("The Player just earned 5 points");
}
//26 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
console.log("Exersice 26");
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
if (alien_color == 'green') {
    console.log('The player Just earned 5 points for Shooting');
}
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
if (alien_color !== 'green') {
    console.log("The Player Just earned 10 points");
}
// • Write one version of this program that runs the if block and another that runs the else block.
alien_color = 'yellow';
if (alien_color === 'green') {
    //run first condition
    console.log("The Player Just earned 10 points");
}
else {
    console.log("The Player Just earned 10 points");
}
//27 Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
console.log("Exersice 27");
// • If the alien is green, print a message that the player earned 5 points.
if (alien_color === 'green') {
    console.log("the player just got 5 points");
}
// • If the alien is yellow, print a message that the player earned 10 points.
else if (alien_color === 'yellow') {
    console.log("the player just got 10 points");
}
// • If the alien is red, print a message that the player earned 15 points.
else if (alien_color === 'red') {
    console.log("the player just got 15 points");
}
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
//28 Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
console.log("Exersice 28");
var age = 19;
// • If the person is less than 2 years old, print a message that the person is a baby.
if (age < 2) {
    console.log('He is a nice baby');
}
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler");
}
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (age >= 4 && age < 13) {
    console.log('The person is a Kid');
}
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (age >= 13 && age < 20) {
    console.log('The person is a teenager');
}
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
else if (age >= 20 && age < 65) {
    console.log('The person is an Adult');
}
// • If the person is age 65 or older, print a message that the person is an elder
else if (age >= 65) {
    console.log('The person is a Elder');
}
//29 Favorite Fruit: Make a array of your favorite fruits, and 
// then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
var favorite_fruits = ['apple', 'banana', 'mango']; // Change the fruits as per your favorites.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
if (favorite_fruits.indexOf('apple') !== -1) {
    console.log("You really like apples!");
}
if (favorite_fruits.indexOf('banana') !== -1) {
    console.log("You really like bananas!");
}
if (favorite_fruits.indexOf('mango') !== -1) {
    console.log("You really like mangoes!");
}
if (favorite_fruits.indexOf('orange') !== -1) {
    console.log("You really like oranges!");
}
if (favorite_fruits.indexOf('grapes') !== -1) {
    console.log("You really like grapes!");
}
//30 Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
console.log('Exersise 30');
var userNames = ['user1', 'user2', 'user3', 'admin', 'user4', 'user5', 'user6', 'user7'];
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
userNames.forEach(function (username) {
    if (username === "admin") {
        console.log("Helo ".concat(username, ",welcome back! You have admin privileges."));
    }
    // • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
    else {
        console.log("Helo ".concat(username, ",Thank you for Logging Again"));
    }
});
//31 No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
console.log("Exersice 31");
if (userNames.length === 0) {
    console.log("We Need To Find Some User!");
}
else {
    userNames.forEach(function (username) {
        if (username === "admin") {
            console.log("Helo ".concat(username, ",welcome back! You have admin privileges."));
        }
        // • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
        else {
            console.log("Helo ".concat(username, ",Thank you for Logging Again"));
        }
    });
}
// • Remove all of the usernames from your array, and make sure the correct message is printed.
userNames.splice(0);
if (userNames.length === 0) {
    console.log("We Need To Find Some User!");
}
//32 Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
console.log('Exersise 32');
// • Make a list of five or more usernames called current_users.
var currentUsers = ['john', 'jane', 'bobby', 'mary', 'david'];
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
var new_users = ['john', 'Sarah', 'jane', 'Alex', 'Linda'];
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
function isUserNameTake(username) {
    return currentUsers.some(function (user) { return user.toLowerCase() === username.toLowerCase(); });
}
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
new_users.forEach(function (username) {
    if (isUserNameTake(username)) {
        console.log("Sorry, the username '".concat(username, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username '".concat(username, "' is available."));
    }
});
//33 Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
console.log("Exersise 33");
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var Oridnal = function (num) {
    if (num === 1) {
        return "st";
    }
    else if (num === 2) {
        return "nd";
    }
    else if (num === 3) {
        return "rd";
    }
    else {
        return "th";
    }
};
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
numbers.forEach(function (num) {
    console.log("".concat(num).concat(Oridnal(num)));
});
//38 Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
console.log("Exersise 38");
var Pizzas = ['Margherita', 'Pepperoni', 'BBQ Chicken'];
for (var i = 0; i <= Pizzas.length - 1; i++) {
    console.log(Pizzas[i]);
}
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
//  For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza
console.log("Adding Sentence about each pizza");
for (var i = 0; i <= Pizzas.length - 1; i++) {
    console.log("I Like ".concat(Pizzas[i], " Pizzaa"));
}
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza.
//  The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
console.log("I really love Pizza");
//35 Animals: Think of at least three different animals that have a common characteristic. 
console.log(" Exersise 35");
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
var Animals = ['Dog', 'Cat', "Rabit"];
for (var i = 0; i <= Animals.length - 1; i++) {
    console.log(Animals[i]);
}
//  • Modify your program to print a statement about each animal, such as A dog would make a great pet.
console.log("Adding Sentence about each Animals");
for (var i = 0; i <= Animals.length - 1; i++) {
    console.log("A ".concat(Animals[i], " would make a great pet"));
}
//   • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
console.log(" Any of these animals would make a great pet!");
//36 T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
//  The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
var make_shirt = function (size, msg) {
    console.log("Size: ".concat(size, ", Message :").concat(msg));
};
make_shirt("M", "Its Fit At me");
//37 Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt1(size, message) {
    var shirtSize = size || "large";
    var shirtMessage = message || "I love TypeScript";
    console.log("Size: ".concat(shirtSize, ", Message: ").concat(shirtMessage));
}
make_shirt1();
// Output Size: large , Message I Love Typescript
make_shirt1("Medium");
//Output Size Medium, Message: I love TypeScript
make_shirt1("Small", " Hello Piaic");
//38 Cities: Write a function called describe_city() that accepts the name of a city and its country.
//   The function should print a simple sentence, such as Karachi is in Pakistan.
//   Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
console.log("Exersise No 38");
var describe_city = function (city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
};
describe_city("fsd", "India");
describe_city("Lahore");
describe_city("paris", "USA");
//39 City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
console.log("Exersise 39");
var city_country = function (city, country) {
    return "\"".concat(city, ",").concat(country, "\"");
};
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
console.log(city_country('Faislabad', "Pakistan"));
console.log(city_country('Paris', "USA"));
console.log(city_country('LONDON', "UK"));
//40 Album: Write a function called make_album() that builds a Object describing a music album.
// The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
// Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. 
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
// If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
console.log("Exersice 40");
var make_album = function (artist, title, track) {
    return { artist: artist, title: title, track: track };
};
var album1 = make_album('song', 'tu ht', 2);
var album2 = make_album('song2', 'song', 3);
var album3 = make_album('song3', 'song', 4);
console.log(album1);
console.log(album2);
console.log(album3);
//41 Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.
console.log("Exersice 41");
var show_magicians = function (magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
};
var Magicians = ['magician1', 'magician2', 'magician3', 'magician4', 'magician5'];
show_magicians(Magicians);
//42 Great Magicians: Start with a copy of your program from Exercise 39.
//  Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
//   Call show_magicians() to see that the list has actually been modified.
var make_great = function (magician) {
    magician.forEach(function (magic) {
        console.log("Great ".concat(magic));
    });
};
show_magicians(Magicians);
make_great(Magicians);
//43 Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
//  Because the original array will be unchanged, return the new array and store it in a separate array.
//   Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var make_great1 = function (magician) {
    var greatMagicians = [];
    magician.forEach(function (magic) {
        greatMagicians.push("Great".concat(magic, " "));
    });
    return greatMagicians;
};
show_magicians(Magicians);
var GreatMagicians = make_great1(__spreadArray([], Magicians, true));
show_magicians(Magicians);
show_magicians(GreatMagicians);
//44 Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides,
// and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
var orderSandwitch = function (items) {
    console.log('Sandwich order with these items');
    items.forEach(function (item) {
        console.log(item);
    });
    console.log(' Enjoy Sandwich');
};
orderSandwitch(['cheese', 'bbq', 'thing3']);
orderSandwitch(['cheese1', 'bbq2', 'thing2']);
orderSandwitch(['cheese2', 'bbq3', 'thing1']);
