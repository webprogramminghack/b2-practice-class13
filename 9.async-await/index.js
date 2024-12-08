'use strict';

// async function f() {
//     return 1
// }

// console.log(f().__proto__ === Promise.prototype);

// async function f() {
//     return Promise.resolve("done")
// }

// f().then((result)=>console.log(result))


// async function f() {
//     const promise = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("done")
            
//         }, 100);
//     })

//     let result = await promise   
//     console.log(result);
    
// }

// f()

async function f() {
    try {
        let urls = [
            'https://api.github.com/users/iliakan',
            'https://api.github.com/users/remy',
            'https://api.github.com/users/jeresig'
        ]
        //menggunakan  promise
        let responses = await Promise.all(
            urls.map(async url=> {
                let response = await fetch(url)
                return response.json()
            })
        )
        // let arr = []
        // for (const element of urls) {
        //     let response = await fetch(element)
        //     arr.push(response.json())
        // }
        console.log(arr);
        
    } catch (error) {
        console.log(error.stack);
    }
}

f()
