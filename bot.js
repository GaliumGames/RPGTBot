console.log('initializing...');

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);
var objects = require('./classes');
var stream = T.stream('user');

stream.on('tweet', tweetEvent);

function PlayerInfo () {
    this.name = '';
    this.level = 0;
    this.xp = 0;
    this.position = {x:0,y:0};
    this.inventory = Inventory();
};

function Inventory (){
    var inv = [];
    for (var i = 0; i < 10; i++) {
        inv[i] = {
            name: '',
            amount: 0
        }
    }
    return inv;
}

var commands ={
    'help':{
        'synonms':['help', 'commands'],
        'run': function () {},
    },
    'move': {
        'synonms': ['move', 'goto'],
        'run': function (personFrom, context) {
            //use file at data\players.json to get position and edit
            //edit file at data\map.json to sync player position
        }
    },
    'scan': {
        'synonms': ['scan', 'lookaround'],
        'run': function () { }
    }
}

start();
setInterval(function () {    

}, 120000) //every 2 minutes

function start()
{
    console.log('The RPGTBot has started');
}

function tweetEvent(eventMsg) {
	
    var replyTo = eventMsg.in_reply_to_screen_name;
    var from = eventMsg.personFrom;
	var text = eventMsg.text;
	var senderUserName = eventMsg.user.screen_name;
	var senderName = eventMsg.user.name;

	if(replyTo === 'JohnLockeBot')
	{
	    text = text.replace(/@JohnLockeBot /g, '');
	    text = text.replace(' ', '');
		text = text.toLowerCase();
		scanForCommands(from, text);
	}

}

function scanForCommands(personFrom, text)
{

}

function tweet(txt) {
	
	txt += '[' + String(Math.floor(Math.random() * 10000)) + ']';
	
	var tweet = {
		status: txt
	}

	T.post('statuses/update', tweet, tweeted);
	
	function tweeted(err, data, response) {
		if (err) {
			console.log('Somthing went wrong when trying to tweet! Dumping to err file.');
			dumpError(err);
		}
	}
}

function dumpError(err) {
	var fs = require('fs');
	var json = JSON.stringify(err, null, 2);
	fs.writeFile("err.json", json);
}