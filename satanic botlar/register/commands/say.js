const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
exports.run= async (client, message, args) => {       

let Tag = (ayarlar.tag)
let Etiket = (ayarlar.etikettag) 

   let TotalMember = message.guild.memberCount
          let Online = message.guild.members.cache.filter(off => off.presence.status !== 'offline').size;
          let Taglı = message.guild.members.cache.filter(u => u.user.username.includes(Tag)).size;
          let Etiketiniz = message.guild.members.cache.filter(u => u.user.discriminator.includes(Etiket)).size;
          let toplamTag = Etiketiniz + Taglı
          let Voice = message.guild.members.cache.filter(s => s.voice.channel).size;
          let Boost = message.guild.premiumSubscriptionCount;

message.channel.send(new Discord.MessageEmbed().setDescription(`
Sunucumuzda toplam **${TotalMember}** üye bulunmaktadır.
   Sunucumuzda toplam **${Online}** aktif üye bulunmaktadır.
   Toplam **\`${Tag}\` : ${Taglı}  \`${Etiket}\` : ${Etiketiniz}**   kişi bizi destekliyor.
   Sesli Sohbette **${Voice}** kullanıcı bulunmaktadır.
Sunucuya toplam **${Boost}** takviye yapılmış ve sunucumuz **3.**Seviye.
`))



}
exports.config = {
    name: "say",
    guildOnly: true,
    aliases: ["say"]
}