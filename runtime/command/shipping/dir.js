const dh = require('../../ioHandler')
const fs = require('fs')

module.exports = (args, id, cb) => {

    const curdirfiles = fs.readdirSync(dh.curDir);

    curdirfiles.forEach(file => {
        var isdir = fs.lstatSync(dh.curDir + '/' + file).isDirectory()
        var filesize = '\xa0\xa0';
        var dirf = '';

        if(isdir) dirf = `DIR`
        if(!isdir) {
            filesize = fs.lstatSync(dh.curDir + '/' + file).size
        }
        


        console.log(file + '\xa0\xa0\xa0\xa0' + dirf + '\xa0' + filesize)
    })

    cb()

}