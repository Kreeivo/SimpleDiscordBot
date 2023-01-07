const { SlashCommandBuilder } = require("@discordjs/builders")
const { EmbedBuilder } = require("discord.js")

module.exports = {
	data: new SlashCommandBuilder().setName("help").setDescription("Displays Commands"),
	run: async ({ client, interaction }) => {
		const queue = client.player.getQueue(interaction.guildId)

		if (!queue) return await interaction.editReply
		embeds: [new EmbedBuilder()
			.setDescription (
				`/info --Displays information about the current song.\n/pause -- Pauses the current song playing.\n/play song -- Plays a youtube song through a url.\n .play search -- Plays a song based of keyterms entered by the user. \n /queue -- Displays the queue.\n/quit -- The bot will leave the voice channel.\n/resume -- resumes the current song.\n/shuffle -- shuffles the current playlist.\n/skip -- skips to the next song in the playlist.\n/skipto -- skips to a chose song within the playlist.\n\n `)
        ]
		
		let bar = queue.createProgressBar({
			queue: false,
			length: 19,
		})

        const song = queue.current

		await interaction.editReply({
			embeds: [new EmbedBuilder()
            .setDescription (
				`/info --Displays information about the current song.\n/pause -- Pauses the current song playing.\n/play song -- Plays a youtube song through a url.\n /play search -- Plays a song based of keyterms entered by the user. \n /queue -- Displays the queue.\n/quit -- The bot will leave the voice channel.\n/resume -- resumes the current song.\n/shuffle -- shuffles the current playlist.\n/skip -- skips to the next song in the playlist.\n/skipto -- skips to a chose song within the playlist.\n\n `)
        ],
		})
	},
}