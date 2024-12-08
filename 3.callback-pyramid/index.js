'use strict';

//   function loadScript(src,callback) {
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = ()=> callback(script)
//     document.head.append(script)
//   }

// //tidak bisa dijalankan karena document.head.append(script) adalah sebuah asynchronous dan di handle dengan cara synchronous
// //   loadScript('./script1.js')


//   loadScript('./script1.js',function(script){
//     loadScript('./script2.js',function(script){
//         loadScript('./script3.js',function(script){
//             loadScript('./script4.js',function(script){})                     
//         })
//     })
//   })


function loadScript(src,callback){
    let script = document.createElement('script')
    script.src = src;
    script.onload= ()=> callback(null, script)
    script.onerror= ()=> callback(new Error(`script error ${src}`))
    document.head.append(script)
}
  
loadScript('./script1.js',function(error, script){
    if (error) {
        console.log('error nih');
    } else {
        loadScript('./script2.js', function(error, script){
            if (error) {
                console.log('error nih');
            }else {
                loadScript('./script3.js', function(error,script){
                    if (error) {
                        console.log('error')
                    }else {
                        loadScript('./script4.js',function(error, script){
                            if (error) {
                                console.log("error nih")
                            } else {
                                console.log("error not found");
                                
                            }
                        })
                    }
                })
            }
        })
    }
})