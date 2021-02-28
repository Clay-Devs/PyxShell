const EventEmitter = require("events");




class DirHandler extends EventEmitter {
    constructor() {
        super()
        this.curDir = require('path').join(__dirname, '../').replace(/\\/g, '/').slice(0, -1)
    }


    async _changedir (i) {
        this.curDir = i

        return 200
    }
}

module.exports = DirHandler;