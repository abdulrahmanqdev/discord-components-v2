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
    .setName("embed-buton")
    .setDescription("Discord Components V2 özelliği ile butonlu bir mesaj gönderir."),

  usage: "/embed-buton",
  description: "Discord Components V2 özelliği ile butonlu bir mesaj gönderir.",
  category: "public",

  async execute(interaction, bot) {
    await interaction.reply({
      flags: MessageFlags.IsComponentsV2,
      components: [{
        type: 17, 
        accent_color: 0x2b2d31,
        components: [{
          type: 9,
          components: [
            { type: 10, content: "# Buton Yan Tarafta" },
            { type: 10, content: "Bu buton metnin hemen sağında (Accessory) durur." }
          ],
          accessory: {
            type: 2,
            custom_id: "right_btn",
            label: "Sağ Buton",
            style: 3
          }
        }]
      }]
    });
  },
};
