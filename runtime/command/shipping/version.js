const data = require('./data/version.json') //dont require file in v1

module.exports = (args) => {
    
       const find = args[1]

       if(data[find]) {
           console.log(`${args[1]} ` + data[find])
       } else {
           console.log(`PyxShell Version 0.0.1`)
       }

    
}