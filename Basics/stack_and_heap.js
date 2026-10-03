// we will study the concept of memory in JS

// 1st Stack memory => premitive data types

// In stack memory all the premitive data types are stored i.e they follow call by value in this a copy is shared not the actual value or (reference)

let num1 = 365436 // original value
let num2 = num1 //copy of num1 is passed in num2

num2 = 1 // changes are made in copy of num1 
console.log("num1 = " + num1)
console.log("num2 = " + num2)

// output ->
// num1 = 365436
// num2 = 1


// 2nd Heap memory => non premitive data types

// In heap memory all the non premitive data types are stored i.e. they follow call by reference in this actual data is passsed i.e. they will have same refernce 

let obj1 = {  // original value , here obj1 is an object
    name : "Livanshu",
    email : "xyz@google.com"
}

let obj2 = obj1 // the original value is shared i.e. they both object refer to same location in memory

obj2.email = "wxu@gmail.com" // changes will affect both obj

console.log("eamil of obj1 = " + obj1.email)
console.log("eamil of obj2 = " + obj2.email)

// // output->
// eamil of obj1 = wxu@gmail.com
// eamil of obj2 = wxu@gmail.com
