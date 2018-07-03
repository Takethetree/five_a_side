
const sillyname = require('sillyname');

// console.log(sillyname());

// put in gitignore? 

// Create an array of 10 object literals, each representing a player with a name and a skill level:

let numberOfPlayers = 11;
let players = [];

for(let i=0; i<numberOfPlayers; i++) {
	players.push({
		name: sillyname(),
		skill: Math.floor((Math.random() * 10) +1),		
	});
}

// console.log(players);

// let players = [{
//     name: "Player 1",
//     skill: 4,
// }, {
//     name: "Player 2",
//     skill: 6,
// }, {
//     name: "Player 3",
//     skill: 5,
// }, {
//     name: "Player 4",
//     skill: 4,
// }, {
//     name: "Player 5",
//     skill: 3,
// }, {
//     name: "Player 6",
//     skill: 7,
// }, {
//     name: "Player 7",
//     skill: 5,
// }, {
//     name: "Player 8",
//     skill: 4,
// }, {
//     name: "Player 9",
//     skill: 8,
// }, {
//     name: "Player 10",
//     skill: 9,

// }];

// Create empty arrays to represent teams:

// let team1 = [];
// let team2 = [];


// let randomIndex = Math.floor((Math.random() * players.length));
// let randomPlayer1 = players.splice(randomIndex, 1);
// let randomPlayer2 = players.splice(randomIndex, 1);

// Randomly shuffle array using Fisher-Yates

let shufflePlayers = players => {
    for (let i = players.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [players[i], players[j]] = [players[j], players[i]];
    }
    return players;
}

// Split the randomised array down the middle:




let randomList = shufflePlayers(players);
let firstTeam = randomList.slice(0, (players.length/2));

console.log(firstTeam);
let secondTeam = randomList.slice((players.length/2), players.length);
console.log(secondTeam);

// Get the names out of firstTeam and secondTeam:

let listTeam = team => {
	let namesArray = team.map(member => member.name);
	return namesArray.join("\r\n");
}

// console.log(listTeam(firstTeam));

// Getting the score. First output the product of team skills:
// Calculating team performance. Make it a product of their combined skill and luck (represented by 
// a random number)

// Ideally we want to translate skill to a number of goals...

let numberOfGoals = team => {
	let teamSkill = team.reduce((acc, member) => acc + member.skill, 0);
	// console.log(teamSkill);
	let teamPerformance = Math.floor(Math.random() * teamSkill);

	// console.log("in numberofgoals function: ", teamPerformance);

	if(teamPerformance <= 4) {
		return 0;
	} else if (teamPerformance <= 9) {
		return 1;
	} else if (teamPerformance <= 14) {
		return 2;
	} else if (teamPerformance <= 19) {
		return 3;
	} else if (teamPerformance <= 24) {
		return 4;
	} else {
		return 5;
	}


}



let decideWinner = (firstTeam, secondTeam) => {

	let firstTeamScore = numberOfGoals(firstTeam);
	let secondTeamScore = numberOfGoals(secondTeam);

	if(firstTeamScore > secondTeamScore) {
		console.log("Team One Wins!");
	} else if (firstTeamScore === secondTeamScore) {
		console.log("Draw!");
	} else {
		console.log("Team Two Wins!");
	}

	console.log("team scores", firstTeamScore, secondTeamScore);

}

// How about 0-4 = 0 goals, 5-9 = 1 goal, 10-14 = 2 goals, 15-19 = 3 goals etc?

// decideWinner(firstTeam, secondTeam);

// Add a random element to each team's performance:



// How to list the names on new lines?

// console.log(listTeam(firstTeam));
// console.log(listTeam(secondTeam));
// console.log(teamPerformance(firstTeam));
// console.log(teamPerformance(secondTeam));

decideWinner(firstTeam, secondTeam);


// console.log(firstTeam);
// console.log(secondTeam);

// Output teams into two separate strings:




// let firstTeam = team1.push(players[0], players[1], players[2], players[3], players[4]);


// team1.push(randomPlayer1);
// let randomPlayer2 = players.splice(randomIndex, 1);
// let randomPlayer3 = players.splice(randomIndex, 1);
// let randomPlayer4 = players.splice(randomIndex, 1);
// let randomPlayer5 = players.splice(randomIndex, 1);
// console.log(shuffle());


// console.log(team1);
// console.log(randomPlayer1);
// console.log(randomPlayer3);
// console.log(randomPlayer4);
// console.log(randomPlayer5);
// console.log(shuffle(players));


// for(let i=0; i<(Math.floor(shufflePlayers.length/2)); i++) {
// 	return i;
// }

// for(let i=0; i<(Math.floor(players.length/2)); i++) {
// 	console.log(shufflePlayers(players)[i]);
// }


// Need to pop five players out of the players array, put remaining players in 



// console.log(players);

// for(let i=0; i<players.length; i+=1) {
// 	if(players.length > 5) {

// 	}
// }


// Select random player from players array, push to team1:

// var item = items[Math.floor(Math.random()*items.length)];

// let player = team1.push(players[Math.floor(Math.random()*players.length)]);

// console.log(team1);
// console.log(players);
// console.log(players);

// for(let i = players.length-1;i>=0;i--){
//   players.splice(Math.floor(Math.random()*players.length), 1);
//   console.log(players);
// }












