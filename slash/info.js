const { SlashCommandBuilder } = require("@discordjs/builders")
const { EmbedBuilder } = require("discord.js")

module.exports = {
	data: new SlashCommandBuilder().setName("info").setDescription("Displays info about the currently playing song"),
	run: async ({ client, interaction }) => {
		const queue = client.player.getQueue(interaction.guildId)

		if (!queue) return await interaction.editReply("There are no songs in the queue, For more information see https://paste.gg/p/anonymous/7979d24780ef44b6aa8f7d460e8794a5	")

		let bar = queue.createProgressBar({
			queue: false,
			length: 19,
		})

        const song = queue.current

		await interaction.editReply({
			embeds: [new EmbedBuilder()
            .setThumbnail(song.thumbnail)
            .setDescription(`Currently Playing [${song.title}](${song.url})\n\n` + bar)
        ],
		})
	},
}