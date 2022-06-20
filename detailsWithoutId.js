//question 3

const userDetailsArray = require('./userDetails');
result = userDetailsArray.reduce(function (acc, curr) {

    let id = curr['id']
    let obj = {}
    Object.keys(curr).forEach((key) => {
        if (key !== "id") {
            if(key === 'address'){
                obj[key] = {...curr.address}
            }
            else{
            obj[key]=curr[key]
            }
        }
    })
    acc[id] = obj
    return acc;
}, {})

console.log(result)
