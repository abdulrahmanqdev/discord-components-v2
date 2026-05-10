const { 
  SlashCommandBuilder, 
  ActionRowBuilder, 
  ChannelSelectMenuBuilder, 
  SectionBuilder, 
  TextDisplayBuilder, 
  ContainerBuilder, 
  ButtonBuilder,
  ThumbnailBuilder
} = require("@discordjs/builders");
const { MessageFlags } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("embed-kanal-sec")
    .setDescription("V2 yapısı ile kanal seçme menüsü gönderir."),

  usage: "/embed-kanal-sec",
  description: "V2 yapısı ile kanal seçme menüsü gönderir.",
  category: "public",

  async execute(interaction, bot) {
    await interaction.reply({
      flags: MessageFlags.IsComponentsV2,
      components: [{
        type: 17, // Container
        accent_color: 0x3498db,
        components: [
          { type: 10, content: "# Kanal Seçimi\nLütfen aşağıdan bir kanal seçiniz:" },
          {
            type: 1, // Action Row
            components: [{
              type: 8, // Channel Select
              custom_id: "v2_channel_select",
              placeholder: "Bir kanal seç..."
            }]
          }
        ]
      }]
    });
  },
};
