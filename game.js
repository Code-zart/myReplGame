const readline = require("readline-sync");

function playAgain() {
  if (readline.keyInYN(`Play again? `) == false) {
    console.log(`Bye, pathetic loser.`)
    process.exit()
  } else gameStart();
}


//  ROUND O

let playerName, playerPlanet;

let introScript = `Greetings, being! Welcome to \"ENSLAVE THE PLANET!!\" 

Thank you for joining our Intergalactic Armada. Your mission: It is the will of the Glorious Supreme Leader for you to travel to Generic-Chocolate-Bar-Galaxy-12 so that you may enslave and dominate a planet called \"Earth,\" which has been identified for its resource abundance, as well as for its exceptionally stupid and odorous life-forms who call themselves \"humans.\"

Enslave these disgusting humans, but DO NOT annihilate them! Also, don't die (lol). We need the humans alive; their slave labor is necessary to harvest the planetary resources. It's WAAAAAAAAY cheaper than commissioning and shipping a bunch of slave robots.`;

let defaultName = `Ass-Face`;

let humanSpy = `WHATT?!? NO! How has a pathetic human infiltrated our Intergalactic Armada?? DIE, HUMAN!!!!!!!`;

console.log(introScript);

getPlayerName = () => {
  playerName = readline.question(`What's your name, being? ` , {defaultInput: defaultName});
    if (playerName == defaultName || 
        playerName == null || 
        playerName == undefined) {
        console.log(`Really? You don't have a name? Okay then, your name is ${defaultName}.`);
        playerName = defaultName;
    } else {
        console.log(`${playerName}! Outstanding! A name becoming of an intergalactic dictator-to-be.`);
    }   
  }

getPlayerName();


getPlayerPlanet = () => {
  if ((readline.question(`And from whence do you hail, ${playerName}?`.toLowerCase()) == "earth")) {
      console.log(humanSpy);
      setTimeout(playAgain(), 3000);
  }  else return playerPlanet;
}

getPlayerPlanet();


// ROUND 1


let rdOneScript = `How do you wish to initiate your offensive, ${global.namePlayer} of ${global.planetPlayer}?`;



function begOfRdOne() {
     console.log(rdOneScript);
}