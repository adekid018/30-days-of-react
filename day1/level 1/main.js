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