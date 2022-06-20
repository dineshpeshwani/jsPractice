//question 2 

const userDetailsArray = require('./userDetails');

let result = userDetailsArray.reduce((acc, curr) => {
    return {...acc, [curr.id]: curr.address }
}, {})

console.log(result);