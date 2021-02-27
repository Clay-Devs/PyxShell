const DirHandler = require("../../DirHandler")

const dh = require('../../ioHandler')


module.exports = (args) => {
    const dir = args[1]
    if(dir === '..' || dir === '../') {
        var pd = dh.curDir.split('/')
        pd.pop()
        var prevdir = pd.join('')
        dh._changedir(prevdir)
    } else {
    if(require('fs').existsSync(dh.curDir + dir)){
        dh._changedir(dh.curDir + dir)
    } else {
        console.log(`not valid`)
    }
}
}