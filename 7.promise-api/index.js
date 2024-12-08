'use strict';

// Promise.all([
//     new Promise((resolve)=>setTimeout(()=> resolve(1),4000)),
//     new Promise((resolve)=>setTimeout(()=> resolve(3),3000)),
//     new Promise((resolve)=>setTimeout(()=> resolve(2),2000)),
// ]).then((result)=>console.log(result))

// let urls = [
//     'https://api.github.com/users/iliakan',
//     'https://api.github.com/users/remy',
//     'https://api.github.com/users/jeresig'
// ]

// let request = fetch('https://api.github.com/users/iliakan')

// new Promise((resolve, reject)=>{
//   resolve(request)
// })
// .then((respose)=>respose.json())
// .then(console.log)


// let request = urls.map((url) => fetch(url))


// Promise.all(request)
//     .then((response) =>
//         Promise.all(response.map((response) => response.json()))
//     )
//     .then((data) =>
//         data.forEach((userData) =>
//             console.log(`User: ${userData.name}, ID: ${userData.id}`))
//     ).catch((error) => console.log(error.message)
//     )

// Promise.all([
//     new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(1)
//         }, 100);
//     }),

//     new Promise((resolve,reject)=>{
//         reject(new Error("something went wrong"),1000)
//     }),

//     new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(1)
//         }, 100);
//     }),

// ]).then(console.log).catch((error)=>console.log(error.message))


// let urls = [
//     'https://api.github.com/users/iliakan',
//     'https://api.github.com/users/remy',
//     'https://api.github.com/users/remyyyyyyyyyyyy',
    
// ]



// Promise.allSettled(urls.map((url) => fetch(url))).then((result) => {
//     // console.log("result:", result)
//     result.forEach((result, num) => {

//         if (result.status === 'fulfilled') {
//             console.log(`${urls[num]}: ${result.value.status}`)

//         }
//         if (result.status === 'rejected') {
//             console.log(`${urls[num]}: ${result.reason}`)
//         }
//     })
// }
// )

//hanya menghandle promise yang pertama kali keluar tidak peduli resolve atau reject
// Promise.race([
//     new Promise((resolve,reject)=> setTimeout(() => {
//         resolve(1)
//     }, 600)),
//     new Promise((resolve,reject)=> setTimeout(() => {
//         reject(new Error("error"))
//     }, 500)),
//     new Promise((resolve,reject)=> setTimeout(() => {
//         resolve(2)
//     }, 700)),
// ]).then(console.log).catch((error)=>console.log(error.message))

// akan mengembalikan promise yang resolve dan pertama kali keluar 
// Promise.any([
//     new Promise((resolve,reject)=> setTimeout(() => {
//         reject(new Error("error"))
//     }, 600)),
//     new Promise((resolve,reject)=> setTimeout(() => {
//         reject(new Error("error"))
//     }, 500)),
//     new Promise((resolve,reject)=> setTimeout(() => {
//         reject(new Error("error"))
//     }, 700)),
// ]).then(console.log).catch((error)=>console.log(error.name))





// static method Promise.resolve(value) creates a resolved promise with the result value
// Promise.resolve(value);
// new Promise((resolve) => resolve(value));


let cache = new Map();

// we do this so the loadCached function is a function that returns a promise
// jangan sampai dia kadang return promise, kadang return non promise
function loadCached(url) {
  if (cache.has(url)) {
    return Promise.resolve(cache.get(url)); // (*)
  }

  return fetch(url)
    .then((response) => response.text())
    .then((text) => {
      cache.set(url, text);
      return text;
    });
}

// static method Promise.reject(error) creates a rejected promise with the error
// Promise.reject(error);
// new Promise((resolve, reject) => reject(error));


