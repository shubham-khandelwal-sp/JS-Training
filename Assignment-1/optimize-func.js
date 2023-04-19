/*
        Create an optimise function which takes a pure function(assume this performs some heavy computation) as an argument and returns an optimised version of it.
        The function which is passed to optimise is a pure function which means that it will always return same output for same input.
        Let’s assume our computation function only takes args of type string | number as input.
*/

let user={
    f(a,b){
        //  Some heavy computation inside this function
        alert(`Function f called with args ${a} and ${b}`)
        return a+b;
    }
};

function getHash(args){
    return args[0]+','+args[1]
}

function optimise(func,hash){
    let cache =new Map()
    return function(){
        let hashKey=hash(arguments)
        if(!cache.has(hashKey)){
            let retValue=func.call(this,...arguments)
            cache.set(hashKey,retValue)
        }
        return cache.get(hashKey)
    };
}

user.f=optimise(user.f,getHash)
alert(user.f(1,2));
alert(user.f(3,4));