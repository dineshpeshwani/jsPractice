//question 3

const userDetailsArray = require('./userDetails');
result = userDetailsArray.reduce(function (acc, curr) {

    let id = curr['id']
    acc[id] = {"name":curr["name"], "about":curr['about'], "address":curr["address"], "address" : {...curr["address"]}, "company":curr["company"]};
    return acc;
}, {})

console.log(result)
