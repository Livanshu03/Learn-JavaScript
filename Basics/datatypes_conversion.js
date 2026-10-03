// IN THIS WE WILL SEE TYPE CONVEERSION 

// when string is converted in to number 
let score = "33abc"  // it is an string 

let valueInNumber = Number(score) // it converts the score variable which is string into number
console.log(typeof(valueInNumber)) // here type of "valueInNumber" variable is "number"  
console.log(valueInNumber) // it gives output as "NaN" which means "not in number"

// if boolean is converted into number it gives 1 for true and 0 false
// undefined => NaN
// null => 0 when converted to number 


let value = "livanshu" // string value 
let valueInBoolean = Boolean(value) // string converted to boolean
console.log(typeof(valueInBoolean))
console.log(valueInBoolean)
// "" => this empty string when converted into boolean it gives "false"
// "livanshu" => string gives "true" when converted into boolean
// 1 => true
// 0 => false
