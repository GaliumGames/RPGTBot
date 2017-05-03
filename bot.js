console.log('initializing...');

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

var stream = T.stream('user');

stream.on('tweet', tweetEvent);


var commandSynonyms = { //
	'help': {'help', 'commands'}, 
	'move': {'move', 'go'}, 
	'scan': {'scan', 'look around'} 
}

var context = { //
	help: {''}
	move: {'up', 'down', 'left', 'right', 'north', 'south', 'west', 'east', 'forward', 'backward'}
	scan: {''}
}

start();


function start()
{
	console.log('The RPGT Bot has started');
	
	for (var i = 0; i < commandSynonyms.length; i++) //
	{
		console.log(commandSynonyms[i]);
	}
}

function tweetEvent(eventMsg) {
	
	var replyTo = eventMsg.in_reply_to_screen_name;
	var text = eventMsg.text;
	var senderUserName = eventMsg.user.screen_name;
	var senderName = eventMsg.user.name;

	if(replyTo === 'JohnLockeBot')
	{
		text = text.replace(/@JohnLockeBot /g, '');
		//var gReturn = guess(text, senderName, senderUserName);
	}

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
			dumpError(err);
		}
		else
		{

		}
	}
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
}