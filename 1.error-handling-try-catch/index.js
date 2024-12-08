'use strict'
// num = 1
// throw new ReferenceError("num is not defined")

// console.log(Error.prototype === ReferenceError.prototype.__proto__);
// console.log(Error.prototype.__proto__ === Object.prototype);


// function fnA() {
//     fnB()
// }
// function fnB() {
//     fnC()
// }
// function fnC() {
//     undefinedFunction()
// }

// try {
//     fnC()
// } catch (err) {
//     console.log("ada error nih:", err.message );   
// }

// let anyForm = '{"age": 30}'

//Json stringify 

// try {
//     let user = JSON.parse(anyForm)
//     if (!user.age) {
//         throw new SyntaxError("age tidak ada")
//     } 
//     if (!user.name) {
//         throw new ReferenceError("name tidak ada")
//     }

//     return user
// } catch (error) {
//     if (error instanceof SyntaxError) {
//         console.log("JSON Error:", error.message); 
//     } else if (error instanceof ReferenceError) {
//         console.log("ref");
        
//     }
//     else {
//         throw error
//     }
// }

// function n(n) {
//     return n*2
// }

// console.log(n(2));

const num = -30
function doubleNumber(n) {
    if (n < 0 || !Number.isInteger(n)) {
        throw new Error("Must be non-negative number")
    }
    return n * 2
}

let start = 7
let result
let diff

try {
    result =doubleNumber(num)
} catch (error) {
    result = "ada error"
} finally {
    diff = start 
}

console.log(result);
console.log(diff);
