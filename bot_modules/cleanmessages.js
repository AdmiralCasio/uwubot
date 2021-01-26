"usestrict"

let botConfig = require('../config.json');
let serverConfig = require('../server_config');

let help = "**Clean**\n";

let commandHandlers = {};
const clearer = "!clear @uwubot";

commandHandlers.clean = function (message, args){
                message.channel.send(clearer);
}