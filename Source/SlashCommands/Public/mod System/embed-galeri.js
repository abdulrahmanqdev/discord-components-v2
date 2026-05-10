const { 
  SlashCommandBuilder, 
  ContainerBuilder, 
  SectionBuilder, 
  TextDisplayBuilder, 
  MediaGalleryBuilder, 
  MediaGalleryItemBuilder, 
} = require("@discordjs/builders");
const { MessageFlags, spoiler } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("embed-galeri")
    .setDescription("V2 yapısı ile bir medya galerisi gönderir."),

  usage: "/embed-galeri",
  description: "V2 yapısı ile bir medya galerisi gönderir.",
  category: "public",

  async execute(interaction, bot) {
    await interaction.reply({
      flags: MessageFlags.IsComponentsV2,
      components: [{
        type: 17, // Container
        accent_color: 0xf1c40f,
        components: [
          { type: 10, content: "# 📸 Fotoğraf Galerisi" },
          {
            type: 12, // Media Gallery
            items: [
              { media: { type: 13, url: "https://cdn.discordapp.com/embed/avatars/0.png", description: "Logo", spoiler: true } },
              { media: { type: 13, url: "https://cdn.discordapp.com/embed/avatars/1.png", description: "Avatar 1" }, spoiler: true },
              { media: { type: 13, url: "https://cdn.discordapp.com/embed/avatars/2.png", description: "Avatar 2" } }
            ]
          }
        ]
      }]
    });
  },
};
