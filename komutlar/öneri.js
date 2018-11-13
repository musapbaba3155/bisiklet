const Discord = require('discord.js');


exports.run = function(client, message, args) {

	var öneri = args.slice(0).join(' ');
	var guildID = "497132946248171551";
	var channelID = "506205830434127872";

	if (!öneri){
		return message.reply("Bir mesaj belirtin! Doğru kullanım: **..öneri <mesaj>** sadece site-fikirler-şiakyetler kanalında kullanılır!");
	} else {

		var embed = new Discord.RichEmbed()
			.setTimestamp()
			.addField("Eylem:", "Öneri")
			.addField("Kullanıcı:", message.author.tag)
			.addField("ID", message.author.id)
			.addField("Öneri", öneri)

		client.guilds.get(guildID).channels.get(channelID).send(embed);
		message.channel.send("Öneriniz alınmıştır! Teşekkür ederiz.");
	};


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["öner"],
  permLevel: 0
};

exports.help = {
  name: 'öneri',
  description: "bot hakkındaki önerilerinizi bot sahiplerine ulaştırır",
  usage: 'öneri <mesaj>'
};
