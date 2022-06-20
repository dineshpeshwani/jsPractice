//question 1

const userDetailsArray = require('./userDetails');

let arr = userDetailsArray.map(function address(detail){
    return detail.address;
});

console.log(arr);


