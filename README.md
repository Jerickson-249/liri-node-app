# liri-node-app

Language Interpretation and Recognition Interface application

Introduction:

Similar to SIRI, LIRI is a Language Interpretation and Recognition Interface using Node.js and the Command Line Interface. It takes user input, search one of 3 APIs and give back data based on the search criteria.

Usage:

-First start by cloning the repo into a directory of your choice.

-Run npm install in the command line to install all required dependencies.

-Run 1 of the 4 commands listed below for each function of the application.

1st Command:

-Node liri.js concert-this + <Artist/Band Name here> This will search the Bands in Town Artist Events API and return data related to the desired artist or band.

2nd Command:

-Node liri.js spotify-this-song + <song name here> This will search the Spotify API and return data related to the desired song.
Technologies:
  
3rd Command:

-Node liri.js movie-this + <movie name here> This will search the OMDB API and return data related to the desired movie.
  
4th Command:
  
-Node liri.js do-what-it-says This will take the text inside of the random.txt file and use it to call one of the Liri commands.
  
Technologies Used:

-Node.js

-npm axios

-npm inquirer

-npm dotenv

API's Used:

-Bandsintown

-OMDB

-Spotify
