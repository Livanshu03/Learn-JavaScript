// understanding of const , let , var

const userId = 110 // once declared cann't be changed also need to be intialized when declared
const userName = "Livanshu"


var userEmail = "xyz@google.com" // this can be changed but it doesn't follow the scope i.e. if we change the variable in the block it will change it everywhere


let userPass = "1we2" //this can be changed and it also follows the scope


userCity = "Indore" // in js we can also simply write the variable name directly but intialization in neccassary in such way


let userPincode // intially not defined so it store 'undefined' in it


console.table([userId , userName , userEmail , userPass , userCity , userPincode])
/*
this is how console.table show output
┌─────────┬──────────────────┐
│ (index) │      Values      │
├─────────┼──────────────────┤
│    0    │       110        │
│    1    │    'Livanshu'    │
│    2    │ 'xyz@google.com' │
│    3    │      '1we2'      │
│    4    │     'Indore'     │
│    5    │    undefined     │
└─────────┴──────────────────┘
*/


userEmail ="wxt@gmail.com" // changing the var variable
userPass = "1eje" // changing the let variable
userCity = "kota"
userPincode = 454552
console.table([userId , userName , userEmail , userPass , userCity , userPincode])