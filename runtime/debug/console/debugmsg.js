const EventEmitter = require("events");
require('../../colors')

class DebugMessage extends EventEmitter {
    constructor() {
        super()
        this._msg = '';
    }
    

    async Info(input) {
        console.log(`[Debug] `.yellow + `${input}`)
    }
}

module.exports = DebugMessage;