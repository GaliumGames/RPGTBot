console.log('The RPGT Bot is starting');
<<<<<<< HEAD


var commandSynonyms = [ //
	['help', 'commands'], 
	['move', 'go'], 
	['scan', 'look around']
]

var context = { //
	'help': [''],
	'move': ['up', 'down', 'left', 'right', 'north', 'south', 'west', 'east', 'forward', 'backward'],
	'scan': ['']
}
=======
>>>>>>> parent of b2249c0... Test Run

start();


function start()
{
<<<<<<< HEAD
<<<<<<< HEAD
	console.log('The RPGT Bot has started');
	
	for (var i = 0; i < commandSynonyms.length; i++) //
	{
		console.log(commandSynonyms[i]);
	}
=======
	
>>>>>>> parent of b2249c0... Test Run
=======
	
>>>>>>> parent of b2249c0... Test Run
}

function tweetEvent(eventMsg) {



}

function tweet(txt) {
	
	txt += '[' + String(Math.floor(Math.random() * 10000)) + ']';
	
	var tweet = {
		status: txt
	}

	T.post('statuses/update', tweet, tweeted);
	
	function tweeted(err, data, response) {
		if (err) {
			console.log("Somthing went wrong when trying to tweet! Dumping to err file.");
			var fs = require('fs');
			var json = JSON.stringify(err, null, 2);
			fs.writeFile("err.json", json);
		}
		else
		{

		}
	}
<<<<<<< HEAD
<<<<<<< HEAD
}

// function commandHelp() {
	// var str = '';
	
	// for (var i = 0; i < commandSynonyms.length; i++)
	// {
		
	// }
	
// }

function dumpError(err) {
	var fs = require('fs');
	var json = JSON.stringify(err, null, 2);
	fs.writeFile("err.json", json);
=======
>>>>>>> parent of b2249c0... Test Run
=======
>>>>>>> parent of b2249c0... Test Run
}