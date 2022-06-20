const userDetailsArray = require('./userDetails');

const result = userDetailsArray.reduce(function(acc, curr){
    if(curr.address.city === "North Dakota"){
        acc = [{"id": curr['id'], "name": curr['name']}, {"city":curr["name"]} , {"company":curr["company"]}];
     }
     return acc;
}, [])

console.log(result);