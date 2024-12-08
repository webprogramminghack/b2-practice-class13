'use strict';

// new Promise((resolve,reject)=>{
//     throw new Error("Something is wrong")
// })
// .catch((error)=> console.log(error.message))

// new Promise((resolve,reject)=>{
//     x = 3
// })
// .catch(({message})=> console.log(message))

new Promise((resolve,reject)=>{
    reject(new Error("Something went wrong"))
})
.then(()=> console.log("halo"))
.catch(({message})=> console.log(message))