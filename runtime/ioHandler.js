const readline = require('readline')
const CommandHandler = require('./command/handle')
const DirHandler = require('./DirHandler')

const io = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const dirmgr = new DirHandler()
const ch = new CommandHandler()


async function promptinput() {


    io.question(dirmgr.curDir + `> `, async function(cmd) {
        const args = cmd.split(' ')
    var validcmd = ch.validcmd(args[0])

    if(!validcmd){ console.log(`${args[0]} is not recognized as an internal or external command`); return promptinput() }
    
    ch.runcmd(args[0], args)

    promptinput()
    })


}

//#init
promptinput()

//#exec

module.exports = dirmgr