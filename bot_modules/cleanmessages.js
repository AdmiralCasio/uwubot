let botConfig = require('../config.json');
let serverConfig = require('../server_config');

let commandHandlers = {};
const clearer = "!clear @uwubot";

commandHandlers.clean = function (message, args){
        if (message === "clean")
        {
                message.channel.send(clearer);
        }
};