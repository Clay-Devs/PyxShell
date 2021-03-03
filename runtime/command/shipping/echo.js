
const data = require('./data/version.json') //dont require file in v1

module.exports = (args, id, cb) => {
    

    console.log(args.slice(1).join(' '))
    cb()
}