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

    runcmd (cmd, args) {
        

        var cmddir = commands[`${cmd}`]

        require(`.${cmddir}`)(args)
    }
}


module.exports = CommandHandler