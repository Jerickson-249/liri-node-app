//Spotify
require("dotenv").config(); //Require and configure as early as possible

var keys = require("./keys.js");
                            
var Spotify = require('node-spotify-api'); //Using the Spotify API while getting the keys from keys.js
var spotify = new Spotify(keys.spotify);

var moment = require('moment');
moment().format(); //Both are required to use moment for node

var axios = require('axios'); //Getting the information from the APIs for the movie and conert-this
var fs = require("fs"); //Will read the random.txt file for the do-what-it-says function
var command = process.argv[2]; //For the switch statement coming up

switch (command) {
    case "concert-this":
        concertThis(value);
        break;
    case "movie-this":
        movieThis(value);
        break;
    case "do-what-it-says":
        doThis(value);
        break;
    case "spotify-this-song":
        spotifySong(value);
        break;
};

var request = require("request");

//Information for the request
//Pull information from the concert

var myArgs = process.argv.slice(2)

function spotifySong(songName) {

if (command === "movie-this"){
    var artist = process.argv[3];

    request("")
    //bands in town and omdb??
}
};

else if (command === "concert-this") {
    var song = process.argv[3];
    if (song === undefined) {
        song = "The Sign";
        //By Ace of Base
    }
}

var spotifySong = required("");

spotify.search(

)