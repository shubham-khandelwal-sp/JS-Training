function getClonedObj(obj) {
    let isArrayPrototype = obj.__proto__ === Array.prototype;
    let clonedObj = isArrayPrototype ? [] : {};
    clonedObj.__proto__ = obj.__proto__;
    return clonedObj;
  }
  
  function deepOmitKeys(obj, keys) {
    let typeofObj = typeof obj;
    if (!obj || typeofObj !== "object") {
      return obj;
    }
  
    let clonedObj = getClonedObj(obj);
  
    let changeInObj = false;
    for (let key in obj) {
      if (keys.includes(key)) {
        changeInObj = true;
      } else {
        let typeofObj = typeof obj[key];
        if (typeofObj !== "object") {
          clonedObj[key] = obj[key];
        } else {
          clonedObj[key] = deepOmitKeys(obj[key], keys);
          changeInObj = changeInObj || clonedObj[key] !== obj[key];
        }
      }
    }
  
    return changeInObj ? clonedObj : obj;
  }
  
  export { deepOmitKeys };
  