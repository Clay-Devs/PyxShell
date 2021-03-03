const readline = require('readline')
const CommandHandler = require('./command/handle')
const DirHandler = require('./DirHandler')
const isdevmode = require('../devmode.json').devmode
const fs = require('fs')
const PyxFileHandler = require('./pyxFileHandle')
const io = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const dirmgr = new DirHandler()
const ch = new CommandHandler()
const pfh = new PyxFileHandler()

async function promptinput() {


    io.question(dirmgr.curDir + `> `, async function(cmd) {
        const args = cmd.split(' ')
    var validcmd = ch.validcmd(args[0])

    if(!validcmd){ 
        if(fs.readdirSync(dirmgr.curDir).includes(cmd) || fs.readdirSync(dirmgr.curDir).includes(cmd + '.pyx')) {
            pfh._runpyxfile(cmd, fs.readFileSync(dirmgr.curDir + '/' + cmd + '.pyx'), function() {
                return promptinput()
            })
        } else {
        console.log(`${args[0]} is not recognized as an internal or external command`);
         return promptinput() 
        }
    } else {
    
    await ch.runcmd(args[0], args, isdevmode, function() {
        promptinput()
    })
}

    
    })


}

//#init
promptinput()

//#exec

module.exports = dirmgr