//Spotify
require("dotenv").config(); //Require and configure as early as possible

var keys = require("./key.js");

var Spotify = require('node-spotify-api'); //Using the Spotify API while getting the keys from keys.js
var spotify = new Spotify(keys.spotify);

var moment = require('moment');
moment().format(); //Both are required to use moment for node

var axios = require('axios'); //Getting the information from the APIs for the movie and conert-this
var fs = require("fs"); //Will read the random.txt file for the do-what-it-says function
var command = process.argv[2]; //For the switch statement coming up
var value = process.argv.slice(3).join(" ") //node liri.js concertThis arina grandes logn name of a band

function menu() {
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
}
//Information for the request
//Pull information from the concert
function spotifySong(songName) {
    console.log("song: ", songName)
    if (songName === "") {
        console.log("Need to assign the default value to the song")
        songName = "You Raise Me Up"
    }
    // spotify is not using axios is giving a package called node-spotify-api 

    spotify.search({ type: 'track', query: songName }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log(data.tracks.items[0]);
    });
}

function concertThis(artist) {
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
    console.log(queryURL)

    axios.get(queryURL).then (
        function (response) {
            console.log(response.data)
            console.log("The Name of the Venue is: ", response.data.Venue);
            console.log("The Venue Location is: ", response.data.Location);
            console.log("The Date of teh Event is: ", response.data.Date);
    })
    // axios call (url)
    // console.log results 
    // loop the results to show the info about the venue / location / date
}
function movieThis(movie) {
    var queryURL = `http://www.omdbapi.com/?t=${movie}&y=&plot=short&apikey=trilogy`
    console.log(queryURL)

    axios.get(queryURL).then(
        function (response) {
            console.log(response.data)
            console.log("The movie is: ", response.data.Title);
            console.log("The year is: ", response.data.Year);
            console.log("The IMDB Rating is: ", response.data.imdbRating);
            console.log("The Rotten Tomatoes rating is: ", response.data.Ratings[1].Value);
            console.log("The Country where it was produced in is: ", response.data.Country);
            console.log("The Language of the movie is: ", response.data.Language);
            console.log("The Plot of the movie is: ", response.data.Plot);
            console.log("The Actors in the movie are: ", response.data.Actors);
        })
}

function doThis() {
    fs.readFile('random.txt', "utf8", function (error, data) {
        console.log(data)
        command = data.split(",")[0]
        value = data.split(",")[1]
        console.log(command, value)
        // we call the menu that contain the switch with a new command and value
        // menu is a function and it's call when a command in the command line is executes and is called too when we read the file and get a new command and song 
        menu()
    })
}
menu()
// go to every function and console.log the info asked in the readme homework