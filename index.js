(d => {


// Select elements for later DOM manipulation:

	let form = d.getElementById("team_form");
	let numPlayers = d.getElementById("number_players");
	let button1 = d.getElementById("team_button");
	let team1 = d.getElementById("team_one");
	let team2 = d.getElementById("team_two");
	let button2 = d.getElementById("match_button");
	let score = d.getElementById("score_text");
	let winner = d.getElementById("winner");


// Code for generating silly names. 
// Name generation code is from https://github.com/TheDeveloper/sillyname/blob/master/index.js

	let defaultPlayerName = 'Player Name';

	let adjectives = ["Black","White","Gray","Brown","Red","Pink","Crimson","Carnelian","Orange","Yellow","Ivory","Cream","Green","Viridian","Aquamarine","Cyan","Blue","Cerulean","Azure","Indigo","Navy","Violet","Purple","Lavender","Magenta","Rainbow","Iridescent","Spectrum","Prism","Bold","Vivid","Pale","Clear","Glass","Translucent","Misty","Dark","Light","Gold","Silver","Copper","Bronze","Steel","Iron","Brass","Mercury","Zinc","Chrome","Platinum","Titanium","Nickel","Lead","Pewter","Rust","Metal","Stone","Quartz","Granite","Marble","Alabaster","Agate","Jasper","Pebble","Pyrite","Crystal","Geode","Obsidian","Mica","Flint","Sand","Gravel","Boulder","Basalt","Ruby","Beryl","Scarlet","Citrine","Sulpher","Topaz","Amber","Emerald","Malachite","Jade","Abalone","Lapis","Sapphire","Diamond","Peridot","Gem","Jewel","Bevel","Coral","Jet","Ebony","Wood","Tree","Cherry","Maple","Cedar","Branch","Bramble","Rowan","Ash","Fir","Pine","Cactus","Alder","Grove","Forest","Jungle","Palm","Bush","Mulberry","Juniper","Vine","Ivy","Rose","Lily","Tulip","Daffodil","Honeysuckle","Fuschia","Hazel","Walnut","Almond","Lime","Lemon","Apple","Blossom","Bloom","Crocus","Rose","Buttercup","Dandelion","Iris","Carnation","Fern","Root","Branch","Leaf","Seed","Flower","Petal","Pollen","Orchid","Mangrove","Cypress","Sequoia","Sage","Heather","Snapdragon","Daisy","Mountain","Hill","Alpine","Chestnut","Valley","Glacier","Forest","Grove","Glen","Tree","Thorn","Stump","Desert","Canyon","Dune","Oasis","Mirage","Well","Spring","Meadow","Field","Prairie","Grass","Tundra","Island","Shore","Sand","Shell","Surf","Wave","Foam","Tide","Lake","River","Brook","Stream","Pool","Pond","Sun","Sprinkle","Shade","Shadow","Rain","Cloud","Storm","Hail","Snow","Sleet","Thunder","Lightning","Wind","Hurricane","Typhoon","Dawn","Sunrise","Morning","Noon","Twilight","Evening","Sunset","Midnight","Night","Sky","Star","Stellar","Comet","Nebula","Quasar","Solar","Lunar","Planet","Meteor","Sprout","Pear","Plum","Kiwi","Berry","Apricot","Peach","Mango","Pineapple","Coconut","Olive","Ginger","Root","Plain","Fancy","Stripe","Spot","Speckle","Spangle","Ring","Band","Blaze","Paint","Pinto","Shade","Tabby","Brindle","Patch","Calico","Checker","Dot","Pattern","Glitter","Glimmer","Shimmer","Dull","Dust","Dirt","Glaze","Scratch","Quick","Swift","Fast","Slow","Clever","Fire","Flicker","Flash","Spark","Ember","Coal","Flame","Chocolate","Vanilla","Sugar","Spice","Cake","Pie","Cookie","Candy","Caramel","Spiral","Round","Jelly","Square","Narrow","Long","Short","Small","Tiny","Big","Giant","Great","Atom","Peppermint","Mint","Butter","Fringe","Rag","Quilt","Truth","Lie","Holy","Curse","Noble","Sly","Brave","Shy","Lava","Foul","Leather","Fantasy","Keen","Luminous","Feather","Sticky","Gossamer","Cotton","Rattle","Silk","Satin","Cord","Denim","Flannel","Plaid","Wool","Linen","Silent","Flax","Weak","Valiant","Fierce","Gentle","Rhinestone","Splash","North","South","East","West","Summer","Winter","Autumn","Spring","Season","Equinox","Solstice","Paper","Motley","Torch","Ballistic","Rampant","Shag","Freckle","Wild","Free","Chain","Sheer","Crazy","Mad","Candle","Ribbon","Lace","Notch","Wax","Shine","Shallow","Deep","Bubble","Harvest","Fluff","Venom","Boom","Slash","Rune","Cold","Quill","Love","Hate","Garnet","Zircon","Power","Bone","Void","Horn","Glory","Cyber","Nova","Hot","Helix","Cosmic","Quark","Quiver","Holly","Clover","Polar","Regal","Ripple","Ebony","Wheat","Phantom","Dew","Chisel","Crack","Chatter","Laser","Foil","Tin","Clever","Treasure","Maze","Twisty","Curly","Fortune","Fate","Destiny","Cute","Slime","Ink","Disco","Plume","Time","Psychadelic","Relic","Fossil","Water","Savage","Ancient","Rapid","Road","Trail","Stitch","Button","Bow","Nimble","Zest","Sour","Bitter","Phase","Fan","Frill","Plump","Pickle","Mud","Puddle","Pond","River","Spring","Stream","Battle","Arrow","Plume","Roan","Pitch","Tar","Cat","Dog","Horse","Lizard","Bird","Fish","Saber","Scythe","Sharp","Soft","Razor","Neon","Dandy","Weed","Swamp","Marsh","Bog","Peat","Moor","Muck","Mire","Grave","Fair","Just","Brick","Puzzle","Skitter","Prong","Fork","Dent","Dour","Warp","Luck","Coffee","Split","Chip","Hollow","Heavy","Legend","Hickory","Mesquite","Nettle","Rogue","Charm","Prickle","Bead","Sponge","Whip","Bald","Frost","Fog","Oil","Veil","Cliff","Volcano","Rift","Maze","Proud","Dew","Mirror","Shard","Salt","Pepper","Honey","Thread","Bristle","Ripple","Glow","Zenith"];

	let nouns = ["head","crest","crown","tooth","fang","horn","frill","skull","bone","tongue","throat","voice","nose","snout","chin","eye","sight","seer","speaker","singer","song","chanter","howler","chatter","shrieker","shriek","jaw","bite","biter","neck","shoulder","fin","wing","arm","lifter","grasp","grabber","hand","paw","foot","finger","toe","thumb","talon","palm","touch","racer","runner","hoof","fly","flier","swoop","roar","hiss","hisser","snarl","dive","diver","rib","chest","back","ridge","leg","legs","tail","beak","walker","lasher","swisher","carver","kicker","roarer","crusher","spike","shaker","charger","hunter","weaver","crafter","binder","scribe","muse","snap","snapper","slayer","stalker","track","tracker","scar","scarer","fright","killer","death","doom","healer","saver","friend","foe","guardian","thunder","lightning","cloud","storm","forger","scale","hair","braid","nape","belly","thief","stealer","reaper","giver","taker","dancer","player","gambler","twister","turner","painter","dart","drifter","sting","stinger","venom","spur","ripper","swallow","devourer","knight","lady","lord","queen","king","master","mistress","prince","princess","duke","dutchess","samurai","ninja","knave","slave","servant","sage","wizard","witch","warlock","warrior","jester","paladin","bard","trader","sword","shield","knife","dagger","arrow","bow","fighter","bane","follower","leader","scourge","watcher","cat","panther","tiger","cougar","puma","jaguar","ocelot","lynx","lion","leopard","ferret","weasel","wolverine","bear","raccoon","dog","wolf","kitten","puppy","cub","fox","hound","terrier","coyote","hyena","jackal","pig","horse","donkey","stallion","mare","zebra","antelope","gazelle","deer","buffalo","bison","boar","elk","whale","dolphin","shark","fish","minnow","salmon","ray","fisher","otter","gull","duck","goose","crow","raven","bird","eagle","raptor","hawk","falcon","moose","heron","owl","stork","crane","sparrow","robin","parrot","cockatoo","carp","lizard","gecko","iguana","snake","python","viper","boa","condor","vulture","spider","fly","scorpion","heron","oriole","toucan","bee","wasp","hornet","rabbit","bunny","hare","brow","mustang","ox","piper","soarer","flasher","moth","mask","hide","hero","antler","chill","chiller","gem","ogre","myth","elf","fairy","pixie","dragon","griffin","unicorn","pegasus","sprite","fancier","chopper","slicer","skinner","butterfly","legend","wanderer","rover","raver","loon","lancer","glass","glazer","flame","crystal","lantern","lighter","cloak","bell","ringer","keeper","centaur","bolt","catcher","whimsey","quester","rat","mouse","serpent","wyrm","gargoyle","thorn","whip","rider","spirit","sentry","bat","beetle","burn","cowl","stone","gem","collar","mark","grin","scowl","spear","razor","edge","seeker","jay","ape","monkey","gorilla","koala","kangaroo","yak","sloth","ant","roach","weed","seed","eater","razor","shirt","face","goat","mind","shift","rider","face","mole","vole","pirate","llama","stag","bug","cap","boot","drop","hugger","sargent","snagglefoot","carpet","curtain"];

	function randomNoun(generator){
	    generator = generator || Math.random;

	    return nouns[Math.floor(generator()*nouns.length)];
	}

	function randomAdjective(generator){
	    generator = generator || Math.random;

	    return adjectives[Math.floor(generator()*adjectives.length)];
	}

	function generateStupidName(generator){
	    var noun1 = randomNoun(generator);
	    var noun2 = randomNoun(generator);
	    noun2 = noun2.substr(0, 1).toUpperCase() + noun2.substr(1);
	    var adjective = randomAdjective(generator);
	    return adjective + noun1 + ' ' + noun2;
	}


// Set initial (global) variables

	let inputPlayerNumber = 5;
	let playersPerSide = null;
	let players = [];
	let randomList = [];
	let firstTeam = [];
	let secondTeam = [];


// ---------- TEAM GENERATION ---------- //


// Event Listener tracks the value of number input and sets inputPlayerNumber to that value. 
// This is later used to determine the size of each team:

	numPlayers.addEventListener("change", event => {
		inputPlayerNumber = event.target.value;
	})



// Event handler used for generating teams:

	button1.addEventListener("click", () => {

// First it resets the score and 'winner' sections to a blank string: 

		score.textContent = "";
		winner.textContent = "";

//	Then it removes the previous teams (children of the team1 / team2 elements):

		while (team1.firstChild) {
			team1.removeChild(team1.firstChild);
		}

		while (team2.firstChild) {
			team2.removeChild(team2.firstChild);
		}

// 	If too many players are entered (>11), it returns an error message:

		if (inputPlayerNumber > 11) {
			return score.textContent = "Too many players! (Try 1-11)";
		}

//	It sets the playersPerSide variable to the number from our click handler:

		let playersPerSide = inputPlayerNumber;

//	Then uses that variable to generate an array of all the players (represented by objects). 
// 	Each player is allocated a randomly generated name and skill level. 

		for(let i=0; i<(playersPerSide * 2); i++) {
			players.push({
				name: generateStupidName(),
				skill: Math.floor((Math.random() * 10) +1),		
			});
		}

// 	The player array is shuffled randomly using the Fisher-Yates algorithm:

		let shufflePlayers = players => {
		    for (let i = players.length - 1; i > 0; i--) {
		        const j = Math.floor(Math.random() * (i + 1));
		        [players[i], players[j]] = [players[j], players[i]];
		    }
		    return players;
		}

// 	Then split into two arrays of equal size: 

		randomList = shufflePlayers(players);
		firstTeam = randomList.slice(0, (players.length/2));
		secondTeam = randomList.slice((players.length/2), players.length);

//	This function generates li elements with a class "team-member", container the player names
//	and skill levels. 

		let listTeam = (team, location) => {
			let namesList = team.map(member => {
				let li = d.createElement("li");
				li.classList.add("team-member");
				li.textContent = member.name + " (skill: " + member.skill + ")";
				location.appendChild(li);

			});
			return namesList;	
		}

//	And is then immediately invoked, showing the team names on-screen:

		listTeam(firstTeam, team1);
		listTeam(secondTeam, team2);

//	Initial variables are reset for subsequent clicks of the event handler: 

		playersPerSide = null;
		players = [];

	})


// ---------- SCORE / WINNER GENERATION ---------- //



// 	This click handler is used to 'play' a match by generating the number of goals each team scores
//	and determining the winner:

	button2.addEventListener("click", () => {

// 	If no teams have been generated, it returns an error message:

		if(team1.children.length === 0) {
			return score.textContent = "Generate teams first!";
		}

//	This function adds the skill numbers each team member and stores it in a variable ('teamSkill').  
//  It then generates a'teamPerformance' variable, which is the rounded product of a random number
// 	and teamSkiil, thus simulating a mix of luck and skill. 

//	The teamPerformance number is then mapped onto a number of goals, using an if-statement:


		let numberOfGoals = team => {
			let teamSkill = team.reduce((acc, member) => acc + member.skill, 0);
			let teamPerformance = Math.floor(Math.random() * teamSkill);

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

// 	This function invokes the numberOfGoals function and uses an if-statement to work out which
//	team won. It then outputs the victor to the DOM:

		let decideWinner = (firstTeam, secondTeam) => {

			let firstTeamScore = numberOfGoals(firstTeam);
			let secondTeamScore = numberOfGoals(secondTeam);

			if(firstTeamScore > secondTeamScore) {
				winner.textContent = "Team One Wins!";
			} else if (firstTeamScore === secondTeamScore) {
				winner.textContent = "Draw!";
			} else {
				winner.textContent = "Team Two Wins!";
			}

			score.textContent = "Score: " + firstTeamScore + " - " + secondTeamScore;

		}

//	The function is then immediately invoked:

		decideWinner(firstTeam, secondTeam);

	}) 



})(document);



			








