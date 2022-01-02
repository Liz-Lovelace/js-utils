export default function timed(func){  
  let timedWrapper = function(...funcArgs){
    const begin_time = Date.now();
    const func_return_value = func(...funcArgs);
    // check if func_return_value is a promise
    if (func_return_value && typeof func_return_value.then === 'function')
      func_return_value.then(()=>
        console.log(`${func.name} (async) finished in ${Date.now() - begin_time} ms`));
    else
      console.log(`${func.name} finished in ${Date.now() - begin_time} ms`)
    
    return func_return_value;
  }
  return timedWrapper;
}