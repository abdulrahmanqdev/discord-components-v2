const { 
  SlashCommandBuilder, 
  ActionRowBuilder, 
  ButtonBuilder, 
  SectionBuilder, 
  TextDisplayBuilder, 
  ContainerBuilder, 
  ThumbnailBuilder
} = require("@discordjs/builders");
const { MessageFlags, ButtonStyle } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("embed-alt-buton")
    .setDescription("Metnin altında (Container içinde) buton olan bir mesaj gönderir."),

  usage: "/embed-alt-buton",
  description: "Metnin altında (Container içinde) buton olan bir mesaj gönderir.",
  category: "public",

  async execute(interaction, bot) {
    await interaction.reply({
      flags: MessageFlags.IsComponentsV2,
      components: [{
        type: 17, // Container
        accent_color: 0xe74c3c,
        components: [
          { type: 10, content: "Bu buton metnin altında ama hala Container içindedir." },
          {
            type: 1, // Action Row
            components: [{
              type: 2, // Button
              custom_id: "inner_btn",
              label: "İç Buton",
              style: 1 // Primary
            }]
          }
        ]
      }]
    });
  },
};
