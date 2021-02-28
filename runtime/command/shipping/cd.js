const DirHandler = require("../../DirHandler")

const dh = require('../../ioHandler')

module.exports = (args, id, callback) => {
    const dir = args[1]
    if(dir === '..' || dir === '../') {
        const curdir = dh.curDir.replace(/\\/g, '/')
        var pd = curdir.split('/')
        pd.pop()
        var prevdir = pd.join('/')
        dh._changedir(prevdir)
    } else {
    if(require('fs').existsSync(dh.curDir + dir)){
        dh._changedir(dh.curDir + dir)
    } else {
        if(require('fs').existsSync(dh.curDir + '/' + dir)){
            dh._changedir(dh.curDir + '/' + dir)
        } else {
        console.log(`not valid`)
        }
    }
}

callback()
}