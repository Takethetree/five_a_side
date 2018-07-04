	

	let randomList = shufflePlayers(players);

	let firstTeam = randomList.slice(0, (players.length/2));
	// console.log(firstTeam);
	let secondTeam = randomList.slice((players.length/2), players.length);
	
	let listTeam = team => {
		let namesArray = team.map(member => member.name);
		return namesArray.join("\r\n");
	}

	let listTeams = 