import countries from '../level 2/countries.js'
//Q1 The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]  - Sort the array and find the min and max age - Find the median age(one middle item or two middle items divided by two) - Find the average age(all items divided by number of items) - Find the range of the ages(max minus min) - Compare the value of (min - average) and (max - average), use abs() method
let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages=ages.sort()

let maxAge=Math.max(...ages)
let minAge=Math.min(...ages)
console.log(ages);
let median = Math.floor(ages.slice((ages.length-1)/2,((ages.length-1)/2)+1)/2)
let average= ages.reduce((acc,ini)=>{
    return acc+ini
    
},0)
let range=maxAge-minAge
let absvalue=Math.abs(minAge-maxAge)

//Question 1a Slice the first ten countries from the countries array
console.log(countries);
let firstTenCountries=countries.slice(0,10)
console.log(firstTenCountries);

let middleCountry=countries.slice(Math.floor((countries.length-1)/2),(((countries.length-1)/2)+1))
console.log(middleCountry);
let firstCountries=countries.slice(0,6)
let secondCountries=countries.slice(6,countries.length)
console.log(firstCountries);
console.log(secondCountries);