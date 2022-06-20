const userDetailsArray = require('./userDetails');

const result = userDetailsArray.reduce(function(acc, curr){

    let arr = [{"id": curr['id'], "name": curr['name']}, {"city":curr["address"]["city"]} , {"company":curr["company"]}]
    acc.push(arr)
    
    return acc;
}, [])

console.log(result);