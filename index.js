import { Client, Events, GatewayIntentBits } from 'discord.js';
import { config } from 'dotenv';

config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds],
});

//Função com mensagem de quando o bot fica online
function botReady(){
    console.log(`Boas estou online. ${client.user.tag}`);
}


client.once(Events.ClientReady, botReady);

client.login(process.env.TOKEN);