'use strict';

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}

// promisify function loadScript
let loadScriptPromise = function (src) {
  return new Promise((resolve, reject)=>{
    loadScript(src,(err,script)=>{
      if (err) {
        reject(err)
      } else {
        resolve(script)
      }

    })
  })
}


// usage
loadScriptPromise('./script.js').then(() => sayHello());
