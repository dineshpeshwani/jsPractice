//question 4

const userDetailsArray = require('./userDetails');

    let result = userDetailsArray.reduce((acc, curr) => {
        if(curr.address.city === "North Dakota"){
           acc[curr["id"]] = {'information ': [curr['name'], curr["address"]['city'],curr['company']]}
        
        }
        return acc;
        
    }, {})

console.log(result);