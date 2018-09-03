const fs = require('fs');
var pd = (data)=>{
    splitdata = data.trim().split("\n");
    for (let i in splitdata) {
        var key = Object.keys(JSON.parse(splitdata[i]));
        console.log( {key:key[0] , values: JSON.parse(JSON.parse(splitdata[i])[key]) } );
        console.log("*********************************************" );
    }
};
fs.readFile('ci_store.json', 'utf-8', (err,data)=>{
    pd(data);
});