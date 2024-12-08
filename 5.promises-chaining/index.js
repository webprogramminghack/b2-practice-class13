'use strict';

// new Promise(function(resolve,reject) {
//     setTimeout(()=> resolve(1),1000)
// })
// .then(function(result) {
//     return result * 2 
// })
// .then(function(result) {
//     return result * 2 
// })
// .then(function(result) {
//     return result * 1
// })
// .then(function(result) {
//     console.log(result);  
// })


//membuktikan bahwa .then() mengembalikan sebuah objek yang memiliki prototype yang sama dengan Promise.prototype
// console.log(
//     new Promise(function(resolve,reject){
//         setTimeout(() => {
//             resolve(1)
//         }, 100);
//     })
//     .then(function (result) {
//         return result * 2
//     }).__proto__ === Promise.prototype
// )


//auto flatten
new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(1)
    }, 100);
})
.then(function (result) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(result * 2)
        }, 100);
    })
})
.then(function (result) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(result * 2)
        }, 100);
    })
})
.then(function(result){
    console.log(result)
})
