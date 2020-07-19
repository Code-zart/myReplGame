const prompt = require("readline-sync");


// Introduction/Round 0: The player is introduced to the game, enters their name and planet of origin, and 
// proceeds to Round 1.

// The name cannot be null, undefined, or a string containing only empty spaces, but any other value should be 
// accepted and wrapped in a global binding as a string. (Max 30 characters)

// The planet should fulfill the same but also cannot be "Earth." If the planet entered is Earth the player 
// loses the game immediately. 

// TO DECLARE/INIT: Function that accepts only the numbers 1, 2, or 3 as inputs. If the player enters anything 
// else it prompts them again, and creates if/else options for the rest.

// Function that asks the player if they wish to play again once they lose (only accepts y/n).

// Strings for all Round 0 and Round 1 script.

// Function that logs enclosed binding slowly (setTimeout)



let introScript = `Greetings, being! Welcome to \"ENSLAVE THE PLANET!!\" 
Thank you for joining our Intergalactic Armada. Your mission\: 
It is the will of the Glorious Supreme Leader for you to travel to 
Generic-Chocolate-Bar-Galaxy-12 so that you may enslave and dominate 
a planet called \"Earth,\" which has been identified for its resource 
abundance, as well as for its exceptionally stupid and odorous 
life-forms who call themselves \"humans.\"

Enslave these disgusting humans, but DO NOT annihilate them! 
Also, don't die (lol). We need the humans alive; their slave labor is 
necessary to harvest the planetary resources. It's WAAAAAAAAY cheaper 
than commissioning and shipping a bunch of slave robots.`;


 console.log(introScript);