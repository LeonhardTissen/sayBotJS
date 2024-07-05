function isSayCommand(message) {
	return message.content.startsWith('say ') && message.content.includes(' when someone says ');
}

function sayCommand(message) {
	const [before, trigger] = message.content.split(' when someone says ');
	const response = before.replace('say ', '').trim();

	console.log(trigger, response);
}

module.exports = {
	isSayCommand,
	sayCommand,
};
