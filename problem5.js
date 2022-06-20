const userDetailsArray = require('./userDetails');

const result = userDetailsArray.reduce(function(acc, curr){
    if(curr.address.city === "North Dakota"){
        acc.push({"id": curr['id'], "name": curr['name']}, curr["name"], curr["company"]);
     }
     return acc;
}, [])

console.log(result);

