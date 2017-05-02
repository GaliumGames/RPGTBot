console.log('The RPGT Bot is starting');

start();


function start()
{
	
}

function tweetEvent(eventMsg) {



}

function tweet(txt) {
	
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
}