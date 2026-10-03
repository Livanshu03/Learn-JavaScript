let name = "livanshu" // simple way to define the stirng

let surname = new String('kushwah') // this is another method to declare string using new keyword 

// In above method it takes string as an object and it also create a key value pair for each character 
// like this ->
// 0 : "k" = -7 <-- negative index
// 1 : "u" = -6
// 2 : "s" = -5
// 3 : "h" = -4
// 4 : "w" = -3
// 5 : "a" = -2
// 6 : "h" = -1


 console.log(surname[5]) // accessing the key value pair

// MEHTODS OF STRING    
console.log(surname.length) // o/p = 7
console.log(surname.toUpperCase()) // o/p = KUSHWAH
console.log(surname.toLowerCase()) // o/p = kushwah
console.log(surname.charAt(4)) // o/p = w
console.log(surname.indexOf('u')) // o/p = 1

let newName = name.substring(0 , 4) // creates a new string from index 0 to index 3 ending index 4 is not taken in o/p , not take negative index
console.log(newName) // o/p = liva

let anotherName = surname.slice(-6 , 4) // creates a string that starts from -6 index that is 1 index and end with index 3 ending index 4 is not taken in o/p
// slice method can take negative index also
console.log(anotherName) // o/p = ush


let newValue = "    Livanshu   "
console.log(newValue.trim()) // removes the starting and ending spaces
// o/p = Livanshu

let url = "https://livanshu#kushwah.com"
console.log(url.replace('#' , '-')) // it replaces the '#' with '-'
// o/p = https://livanshu-kushwah.com
