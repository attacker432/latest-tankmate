module.exports = {
  sendLog: async (interaction, message) => {
    const logChName = '1031188101621620826';
    const log = await interaction.guild.channels.cache.find((ch) => ch.name === `${logChName}`);
    let msgContent = {};
    if (message.color) msgContent = { embeds: [message] };
    else msgContent = { content: message };
    interaction.reply(msgContent);
    if (log) log.send(msgContent);
  }
}