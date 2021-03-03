var alllinesinstring = require('fs').readFileSync(`../plugins/js-test.plyx`).toString('utf8').split("\r")



var isjsint = false;
var injsint = null
var ostream = [];


alllinesinstring.forEach((line, i) => {
    var l = line.replace('\n', '')
    if(l.includes('pyx.plugintype.js')) isjsint = true;
    if(l.includes('js.start')) return injsint = true
    console.log(injsint)
    if(l === 'js.end<=') injsint = false

    if(injsint) {
        ostream.push(l)
    }
})


ostream = 'module.exports = {\nname: "place", \nversion: "test",\n run: async () => {\n' + ostream.join('\n') + '\n}\n}'

require('fs').writeFileSync(require('path').join(__dirname, '../plugins/cpl/test.pcyx'), ostream)

console.log(ostream)