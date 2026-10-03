// WE WILL STUDY STRINGS IN JS

let name = "livanshu"
let repoCount = 1

console.log("my name is " + name + " and my repocount is " + repoCount ) // this is way of srting concatetnation
// output => my name is livanshu and my repocount is 1 {but this is not good way of presentation and readability}

// so we use backticks and string interpolation 
// backticks = ` `
// In string interpolation we create place holders and thier we can directly inject the value of variable 
// place holders = ${} in between curly braces we put the name of variable
// this string interpolation is prefered bcoz we directly can use method in log statement for example => ${name.toUpperCase()}

console.log(`my name is ${name.toUpperCase()} and my repocount is ${repoCount}`)
// output => my name is LIVANSHU and my repocount is 1