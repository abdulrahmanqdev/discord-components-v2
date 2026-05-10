const { EmbedBuilder } = require("discord.js");
const bot = global.client;

module.exports = async (interaction) => {
  if (interaction.isChatInputCommand()) {
    const command = bot.Public.get(interaction.commandName)
    if (!command) return;

    if (!interaction.guild) return interaction.reply({ content: "Komutlarım sunucuya özeldir.", ephemeral: true })

    try {
      await command.execute(interaction, bot);
    } catch (err) {
      if (err) console.error(err);
    }
  }

  if (interaction.isButton()) {
    if (interaction.customId === "right_btn") {
      await interaction.reply({ content: "Sağdaki butona tıkladın!", ephemeral: true });
    } else if (interaction.customId === "inner_btn") {
      await interaction.reply({ content: "İçerideki (alttaki) butona tıkladın!", ephemeral: true });
    }
  }

  if (interaction.isChannelSelectMenu()) {
    if (interaction.customId === "v2_channel_select") {
      const channelId = interaction.values[0];
      await interaction.reply({ content: `Seçilen kanal: <#${channelId}>`, ephemeral: true });
    }
  }
};

module.exports.conf = {
  name: "interactionCreate",
};
