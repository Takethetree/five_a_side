# five_a_side

This web application is used for randomly generating two five-a-side football teams. It can also 'play' a virtual game
between the two teams and output the winner. 

The app was built using Javascript, and styled using Sass and Bootstrap. It was my final project for the Spring 2018 cohort
of the Coding Fellowship at Bristol's [DevelopMe](https://developme.training/).

## Installation

The app requires the following dependencies: 

* Npm and node.js
* Gulp

The repository can be cloned on the command line with: `git@github.com:Takethetree/five_a_side.git` and using `npm install` 
in the project folder to install dependencies. 

Alternatively a live version of the app is shown [here](http://sam.developme.space/).

## Project Brief

_'The exercise is to create a tool which randomly picks 5-a-side football teams from a list of 10 names_
_(10 players = 2 teams of 5)._

_Advanced features might include:_
* _Support for n-a-side, where a list of any length can be split into two teams._
* _Support for balancing of the teams, where some measure of each player's strength is used to allocate teams fairly.'_

My app fulfils the brief by generating an array of objects (10 by default), each representing a player with a name and a
skill level. It then shuffles the array randomly (using the [Fisher-Yates](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)
algorithm) and sorts its contents into two new arrays, representing two teams. After teams are generated, their names are outputted to the screen. 

A simple algorithm can be then used to make the two teams 
play a 'match'. The algorithm uses both the cumulative team skill level and a randomly generated number, to model a mix
of skill and chance. 

The first advanced feature of the brief (n-a-side) is supported, although I capped team sizes at 1-11 for simplicity. 

The index.js file contains extensive notes on how each section of the JavaScript code works. 

## How to Use the App

1. Fist enter a number from 1-11 in the players per side box. This determines the team sizes. 
2. Press 'Generate Teams!' to output two teams. A name and skill level is listed for each player. 
3. Press 'Play a match!' to simulate a game between the two teams. This outputs the final score and the winner of the match. 

## Suggested Improvements

Possible improvements to the app could include:

1. Implementing the second advanced feature of the brief (skill balancing). This could be done with a sorting algorithm that
balanced the teams according to skill level, and would result in more evenly matched teams. 
2. Improving the 'play a match' algorithm. The current algorithm is somewhat crude and a little too senstive to team-sizes. 
3. The ability to input teams manually, rather than generate them automatically. This would be useful for real people who wanted
to pick a sports team.

## Acknowledgements

Thanks to Kye Buffery of DevelopMe Training for helpful suggestions. 

I used the following code for name generation: https://github.com/TheDeveloper/sillyname/blob/master/index.js


