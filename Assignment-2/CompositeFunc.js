/* 
        Passing the value returned by one function to another and so on.
        There can be any number of functions.
        Example: 
        const f = (x) => x + 5;
        const g = (x) => x * 2;
        f(g(5)); // 15
        Create a compose function which takes functions as argument and return a function.
        Contract -> compose(…fns) ( ….. } 
        Usage ->  compose(f, g)(5); // 15 

*/

const compose = (...fns) => {
    return (input) => {
      return fns.reduceRight((acc, fn) => {
        return fn(acc);
      }, input);
    };
  };
  
  const e= (x) => x*x;
  const f = (x) => x + 5;
  const g = (x) => x*2;
  const h = compose(e ,f, g);
  console.log(h(5)); 