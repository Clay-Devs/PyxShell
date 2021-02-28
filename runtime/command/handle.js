const EventEmitter = require("events");
const commands = require('./cmds.json')


class CommandHandler extends EventEmitter {
    constructor(){
        super()
        this._runtime = '/runtime'
    }


    validcmd (cmd) {

        var valid = commands[`${cmd}`]

        if(!valid) return false
        if(valid) return true

    }

    async runcmd (cmd, args, id, callback) {
        

        var cmddir = commands[`${cmd}`]

        await require(`.${cmddir}`)(args, id, function() {
            callback()
        })
    }
}


module.exports = CommandHandler