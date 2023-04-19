Function.prototype.defer = function(delayTime){
    setTimeout(this,delayTime)
}
function f() {
    alert("Hello!");
  }
  
  f.defer(1000); // shows "Hello!" after 1 second


  /* 
    Added method defer to the prototype of the functions
  */