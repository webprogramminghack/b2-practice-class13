'use strict';

// let promise = new Promise(function(resolve, reject) {
//     setTimeout(()=>reject(new Error('Something is wrong')),1000);
//     setTimeout(()=>resolve("done"),2000);
// })
// promise.then(
//     (result)=> console.log(result),
//     (err)=> console.log(err.message)
// )

// console.log(promise instanceof Object);

// new Promise((resolve, reject)=>{
//     throw new Error('error')
// })
// .catch((err)=> console.log(err.message))
// .finally(()=> console.log("promise ready"))




// function loadScript(src) {
//     return new Promise(function(resolve, reject) {
//         let script = document.createElement('script')
//         script.src =  src
//         script.onload = ()=> resolve(script)
//         script.onerror = ()=> reject(new Error(`Script load error for ${src}`))
//         document.head.append(script)
//     })
// }

// let promise = loadScript('./script.js')
// promise.then(()=> myFunction()).catch((err)=> console.log(err.message))


