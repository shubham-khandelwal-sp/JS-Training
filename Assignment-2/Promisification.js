/* 
    Promisification:
    Conversion of a function that accepts a callback into a function returning a promise
*/

const customPromisifyFunc= (fn) => {
    return function(...args){
        return new Promise((resolve,reject)=>{
            let customCallBackFunc= (err,res) => {
                err?reject(err):resolve(res)
            }
            args.push(customCallBackFunc)
            fn.call(this,...args)
        })
    }
}