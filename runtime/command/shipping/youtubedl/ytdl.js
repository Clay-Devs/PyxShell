const DebugMessage = require("../../../debug/console/debugmsg")
var os = require('os')
var fs = require('fs')
const ytdl = require('ytdl-core')
const Debug = new DebugMessage()
const yve = require('youtube-video-exists');

module.exports = async (args, id, endl) => {
    if(!args[1]) return console.log(`please provide a YouTube video URL`)


    

    var vidId = args[1].split("?")
    vidId = vidId.pop()
    vidId.length = 13
    
    vidId = vidId.slice(2, 13)
   var info = await yve.getVideoInfo(vidId)

   if(!info.existing) { console.log(`Please Provide a valid YouTube Video Link`); endl(); return;}

   

    if(id) {
        Debug.Info(`Using standard download dir`)
        var downloaddir = os.homedir()
        Debug.Info(downloaddir + `\\Downloads`)
    }


    if(id && !args[2]) {
      Debug.Info(`Defaulting to quality 'mp4/720p' itag: 22`)
    }
    ytdl(args[1], { quality: "22" })
.on('response', function(res){

  var ProgressBar = require('progress');

  bar = new ProgressBar('downloading [:bar] :percent :etas', { 

    complete : String.fromCharCode(0x2588), 
    total    : parseInt(res.headers['content-length'], 10) 

  });

})
.on( 'data', function(data){ 

  bar.tick(data.length); 

})
.on( 'finish', function(){ console.log('Download finished...'); endl()} )
.pipe( fs.createWriteStream(downloaddir + '/downloads/'+ 'bruh' +'.mp4') );

}