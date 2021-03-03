

var path = process.env.path

path = path.split(';')

var haspath = path.includes(require('path').join(__dirname, '../PyxShell.exe'))

if(!haspath) {
    require('child_process').exec(`set PATH=%PATH%; ${require('path').join(__dirname, '../')}`)
}

console.log(haspath)

console.log(path)