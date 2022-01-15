# js-utils
## These are some useful js functions I wrote


------------
## timed.js
Wrap any function to write its execution time to console.
Works with async functions!
##### Example usage:
```javascript
import timed from './timed.mjs';
function func(){
  console.log('hello, world!');
}
timed(func)();
```
##### Output:
```
hello, world!
func finished in 12 ms
```

------------

