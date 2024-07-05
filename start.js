
const { db } = require('./db');
const { createClient } = require('./client');
require('dotenv').config()

const token = process.env.BOT_TOKEN;

function startBot() {
	const client = createClient();
	// Set up the message event
	client.on('messageCreate', (message) => {
		if (message.author.bot) return;

		console.log(message.content);
	});
	
	// Log in to Discord with the bot's token
	client.login(token);
	
	// Close the database connection when not in use
	process.on('exit', () => {
		client.destroy();
		db.close();
	});

	return client;
}
exports.startBot = startBot;
