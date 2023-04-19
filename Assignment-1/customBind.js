/* 
        Create you own bind method on Function.prototype.
        Contract same as native bind method -> Function.customBind(thisArg, arg1, arg2, .. argN)
*/


Function.prototype.customBind= function (thisArg,...args){
    const fn=this
    return function(){
        fn.call(thisArg,args)
    }
}

let user={
    firstName: "xy",
    lastName:"z"
}

let printInfo= function(id,country){
    console.log(`My name is ${this.firstName} ${this.lastName} with ID:${id} living in ${country}`)
}

const callMethod=printInfo.bind(user,"HZB45D")
callMethod("India")