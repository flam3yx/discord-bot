const { SlashCommandBuilder } = require('discord.js');
//so they can be read by other files
module.exports = {
    //provide the command definition shown above for registering to Discord
	data: new SlashCommandBuilder().setName('ping').setDescription('Replies with Pong!'),
    //contain the functionality to run from our event handler when the command is used
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};