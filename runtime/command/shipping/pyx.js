

module.exports = (args, id, endl) => {

    const pyx = { 
        version: '0.0.2'
    }
    
    var prop = args[1]


    var importallprops = require('../../env/vars.json')

    eval(`console.log(${importallprops[prop]})`)

    endl();
}