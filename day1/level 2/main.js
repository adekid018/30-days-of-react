//Question1 Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file
import countries from "./countries.js";
import webTechs from "./web_techs.js";
console.log(countries);
console.log(webTechs);

//Question 2 First remove all the punctuations and change the string to array and count the number of words in the array
let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
text= text.replaceAll(",","")
text= text.replaceAll(".","")
text= text.split(" ")
console.log(text)

//Question 3 In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift("Meat")
shoppingCart.push("Sugar")
shoppingCart.splice(4,5)
shoppingCart[2]="Green Tea"
console.log(shoppingCart);

//Question 4 In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
countries.includes("Ethiopia")?console.log("Ethiopia"):console.log(countries);

//Question 5 In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
webTechs.includes("Sass")?console.log("Sass"):console.log(webTechs);

//Question 6 Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack=frontEnd.concat(backEnd)
console.log(fullStack)

