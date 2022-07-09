const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
client.login(config.key);
client.on('ready', () => {
    console.log(`製作者： Maoyue#4997`);
    console.log(`使用時請遵守`);
    console.log(`機器人登入到 ${client.user.tag}`);
});
client.on('message', msg => {
    let set = (`${config.AwAch}`);
    if (msg.channel.id === set) {
        if (msg.author.bot) return;
        if (msg.content === `${config.AwAword}`) {
            msg.react('✅')
            console.log(`${config.AwAword}`);
        } else {
            msg.react('❌')
            msg.channel.send(`<@${msg.author.id}>打錯了AwA`)
            console.log("有人手很Gay 打錯了")
        }
    }

});