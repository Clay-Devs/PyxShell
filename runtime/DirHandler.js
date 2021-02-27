const EventEmitter = require("events");




class DirHandler extends EventEmitter {
    constructor() {
        super()
        this.curDir = require('path').join(__dirname, '../')
    }


    async _changedir (i) {
        this.curDir = i

        return 200
    }
}

module.exports = DirHandler;