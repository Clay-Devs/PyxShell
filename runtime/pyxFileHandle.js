const EventEmitter = require("events");
const CommandHandler = require("./command/handle");

const cmdhandler = new CommandHandler()


class PyxFileHandler extends EventEmitter {
    constructor() {
        super()
        this.pyxfiles = '.pyx'
    }



    async _runpyxfile(file, fsreaddir, callback) {



       var data = fsreaddir.toString('utf8')

       var dataArr = data.split('\n')

       await dataArr.forEach(cmd => {
       var args = cmd.split(' ')
       args.shift()
           var cmdname = cmd.split(' ')[0]
           if(cmd.includes('\r')) { console.log('skipping...') }
           cmdhandler.runcmd(cmdname, args, false, function() {
              console.log('s')
           })
       });
       console.log(dataArr)
       callback()

        callback()
    }
}

module.exports = PyxFileHandler;