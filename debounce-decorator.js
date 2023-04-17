<!doctype html>
<script src="https://en.js.cx/test/libs.js"></script>
<script src="test.js"></script>
<script>

  function debounce(f,ms){
    let timerId;
    return function(){
        if (timerId === undefined) {
            timerId = setTimeout(()=>{
                timerId = undefined;
                f.apply(this,arguments);
            }, ms);
            return;
        }

        clearTimeout(timerId)
        timerId = setTimeout(()=>{
            timerId = undefined;
            f.apply(this,arguments);
        }, ms);
    }
  }

</script>

</html>
