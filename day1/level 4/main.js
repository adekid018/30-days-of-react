// Question 1 Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let agePrompt=window.prompt("Enter your age")
agePrompt>18? console.log("You are old enough to drive"):console.log(`You are left with ${Math.abs(agePrompt-18)} years to drive.`)

//Question 2 Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let myAge=21
agePrompt>myAge?console.log(`You are older than me by ${Math.abs(agePrompt-myAge)}`):console.log(`I am older than you with ${Math.abs(agePrompt-myAge)}`);

//Question 3 If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways
let a=10
let b=20
a>b?a:b
if(a>b){
    return a
}
else{
    return b
}

//Question 4 Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?