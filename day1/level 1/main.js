// Level 1

//Question 1 Declare an empty array;
let emptyArray=[]

//Question 2 Declare an array with more than 5 number of elements
let arrayOfFive=[5,2,3,4,5,6,8]

//Question 3 Find the length of your array
console.log(arrayOfFive.length);

// Question 4 Get the first item, the middle item and the last item of the array
let firstItem=arrayOfFive.slice(0,1)
let middleItem=arrayOfFive[3]
let lastItem=arrayOfFive.slice(arrayOfFive.length-1)
console.log(firstItem,middleItem,lastItem);
// Question 5 Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes=[0,0.5,"ase",'a',{
    name:"ase"
}]
console.log(mixedDataTypes);

// Question 6 Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies=["Facebook", "Google", "Microsoft", "Apple", "IBM" ,"Oracle" ,"Amazon"]

// Question 7 Print the array using console.log()
console.log(itCompanies);

// Question 8 Print the number of companies in the array
console.log(itCompanies.length);

// Question 9 Print the first company, middle and last company
firstItem=itCompanies.slice(0,1)
middleItem=itCompanies.slice(4,1)
lastItem=itCompanies.slice(itCompanies.length-1)

// Question 10 Print out each company
for (const a of itCompanies) {
    console.log(a);
}
// Question 11 Change each company name to uppercase one by one and print them out
for (const a of itCompanies) {
    console.log(a.toUpperCase());
}

// Question 12 Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(", "));

// Question 13 Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
console.log(itCompanies.includes("ase")?"ase":"is not found")

// Question 14 Filter out companies which have more than one 'o' without the filter method
for (let a = 0; a < itCompanies.length; a++) {
        if(itCompanies[a].includes("oo")){
            console.log(itCompanies[a]);
    }
}
// Question 15 Sort the array using sort() method
console.log(itCompanies.sort());

//Question 16 Reverse the array using reverse() method
console.log(itCompanies.reverse());

//Question 17 Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3));

//Question 18 Slice out the last 3 companies from the array
console.log(itCompanies.slice(4,itCompanies.length));

//Question 19 Slice out the middle IT company or companies from the array
let middle_element=Math.floor(itCompanies.length/2)
console.log(middle_element);
console.log(itCompanies.slice(middle_element,4));

//Question 20 Remove the first IT company from the arra
console.log(itCompanies.shift());

//Question 21 Remove the middle IT company or companies from the array
console.log(itCompanies.splice(middle_element,1));

//Question 22 Remove the last IT company from the array
console.log(itCompanies.pop());

//Question 23 Remove all IT companies
let Remove=itCompanies.splice()
console.log(Remove);