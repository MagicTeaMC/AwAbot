const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
client.login(auth.key);
client.on('ready', () => {
    console.log(`製作者`);
    console.log(`垃圾機器人登入到 ${client.user.tag}哈哈Gay`);
});
client.on('message', msg => {
    let set = ('983707619694882866');
    if (msg.channel.id === set) {
        if (msg.author.bot) return;
        if (msg.content === 'AwA') {
            msg.react('✅')
            console.log("AwA");
        } else {
            msg.react('❌')
            msg.channel.send(`${msg.author.tag}打錯了QwQ`)
            console.log("有人手很Gay 打錯了")
        }
    }

});