let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});
promise.then(console.log)

/* 
    Output : 1
    Only the first call made to resolve/reject is taken into account, subsequent calls made to either of these
    are ignored.
*/