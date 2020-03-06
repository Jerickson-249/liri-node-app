// var Spotify = require('node-spotify-api');
// var fs = require("fs");
// var spotify = new Spotify(keys.spotify);
// var keys = require("./key");

// var command = process.argv[2];
// var term = process.argv.slice(3).join(" ");

// function spotifySong(songName) {
//     if(songName){
//         console.log ("Need to assign the default value to the song")
//         songName = "You Raise Me Up"
//     }
//     var spotify = new Spotify({
//       id: be75c536186d40758b0db0ad073ac630,
//       secret: b9bcc334fa644c778b475b3d84c40cbe
//     });
     
//     spotify.search({ type: 'track', query: 'You Raise Me Up' }, function(err, data) {
//       if (err) {
//         return console.log('Error occurred: ' + err);
//       }
//     console.log(data); 
//     });
// }